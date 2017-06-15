# Databases

## Learning Objectives
- Describe what CRUD operations are and how they are used
- Describe an ORM
- Set up a simple `Express` application that uses `Mongoose` as an ORM to connect to a `MongoDB` database

## Materials
- [Slides](https://ga-students.github.io/JS-DC/11-crud-and-dbs/#/)
- [Lesson Notes](https://github.com/ga-students/JS-DC/tree/master/11-crud-and-dbs)

## Key Takeways
<details>
  <summary>What are two kinds of databases? Describe both.</summary>

  Two types of databases:
    1. Structured database, like MySQL
    2. Unstructured database, like NoSQL or MongoDB

  To understand how the two are similar and different, it's important to understand a bit about their history.

  Storing data is one of the first things that computers were used for, way back into the 40's and 50's. All data was structured, just one small step ahead of using punch cards. Early databases were modeled off of this approach. A query language was developed for retrieving data stored in structured databases and it was called Structured Query Languages. MySQL is one example of a database that was built following this line of thinking. In SQL based databases, data is structured into rows and columns, much like a
  spreadsheet. Tables can relate to each other through common tables.

  Over the last 20 years, data has grown increasingly more complex. Often times when building an application, we don't know exactly what structure our data will follow. We need a way of storing data in a way that is very efficient to save and read, but also flexible in case our needs change suddenly. This is how NoSQL was born - the 'No' part meaning no preset structure. MongoDB is a perfect example of a NoSQL database. It almost looks and acts like JSON, but stored in a database.
</details>

<details>
  <summary>What is CRUD? What are CRUD operations?</summary>

  CRUD stands for Create, Read, Update, and Delete. These are the four operations that we can perform on data in a database.

  It's important to note that CRUD is a set of ideas that works across all databases and that each database type or ORM has their own way of implementing CRUD. The table below shows the CRUD operations next to the Mongoose.js methods you'd use to perform that operation:

  | Operation | Mongoose Method |
  | --------- | --------------- |
  | Create    | `.save()` or `.create()` |
  | Read      | `.find()`, `.findOne()`, `.findById()` |
  | Update    | `.find()` then `.save()` |
  | Delete    | `.remove()` |

  That means that the methods will be different for different databases or ORMs. For instance, in Sequelize (an ORM like Mongoose for SQL databases) uses `.destroy()` for Delete - probably because it sounds so col to say we're _destroying_ our data!
</details>

<details>
  <summary>What is an `ORM`?</summary>

  ORM stands for Object Relational Mapper and it's a third party library that sits between our database and our application so that it can provide an interface for us to interact with our database.

  One example of an ORM is `mongoose` - which we will use in this course!
</details>

<details>
  <summary>What does `bodyParser` do?</summary>

  The [`body-parser`](https://github.com/expressjs/body-parser) library is a bit of Express middleware that takes the body of a request (i.e. the information being sent from the client in a request) and processes it into the `request` object for us to use!
</details>

## Setting up MongoDB Locally
For the rest of this class, we will be using Mongo Atlas to host our databases. If you prefer, you can install and run Mongo locally (from your computer). This will make it easier for you to create new databases and interact with those databases, but the installation process can take a while.

Instructions on how to install MongoDB can be found here:
- [Mac](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
- [Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
- [Linux](https://docs.mongodb.com/manual/administration/install-on-linux/)

## Assignment

1. To Do App: Finish at least level one of the to do list app. I encourage you to go all the way to level three and the bonus if you have time between now and Tuesday!

## Optional Reading

[Easily Develop Node.js and MongoDB Apps with Mongoose - Scotch.io](https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications) - read to see how to work with database records with `mongoose`

[Mongoose](http://mongoosejs.com/index.html)

If you're interested on building a simple application that does NOT use mongoose but instead uses SQL and Sequelize, check [this](http://lorenstewart.me/2016/10/03/sequelize-crud-101/) tutorial out.
