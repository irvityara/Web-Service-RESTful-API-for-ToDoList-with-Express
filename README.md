# Web-Service-RESTful-API-for-ToDoList-with-Express

Getting Started, create package.json

```markdown
$ npm init -y
```

Install Express

```markdown
$ npm install express
```

Menginstall nodemon

```markdown
$ npm i -D nodemon
```

Menginstall bcrypt

```markdown
$ npm install bcrypt
```

Menginstall json web token

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

untuk memulai menjalankan kode, gunakan

`````markdown
$ npm start
$ npm run dev

````markdown
Server berhasil dibuat.

---

Installation Sequelize

```markdown
$ npm install --save sequelize

$ npm isntall --save mysql

$ npm install --save mariadb
```
````
`````

````

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
````
