//required import
import express from 'express';
//setup 
const app = express();
app.set('port', process.env.PORT || 3000);
//home routr
app.get('/', (req, res) =>{
    res.type('text/plain');
    res.send("Hello World");
});
//about route
app.get('/about', (req, res) =>{
    res.type('text/plain');
    res.send("About Page");
});

// Conditional routing /foo
app.get('/foo', (req, res, next) => {
    // Randomly picks between two responses implementing the .random() method.
    const randomNum = Math.random();
    if (randomNum < 0.5) {
        res.type('text/plain');
        res.send('Sometimes this');
    } else {
        // skips to the other route 
        next();
    }
});

// Second route handler  /foo
app.get('/foo', (req, res) => {
    res.type('text/plain');
    res.send('And sometimes that');
});

//404 message
app.use((req, res) =>{
    res.type('text/plain');
    res.status(404).send('404 - Not Found');
});

// Setting up the server 
const PORT = process.env.PORT || 3000;


// Starting the server and logging a message
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
