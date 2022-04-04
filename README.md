# [NoSQL Social API](#title)

> - [Title](#title)
> - [Description](#description)
> - [Developer](#developer)
> - [Resources](#resources)
> - [Installation](#installation)
> - [Use Instructions](#usage)

## [Description](#description)

CRUD API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## [Developer](#developer)

[Dita Zanelli](mailto:ditazanelli@gmail.com)

## [Installation](#installation)

> - [Node.js](https://nodejs.org/en/) - https://nodejs.org/en/

> - [MongoDB](https://www.mongodb.com/try/download/community) - https://www.mongodb.com/try/download/community

> 1. Clone the repository located at: https://github.com/ditazan/nosql-social
> 2. Open the project in a terminal application and type `npm i` to install all the required dependencies.

## [Use Instructions](#usage)

> 1. With the project open in the terminal, type the command `npm start` to begin the express server.
> 2. Open the application Isomnia to test the routes.

### USER - (POST) Create User

> - To add a new user in the application's **user** table, you can use a **POST** api call to **http://{your url}/api/users/**.

### USER - (GET) Get All Users

> - To view all users in the application's **user** collection, you can use a **GET** api call to **http://{your url}/api/users/**.

### USER - (GET) Get a User

> - To view a single user by their **\_id** (userId) in the application's **user** collection, you can use a **GET** api call to **http://{your url}/api/users/{user:\_id}**.

### USER - (PUT) Update a User

> - To update a single user by their **\_id** (userId) in the application's **user** collection, you can use a **PUT** api call to **http://{your url}/api/users/{user:\_id}**.

### USER - (DELETE) Delete a User

> - To delete a single user by their **\_id** (userId) in the application's **user** collection, you can use a **DELETE** api call to **http://{your url}/api/users/{user:\_id}**.

### FRIEND - (POST) Create Friend

> - To create a new friend by their **\_id** (userId) in the application's **user** collection, you can use a **POST** api call to **http://{your url}/api/users/{user:\_id}/friends/{friend user:\_id}**.

### FRIEND - (DELETE) Delete Friend

> > - To delete a friend by their **\_id** (userId) in the application's **user** collection, you can use a **DELETE** api call to **http://{your url}/api/users/{user:\_id}/friends/{friend user:\_id}**.

### THOUGHT - (POST) Create Thought

> - To create a new thought in the application's **thought** collection, you can use a **POST** api call to **http://{your url}/api/thoughts/**.

### THOUGHT - (GET) Get All Thoughts

> - To view all users in the application's **thought** collection, you can use a **GET** api call to **http://{your url}/api/thoughts/**.

### THOUGHT - (GET) Get a Thought

> - To view a single thought by its **\_id** (thoughtId) in the application's **thought** collection, you can use a **GET** api call to **http://{your url}/api/thoughts/{thought:\_id}**.

### THOUGHT - (PUT) Update a Thought

> - To update a single thought by its **\_id** (thoughtId) in the application's **thought** collection, you can use a **PUT** api call to **http://{your url}/api/thoughts/{thought:\_id}**.

### THOUGHT - (DELETE) Delete a Thought

> - To delete a single thought by its **\_id** (thoughtId) in the application's **thought** collection, you can use a **DELETE** api call to **http://{your url}/api/thoughts/{thought:\_id}**.

### REACTIONS - (POST) Create Reaction

> - To create a new reaction in the application's **thought** collection, you can use a **POST** api call to **http://{your url}/api/thoughts/{thought:\_id}**.

### REACTIONS - (DELETE) Delete a Reaction

> - To delete a reaction in the application's **thought** collection, you can use a **DELETE** api call to **http://{your url}/api/thoughts/{thought:\_id}**. The **reactionId** is required in the call's **body** in a JSON format.

> ![Delete a Thought](./images/screen13.png).
