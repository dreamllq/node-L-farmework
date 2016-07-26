/**
 * Created by lvliqi on 2016/7/19.
 */
var pm2 = require('pm2');
var config = require("./package.json");
var process = require("process");

pm2.connect(function (err) {
    if (err) {
        console.error(err);
        process.exit(2);
    }

    pm2.stop(config.name, function (err) {
        if (err) console.error(err);
        pm2.delete(config.name, function (err) {
            if (err) console.error(err);
            pm2.start({
                "name": config.name,
                "script": config.pm2.script,
                "args": [],
                "error_file": "logs/err.log",
                "out_file": "logs/out.log",
                "merge_logs": true,
                "log_date_format": "YYYY-MM-DD HH:mm:ss",
                "min_uptime": "200s",
                "max_memory_restart": config.pm2.max_memory_restart,
                "watch": config.pm2.watch,
                "exec_mode": "cluster",
                "autorestart": true,
                "vizion": true,
                "instances": config.pm2.instances,
                "env": {
                    "NODE_PORT": config.pm2.port
                }
            }, function (err, apps) {
                if (err) console.error(err);
                pm2.disconnect();   // Disconnect from PM2

                process.exit();
            });

        })
    });

});