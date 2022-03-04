# reason_digital_test
Problem: 

Create a Node JS JSON API in Hapi JS or similar that does the following:
1. Has endpoints for getting the posts from this API:
https://dinotest.wpengine.com/wp-json/wp/v2/posts
With routes to select a post and get the details
2. Secure the endpoint using username / password authentication (need login
endpoints)
3. Use JWT tokens for authentication
4. Upload to a code repository and send us a link

Solution:

create database in mysql with  database name : "reason_digital"

Run following command in terminal: 

npm install 
node server.js

Server running on 8080 port if you want to change you can change from .env file
Database will generate automatic using sequalize

Check server running by calling welcme api 
http://localhost:8080/api

Run Sign up for user 
http://localhost:8080/signup
Request:
{
    "username":"test12345",
    "password":"df@rdQee2sr",
    "email": "axbc2d70@gmail.com"
}
Response:
{
    "message": "User was registered successfully!"
}

Run Signin for user 
http://localhost:8080/signin
Request:
{
    "username":"test12345",
    "password":"df@rdQee2sr"
}
Response:
{
    "id": 10,
    "username": "test12345",
    "email": "axbc2d70@gmail.com",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTY0NjQzNDY2NiwiZXhwIjoxNjQ2NTIxMDY2fQ.1uJqyGqhAcmedbi4JbZ1vC7448urH1qQXki7o_5CYEU"
}


Run for get all posts
http://localhost:8080/posts

Header:
x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTY0NjQzNDY2NiwiZXhwIjoxNjQ2NTIxMDY2fQ.1uJqyGqhAcmedbi4JbZ1vC7448urH1qQXki7o_5CYEU

Response:
get the all post

Run for get post detail by id
http://localhost:8080/posts/41

Header:
x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTY0NjQzNDY2NiwiZXhwIjoxNjQ2NTIxMDY2fQ.1uJqyGqhAcmedbi4JbZ1vC7448urH1qQXki7o_5CYEU

Response:
get the post detail for id = 41
