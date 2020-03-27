const http = require('http');

const todos = [
  {
    id: 1,
    text: 'todo_1'
  },

  {
    id: 2,
    text: 'todo_2'
  },

  {
    id: 3,
    text: 'todo_3'
  }
];

//create server
const server = http.createServer((req, res) => {
  //set status code manually
  res.statusCode = 200;

  // console.log(req.method);
  //console.log(req.headers.authorization);

  let body = [];

  req
    .on('data', chunk => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();

      console.log(body);
    });

  //destructure headers, url and method
  //   const { headers, url, method } = req;
  //   console.log(headers, url, method);

  //set content type
  res.setHeader('Content-Type', 'application/json');
  //set header for server type
  res.setHeader('X-Powered-By', 'Node.js');
  //respond with text data
  //res.write('<h1>Hello</h1>');

  //set headers manually (replaces lines 32/34)
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'Node.js'
  });
  res.end(
    JSON.stringify({
      success: true,
      err: 'not found..',
      data: todos
    })
  ); //finish request cycle and send response
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on ${PORT}`));

//note as no request handling implemented, this little server can handle any type of request
