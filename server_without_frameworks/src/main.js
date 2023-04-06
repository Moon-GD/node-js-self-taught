// @ts-check

const http = require('http');
const { SERVER_STATUS, SERVER_MESSAGE } = require('./common');

/**
 * @typedef blog
 * @property {number} id
 * @property {string} title
 * @property {string} content
 */

/** @type {blog []} */
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
  const POST_REG_URL = /^\/posts\/([0-9]+)$/;
  const postTokens = req.url && POST_REG_URL.exec(req.url);

  if (req.url === '/posts' && req.method === 'GET') {
    const result = blogs.map((blog) => ({
      title: blog.title,
      content: blog.content,
    }));
    res.statusCode = SERVER_STATUS.SUCCESS;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(result));
  } else if (req.url && POST_REG_URL.test(req.url) && req.method === 'GET') {
    const postID = Number(postTokens && postTokens[1]);
    const findingPost = blogs.find((blog) => blog.id === postID);

    if (findingPost) {
      res.statusCode = SERVER_STATUS.SUCCESS;
      res.setHeader('Content-type', 'application/json; charset=utf-8');
      res.end(JSON.stringify(findingPost));
    } else {
      res.statusCode = SERVER_STATUS.NOT_FOUND;
      res.end(SERVER_MESSAGE.NOT_FOUND);
    }
  } else if (req.url === '/posts' && req.method === 'POST') {
    req.setEncoding('utf-8');
    req.on('data', (data) => {
      const newBlog = JSON.parse(data);

      blogs.push({
        id: blogs.length + 1,
        title: newBlog.title,
        content: newBlog.content,
      });

      console.log(blogs);
    });

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
