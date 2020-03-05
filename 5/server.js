const http = require('http');

//create server
const server = http.createServer((req, res) => {
  console.log(req.method);

  //destructure headers, url and method
  //   const { headers, url, method } = req;
  //   console.log(headers, url, method);

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
  //set content type
  res.setHeader('Content-Type', 'application/json');
  //set header for server type
  res.setHeader('X-Powered-By', 'Node.js');
  //respond with text data
  //res.write('<h1>Hello</h1>');

  res.end(
    JSON.stringify({
      success: true,
      data: todos
    })
  ); //finish request cycle and send response
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on ${PORT}`));

//note as no request handling implemented, this little server can handle any type of request
