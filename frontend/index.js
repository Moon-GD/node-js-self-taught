const axios = require('axios');
const cheerio = require('cheerio');

axios.get('http://www.example.com')
  .then((response) => {
    const HTMLContent = response.data;
    const $ = cheerio.load(HTMLContent);  // parsing HTML file
    const h1 = $('h1').text();
    const href = $('a').attr('href');

    console.log('h1 :', h1);
    console.log('a :', href);
  });