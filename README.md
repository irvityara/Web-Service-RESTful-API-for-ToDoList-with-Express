# Web-Service-RESTful-API-for-ToDoList-with-Express

Getting Started, create package.json
`$ npm init -y`

Install Express
`$ npm install express`

Pada package.json bagian script tambahkan:
`"start": "node app.js"`

---

Membuat file app.js, tulis kode berikut

```javascript
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server running on port : " + PORT);
});
```

untuk menjalankan kode, gunakan
`$ npm start`

Server berhasil dibuat.

---
