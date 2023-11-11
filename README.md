# Web-Service-RESTful-API-for-ToDoList-with-Express

Getting Started, create package.json
`$ npm init -y`

Install Express
`$ npm install express`

Menginstall nodemon
`$ npm i -D nodemon`

Menginstall bcrypt
`$ npm install bcrypt`

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
