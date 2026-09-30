<?php
/*
==========================================
Bigfatfish - DeepSeek 配置
==========================================
把 API Key 换成你自己的。
也可以改用环境变量 DEEPSEEK_API_KEY（更安全，推荐上线时用）。
*/

return [
    // DeepSeek 官方地址（OpenAI 兼容）
    'base_url' => 'https://api.deepseek.com/v1',

    // 你的 DeepSeek API Key：https://platform.deepseek.com  →  API Keys
    'api_key'  => getenv('DEEPSEEK_API_KEY') ?: 'sk-你猜',

    // 模型：deepseek-chat（通用对话）
    'model'    => 'deepseek-chat',

    // 请求超时（秒）
    'timeout'  => 60,

    // 送给模型的历史条数上限（避免上下文过长/变慢）
    'history_limit' => 20,
];
