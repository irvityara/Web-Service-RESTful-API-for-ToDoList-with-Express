# Web-Service-RESTful-API-for-ToDoList-with-Express

# Getting Started 1

Create package.json

```markdown
$ npm init -y
```

Install Express

```markdown
$ npm install express
```

Menginstall nodemon untuk mempermudah dalam menjalankan kode.

```markdown
$ npm i -D nodemon
```

Menginstall bcrypt mengubah data pasword menjadi kode hash.

```markdown
$ npm install bcrypt
```

Menginstall json web token, untuk melakukan authorization dengan token.

```markdown
$ npm i jsonwebtoken
```

Pada package.json bagian script tambahkan:

```javascript
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
}
```

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

Untuk memulai menjalankan kode, gunakan

```markdown
$ npm start
$ npm run dev
```

Server berhasil dibuat.

---

Installation Sequelize dan drive database.

```markdown
$ npm install --save sequelize

$ npm isntall --save mysql

$ npm install --save mariadb
```

Setting untuk melakukan koneksi pada database.

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

Melakukan testing terhadap koneksi.

```javascript
try {
  await db.authenticate();
  console.log("Connection has been established succesfully.");

  console.log("All models were synchronized succesfully.");
} catch (error) {
  console.error("Unable to connect to the database", error);
}
```
