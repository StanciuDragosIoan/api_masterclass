/*
   
   HTTP and the Node Http module

    is the protocol of the web (communicates between clt and server)

    the request-response-cycle:
    
        server takes request from client (client sends data)
            with the request we can update DB/authenticate user and then send back a response + a status code

        each request and response has a header and a body

            the header is a set of key-value pairs (like content-type of the served resource, content length, auth token)

            the body contains data sent to the server or received from it

            use the raw http module (not express)

            
*/
