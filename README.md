# polytechnics-hackathon
This is a repository to create a project for polytechnics Team TechRumble in Hexaware


# For DEV local testing
For install json serve localy
npm install --save-dev json-server

This will crate a ne line in package.json
 "devDependencies": {
    "json-server": "^0.17.4",


We have created a new file in in database-test/db.json  to emulate our MDM master datababase
To configure it please:

1.- Add a new line inside scripts section in package.json
"scripts": {
    "backend":"json-server --watch database-test/db.json",
    ...
}

2.- In the terminal we need to go to our solution folder and run our new script named "backend" 
>>npm run backend

3.- we can Verify our new API is emule running in 
  http://localhost:3000/posts
  http://localhost:3000/comments
  http://localhost:3000/profile


# To use crypto-js in this project 
npm install crypto-js
npm i --save-dev @types/crypto-js