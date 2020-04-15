const ps = require('ps-node');
const pids = require('port-pid');
 

pids(4202).then(pids => {
    console.log(pids.all);
    if (pids.all.length === 0){
        console.log('No program was running previously');
    }
    const PID = pids.all[0];
    ps.kill(PID, function( err ) {
        if (err) console.log("ERROR: ", err.message);    
        else console.log(`Process with pid ${PID} has been killed!`);
    })
});



/*
const PID = 1137;
const pidObject = { pid: PID };
ps.lookup(pidObject, function(err, resultList ) {
    if (err) console.log(err.message);
    console.log(resultList);

    var process = resultList[0];
    
    if (process) {
        console.log('PID: %s, COMMAND: %s, ARGUMENTS: %s', process.pid, process.command, process.arguments);
        
        ps.kill(PID, function( err ) {
            if (err) 
                console.log("ERROR: ", err.message);    
            else console.log(`Process with pid ${PID} has been killed!`);
        })

    } else console.log('No such process found!');
})
*/