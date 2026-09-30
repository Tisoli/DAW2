<?php
/*
==========================================
Bigfatfish - DeepSeek 调用封装
==========================================
只做两件事：
  1) chat()        → 带历史上下文，返回 AI 回复文本
  2) detectMood()  → 让模型根据对话推测用户心情（只返回一个词）
*/

class DeepSeek
{
    private array $cfg;

    public function __construct(array $cfg)
    {
        $this->cfg = $cfg;
    }

    /* 底层请求，返回解码后的数组 */
    private function request(array $payload): array
    {
        $ch = curl_init($this->cfg['base_url'] . '/chat/completions');

        curl_setopt_array($ch, [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST           => true,
            CURLOPT_HTTPHEADER     => [
                'Content-Type: application/json',
                'Authorization: Bearer ' . $this->cfg['api_key'],
            ],
            CURLOPT_POSTFIELDS     => json_encode($payload, JSON_UNESCAPED_UNICODE),
            CURLOPT_TIMEOUT        => $this->cfg['timeout'],
            CURLOPT_CONNECTTIMEOUT => 10,
        ]);

        $resp = curl_exec($ch);
        $err  = curl_error($ch);
        $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

        if ($resp === false) {
            throw new Exception('No se pudo conectar con DeepSeek: ' . $err);
        }

        $data = json_decode($resp, true);

        if ($code >= 400 || !is_array($data)) {
            $msg = $data['error']['message'] ?? $resp;
            throw new Exception("DeepSeek error ({$code}): {$msg}");
        }

        return $data;
    }

    /*
     * 带历史上下文聊天
     * $messages: [ ['role'=>'user'|'assistant','content'=>...], ... ]
     */
    public function chat(array $messages, int $maxTokens = 512, float $temperature = 0.8): string
    {
        $data = $this->request([
            'model'       => $this->cfg['model'],
            'messages'    => $messages,
            'max_tokens'  => $maxTokens,
            'temperature' => $temperature,
        ]);

        return $data['choices'][0]['message']['content'] ?? '';
    }

    /*
     * 推测用户心情：给最近几条对话，返回一个中文/西文心情词
     */
    public function detectMood(array $messages): string
    {
        $contexto = '';
        foreach (array_slice($messages, -8) as $m) {
            $rol = ($m['role'] === 'user') ? 'Usuario' : 'IA';
            $contexto .= $rol . ': ' . $m['content'] . "\n";
        }

        $data = $this->request([
            'model' => $this->cfg['model'],
            'messages' => [
                [
                    'role'    => 'system',
                    'content' => 'Eres un analizador de emociones. Según la conversación, '
                        . 'deduce el estado de ánimo del Usuario. Responde SOLO con una palabra '
                        . 'en español, por ejemplo: feliz, triste, enojado, ansioso, tranquilo, '
                        . 'emocionado, cansado, neutral. No expliques nada.',
                ],
                ['role' => 'user', 'content' => $contexto],
            ],
            'temperature' => 0,
            'max_tokens'  => 8,
        ]);

        $mood = trim($data['choices'][0]['message']['content'] ?? '');
        return $mood !== '' ? $mood : 'neutral';
    }
}
