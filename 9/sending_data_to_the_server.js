/*
    
    sending data in the header of the request (e.g. auth token)
        
        console.log(req.headers.authorization); //logs the authorization header (this 
        is the typical JSON webtoken for API auth)

    sending data within the request body 
    
        (with express we can do res.body.dataSample - for whatever data we send)
        e.g res.data.email;

        with the http module we do:
*/
