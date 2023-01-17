# MyWebsite

The Node.js script (server.js) is doing several things:

1. It is importing the necessary modules: http, express, and pg. The http module is used to create a server, the express module is used to handle HTTP requests and responses, and the pg module is used to connect to a PostgreSQL database.

2. It creates an instance of an Express application and a new client to connect to the PostgreSQL database using the credentials specified in the script.

3. It sets up middleware using app.use(express.json()) to parse the request body as JSON.

4. It sets up a route for a POST request to the /submit endpoint using app.post('/submit', (req, res) => {...}).
This route is handling the form submit event and what happens when a user submits the form.

5. Inside the route function, it extracts the name from the request body, then it uses the client.query() method to insert the name into the users table in the PostgreSQL database. If there is an error, it throws it, otherwise it sends a JSON response with the name back to the browser.

6. It creates a server using the http.createServer(app) method and sets it to listen on port 3000.

7. Finally, it log a message to the console when the server is running.


The JavaScript file (script.js) is doing several things:

1. It is selecting the form element and the result element from the HTML by using document.getElementById('form') and document.getElementById('result') respectively.

2. It is adding an event listener on the form element listening to the 'submit' event. When the form is submitted, it is preventing the default behavior of the form by calling event.preventDefault() method.

3. It is extracting the name from the form by using document.getElementById('name').value

4. It is using the fetch API to make a POST request to the /submit endpoint on the server with the name in the request body as a JSON object.

5. After getting the response from the server, it is parsing it as json and getting the data from it.

6. Finally, it updates the result element by setting its innerHTML property to a string that includes the name received from the server.



