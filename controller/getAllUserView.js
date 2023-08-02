const query = require("../database");

async function getAllUserView(req, res) {
  const data = await query("SELECT *FROM users WHERE deleted_at IS NULL");
  const users = data.rows;
  res.render("pages/allUser", { users });
}

module.exports = getAllUserView;
