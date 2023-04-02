// @ts-check

const http = require('http');
const { SERVER_STATUS, SERVER_MESSAGE } = require('./common');

/**
 * @typedef blogDB
 * @property {number} id
 * @property {string} title
 * @property {string} content
 */

/** @type {blogDB[]} */
const blogs = [
  {
    id: 1,
    title: '1번 제목',
    content: '1번 내용',
  },
  {
    id: 2,
    title: '2번 제목',
    content: '2번 내용',
  },
  {
    id: 3,
    title: '3번 제목',
    content: '3번 내용',
  },
];

const server = http.createServer((req, res) => {
  const POST_REG_URL = /^\/posts\/([0-9])+$/;
  const postTokens = req.url && POST_REG_URL.exec(req.url);

  if (req.url === '/posts' && req.method === 'GET') {
    res.statusCode = SERVER_STATUS.SUCCESS;
    res.end(SERVER_MESSAGE.ALL_POST);
  } else if (req.url && POST_REG_URL.test(req.url) && req.method === 'GET') {
    const postID = postTokens && postTokens[1];
    console.log('postID : ', postID);
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
