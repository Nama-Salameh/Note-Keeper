# Note Keeper
This application allow users to perform CRUD operations on notes (server without any interface) uses Node.js, Express and MongoDB: 
* Retrieve all notes.
* Retrieve a specific note using its ID.
* Add a new note.
* Delete a specific note using its ID.
* Delete All notes.
* Update a specific note using its ID.
* Search notes by their title or content.
* Return a limited number of notes at once, based on the number from user (Pagination).

### To clone and try the code:
* clone the code from the repository.
* Add .env file and add the database url to it, as "DATABASE_URL" 
* In terminal : 
1. <code>npm init</code>
2. <code>npm install mongodb</code>
3. <code>npm i express mongoose</code>
4. <code>npm i --save-dev dotenv nodemon</code>
5. <code>nodemon server.js</code>
* Install REST client extension for visual code. 
* Try what you want from the route.rest file by click to "send request". Please change the ID for the requests in route.rest file that need 'id' as the ID for your data.