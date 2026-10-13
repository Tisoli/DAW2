const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
    console.log("=========================================");
    console.log("🔥 BOMBARDEO SIMULTÁNEO DE CPU Y RAM INICIADO...");
    console.log(`Núcleos de CPU detectados: ${numCPUs}`);
    console.log("Presione Ctrl + C para detener inmediatamente");
    console.log("=========================================");

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork({ WORKER_TYPE: i % 2 === 0 ? 'CPU' : 'RAM' });
    }

    cluster.on('exit', (worker, code, signal) => {
        if (signal !== 'SIGINT') {
            cluster.fork({ WORKER_TYPE: worker.process.env.WORKER_TYPE });
        }
    });
} else {
    const type = process.env.WORKER_TYPE;

    if (type === 'RAM') {
        const memoryReservoir = new Array();
        setInterval(() => {
            try {
                const buffer = new Float64Array(15000000);
                buffer.fill(Math.random());
                memoryReservoir.push(buffer);
                
                const currentAllocated = process.memoryUsage().rss / 1024 / 1024 / 1024;
                console.log(`[Proceso RAM ${process.pid}] Ocupado: ${currentAllocated.toFixed(2)} GB`);
            } catch (error) {
                memoryReservoir.length = Math.floor(memoryReservoir.length / 2);
            }
        }, 5);
    } else {
        console.log(`[Proceso CPU ${process.pid}] Atacando núcleo de CPU...`);
        while (true) {
            Math.sqrt(Math.random() * Math.random());
        }
    }
}
