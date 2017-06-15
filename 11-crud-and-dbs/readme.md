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

<summary>What is CRUD? What are CRUD operations?</summary>

CRUD stands for Create, Read, Update, and Delete. These are the
four operations that we can perform on data in a database.

It's important to note that CRUD is a set of ideas that works
across all databases and that each database type or ORM has
their own way of implementing CRUD. The table below shows the
CRUD operations next to the Mongoose.js methods you'd use to perform that
operation:

| Operation | Mongoose Method |
| --------- | --------------- |
| Create    | `.save()` or `.create()` |
| Read      | `.find()`, `.findOne()`, `.findById()` |
| Update    | `.find()` then `.save()` |
| Delete    | `.remove()` |

That means that the methods will be different for different
databases or ORMs. For instance, in Sequelize (an ORM
like Mongoose for SQL databases) uses `.destroy()` for Delete -
probably because it sounds so col to say we're _destroying_ our
data!

</details>

## Assignment

1. To Do App: Finish up at least level one of the to do list app. I encourage you to go all the way to level two and the bonus if you have time between now and Tuesday!

## Optional Reading

[Easily Develop Node.js and MongoDB Apps with Mongoose - Scotch.io](https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications) - read to see how to work with database records with `mongoose`

[Mongoose](http://mongoosejs.com/index.html)

If you're interested on building a simple application that does NOT use mongoose but instead uses SQL and Sequelize, check [this](http://lorenstewart.me/2016/10/03/sequelize-crud-101/) tutorial out.
