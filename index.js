const ps = require('ps-node');
const pids = require('port-pid');

const portIndex = process.argv.indexOf('port');
const PORT = process.argv[portIndex + 1];

// uncomment this is hardcode your own port number
// PORT = 1152;

console.log('Finding PID on PORT:', PORT);

pids(parseInt(PORT, 10)).then(pids => {
    if (pids.all.length === 0){
        console.log('No program was running previously');
       return;
    }

    console.log("All process attached on this port: ", pids.all);
    const PID = pids.all[0];
    ps.kill(PID, function( err ) {
        if (err) console.log("ERROR: ", err.message);    
        else console.log(`Process with pid ${PID} has been killed!`);
    })
});
