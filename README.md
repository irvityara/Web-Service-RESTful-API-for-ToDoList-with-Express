# Web-Service-RESTful-API-for-ToDoList-with-Express

Getting Started, create package.json
`$ npm init -y`

Install Express
`$ npm install express`

Menginstall nodemon
`$ npm i -D nodemon`

Menginstall bcrypt
`$ npm install bcrypt`

Menginstall json web token
`$ npm i jsonwebtoken`

Pada package.json bagian script tambahkan:
`"start": "node app.js"`
`"dev":"nodemon app.js",`

---

Membuat server pada file app.js, tulis kode berikut

```javascript
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server running on port : " + PORT);
});
```

untuk memulai menjalankan kode, gunakan
`$ npm start` dan `npm run dev`

Server berhasil dibuat.

---

Installation Sequelize
`$ npm install --save sequelize`
`$ npm isntall --save mysql`

`$ npm install --save mariadb`

setting pada database

```javascript
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  dialect: "mysql",
  username: "root",
  password: "root",
  database: "todolist_project",
});
```
