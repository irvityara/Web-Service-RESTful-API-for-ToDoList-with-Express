# Web-Service-RESTful-API-for-ToDoList-with-Express

# **Getting Started**

Persiapkan software yang diperlukan:

1. Node.js
2. MySQL or MongoDB
3. Sequelize-cli (jika menggunakan MySQL)
4. Mongoose (jika menggunakan MongoDB)

Pada kode ini, kita menggunakan MySQL dengan mariaDB sebagai dialect database.

## **Set Up Code**

1. Lakukan clone repositori pada folder dimana aplikasi akan disimpan.

2. Installation menggunkan git bash terminal

Install pacakage.json :

```markdown
$ npm init -y
```

Install Express :

```markdown
$ npm install express
```

Install drive database yang akan digunakan :

```markdown
$ npm install --save pg pg-hstore # Postgres
$ npm install --save mysql // yang saya gunakan
$ npm install --save mysql2
$ npm install --save mariadb // yang saya gunakan
$ npm install --save sqlite3
$ npm install --save tedious # Microsoft SQL Server
$ npm install --save oracledb # Oracle Database
```

Install nodemon untuk mempermudah dalam menjalankan kode.

```markdown
$ npm i -D nodemon
```

3. Buatlah file dengan nama `App.js`, kemudian pada `package.json` bagian script tambahkan kode berikut :

```javascript
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
}
```

Buatlah server pada file app.js, tulis kode berikut

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
$ npm start //untuk memulai menjalankan server
$ npm run dev //untuk setiap kali menghubungkan server
```

## Server berhasil dibuat.

## **Set Up Sequelize**

1. Installing
   Instal Sequelize :

```markdown
$ npm install --save sequelize
```

Installing CLI :

```markdown
$ npm install --save-dev sequelize-cli
```

Dari hasil instalasi ini akan :

- Membuat file `index.js` dalam folder `models`, untuk menyimpan model dari projek
- Membuat file `config`, berupa cli untuk menghubungkan dengan database
- Membuat folder `migrations`
- Membuat folder `seeders`

Initialisasi CLI :

```markdown
$ npx sequelize-cli init
```

2. Melakukan testing connection, tuliskan kode pada file `app.js`

```javascript
async function testConnection() {
  try {
    await db.Sequelize.authenticate;
    console.log("Connection has been established succesfully.");
    console.log("All models were synchronized succesfully.");
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
}

testConnection();
```

Menghubungkan dengan database pada file `config.js`

```javascript
module.exports = {
  development: {
    username: "root", //sesuaikan dengan username database
    password: "", //sesuaikan dengan password database
    database: "todolist_project", //nama database
    host: "127.0.0.1",
    dialect: "mariadb",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mariadb",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mariadb",
  },
};
```

## Migrations dan Seeder

1. Membuat Model dan Migration dari `Users` dengan berisikan `name` dan `attributes` dari model.

```markdown
$ npx sequelize-cli model:generate --name Users --attributes username:string,email:string,password:string
```

Dari kode tersebut akan:

- Membuat file `user` dalam folder `models`
- Membuat file `XXXXXXXXXXXXXX-create-user.js` dalam folder `migrations`

Command untuk menjalankan migrations
`$ npx sequelize-cli db:migrate`

Membuat Seeder dari `user` dengan berisikan `name` seeder

```markdown
$ npx sequelize-cli seed:generate --name user
```

Command untuk menjalankan seeders
`$ npx sequelize-cli seed:generate`

2. Lakukan pembuatan model, migrations dan seeder untuk `Todos`

```markdown
$ npx sequelize-cli model:generate --name Todos --attributes value:string,status:boolean
```

Command untuk menjalankan migrations
`$ npx sequelize-cli db:migrate`

Membuat Seeder dari `todo`

```markdown
$ npx sequelize-cli seed:generate --name todo
```

Command untuk menjalankan seeder
`$ npx sequelize-cli seed:generate`

Command untuk menambahkan isi data dalam seed ke database.
`$ npx sequelize-cli db:seed:all`

```markdown
Menginstall bcrypt untuk mengubah data password menjadi kode hash.
$ npm install bcrypt

Menginstall json web token, untuk melakukan authorization dengan token.
$ npm i jsonwebtoken
```
