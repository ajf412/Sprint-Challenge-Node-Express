# Review Questions

## What is Node.js?
- It is a javascript runtime, with prepackaged libraries available through it's npm system.

## What is Express?
- It is a framework for building applications based on Node.js.

## Mention two parts of Express that you learned about this week.
- Routers and middleware

## What is Middleware?
- A cycle of functions that use req, res, and next.

## What is a Resource?
- data to be utilized by the program.

## What can the API return to help clients know if a request was successful?
- .then with json

## How can we partition our application into sub-applications?
- By using routers that use previous routers to access information.  /api/users/:id/posts  Posts would look up information based on the :id router.

## What is CORS and why do we need it?
- It is the access gateway to the server resources.  It will allow only those that have been configured access to access the information.