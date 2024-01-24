# Express-conditional-route
Assignment for my Web app class

Steps to run the server:
1- Make sure Node.js is correctly installed. 
2- Make sure package.json is set up appropriately. 
3- Make sure you are in the right folder when using the terminal. 
4- Type in the Terminal "node express1.js".

An explanation of how the conditional routing is implemented:

The conditional route is implemented by two different route handlers. The first one uses a Math.random() function to randomly give a number between 0 and one. Then, if the number is smaller than .5 it will print the 'Sometimes this' statement. Otherwise, it will go to the second route handler while using the next() method. The second handler prints 'And sometimes that'.
