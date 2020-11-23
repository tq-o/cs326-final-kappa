# Members and Division of labor

Duy Pham: Implement Database, Fix bug (meme page loading error), Refactor<br>
Thai On: <br>
Thanh Phan: <br>

# Database implementation

In this project we will use MongoDB for database (with `mongoose` as the driver). We recommend using [mongo](https://hub.docker.com/_/mongo)'s docker image.

For now there is only `User` document to store login information.

```
User document
{
	_id: <ObjectId1>,
	username: String, // The username
	password: String, // User's password
}
```

We also add a credential file for storing the database's username and password.

To start the backend, we have to create a `.env` file with the following content

```
DB_ADMIN=<db_admin>
DB_PASSWORD=<db_password>
```

Also we have to start MongoDB in the background and setup credentials before running the server.
