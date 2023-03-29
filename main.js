const { spawn } = require('child_process');
const { performance } = require('perf_hooks');
const start = performance.now();

console.time("program")


// Spawn first script
const child1 = spawn('node', ['serialExecution.js']);
let script1Output = '';
child1.stdout.on('data', (data) => {
  script1Output += data.toString();
});


// Spawn second script
const child2 = spawn('node', ['parallelThreadExec.js']);
let script2Output = '';
child2.stdout.on('data', (data) => {
  script2Output += data.toString();
});



// Listen for exit events of child processes
Promise.all([
    new Promise((resolve) => child1.on('exit', resolve)),
    new Promise((resolve) => child2.on('exit', resolve)),
  ]).then(() => {
    const end = performance.now();
    console.log(`Scripts took ${end - start} milliseconds to complete`);
    console.log('Serial Execution output:', script1Output);
    console.log('Parallel Execution output:', script2Output);
  });

