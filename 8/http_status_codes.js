/*
    1.xx informational 

    2.xx success (e.g. 201 - request was successful and resource was created)
        204 - successful response with no content (e.g. delete request) 
    
    3.xx redirection (if something is moved)
        304 - not modified  

    4.xx client error (something wrong with the client)
        400 - bad request (wrong/incomplete/missing fields)
        401 - unauthorized request
        404 - not found

    5.xx server error
        500 - internal server error

    see more: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
*/
