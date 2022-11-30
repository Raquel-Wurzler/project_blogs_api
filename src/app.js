const express = require('express');
const userRouter = require('./routes/user.router');
const categoryRouter = require('./routes/category.router');
const blogPostRouter = require('./routes/blogPost.router');

// ...

const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/categories', categoryRouter);
app.use('/blog/post', blogPostRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
