import http from 'http';
import app from './app';

const port = 3000;

http.createServer(app).listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
