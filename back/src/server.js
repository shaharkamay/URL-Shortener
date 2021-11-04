export { app };
import path from 'path';
import express from 'express';
import cors from 'cors';
import { redirectorRouter } from './routes/redirector.js';
import { apiRouter } from './routes/api.js';
import { errorHandler } from './error-handling/error-handler.js';

const app = express();
// const port = process.env.PORT || 3000;
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/', express.static(path.resolve('../front/dist')));
app.get('/', (req, res) => {
    res.sendFile(path.resolve('../front/dist/index.html'))
});

app.use('/api', apiRouter)
app.use('/', redirectorRouter);

app.use(errorHandler);

// start the server
app.listen(port, () => {
    console.log('app started');
});