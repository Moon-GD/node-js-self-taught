const http = require('http');
const { SERVER_STATUS, SERVER_MESSAGE } = require('./common');

const server = http.createServer((req, res) => {
  if (req.url === '/posts' && req.method === 'GET') {
    res.statusCode = SERVER_STATUS.SUCCESS;
    res.end(SERVER_MESSAGE.ALL_POST);
  } else if (/^\/posts\/[0-9]+$/.test(req.url) && req.method === 'GET') {
    res.statusCode = SERVER_STATUS.SUCCESS;
    res.end(SERVER_MESSAGE.SOME_POST);
  } else if (req.url === '/posts' && req.method === 'POST') {
    res.statusCode = SERVER_STATUS.SUCCESS;
    res.end(SERVER_MESSAGE.NEW_POST);
  } else {
    res.statusCode = SERVER_STATUS.NOT_FOUND;
    res.end(SERVER_MESSAGE.NOT_FOUND);
  }
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`server is running on port : ${PORT}`);
});
