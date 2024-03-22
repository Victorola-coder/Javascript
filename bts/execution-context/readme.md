# Execution context

Inside the browser is a JavaScript engine that handles executing our JavaScript. That engine creates a special environment to handle the transformation and execution of code. This environment is called the `execution context`, and it contains the currently running code and everything that aids in its execution.

When we load a JavaScript file in the browser, the first thing that the engine does is create a new execution context. This is called the `global execution context`. It basically includes all of the code that is in the `global scope`. We talked about scope earlier.

## Visualizing the execution context

To give you a better idea of what the execution context looks like, you can picture it as a box with 2 sides. One side is the `variable environment` which is a memory area for your variables and functions in key-value pairs.

Then on the other side,you have your actual lines of code being run. This is the `thread of execution`. The code is executed one line at a time on a **single thread**, which you can think of as like a **process**. JavaScript is a single-threaded, synchronous language.
