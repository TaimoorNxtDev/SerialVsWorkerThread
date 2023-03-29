# String Hashing - Serial vs Parallel Execution
This repository contains a program that demonstrates the difference between serial and parallel execution in string hashing using worker threads in Node.js. The program also includes an option to run both serial and parallel executions in parallel using child processes.
By default, the program will hash 10000000 strings using crypto module.

Requirements
To run the program, you will need:

Node.js
npm
Installation

## Clone the repository:
Copy code
```git clone https://github.com/TaimoorNxtDev/SerialVsWorkerThread.git```



Usage
## To run the program with parallel executions, use the following command:
### Copy code
```npm run parallelThreadExec```

## To run the program with serial execution only, use the following command:
### Copy code
```npm run serialExecution```



## To compare the performance of serial and parallel execution
### Copy code
```npm run main```


# Results
The program will output the time taken for string hashing using serial execution and parallel execution with 2 worker threads. If you run the program with the ```npm run main```, it will also output the time taken for both serial and parallel executions to complete.

You can use this information to compare the performance of the two methods.

License
This project is licensed under the MIT License. See the LICENSE file for details.





