const { query } = require("express");

async function postNewUser(req, res) {
  const data = req.body;
  console.log(data);
  // const isAdmin = data?.is_admin: === 'on ?' ? true : false;
  //send data to database
  const dataDb = await query(
    'INSERT INTO "users" (email, username, password, is_admin) VALUES ($1, $2, $3)',
    [data.email, data.username, data.password]
  );

  res.redirect("/allUsers");
}

module.exports = postNewUser;
