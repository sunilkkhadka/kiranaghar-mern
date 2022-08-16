const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Sunil",
    email: "sunil@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Sita Dhital",
    email: "sita@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
