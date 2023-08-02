const query = require("../database");

async function getSelectedBlog(req, res) {
  const data = await query("SELECT * FROM portfolio_blog");
  console.log(data);
  const blogPost = data.rows;
  console.log(blogPost);
  res.render("pages/blogPost", { blogPost });
}

module.exports = getSelectedBlog;
