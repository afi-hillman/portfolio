const query = require("../database");

async function getAllBlogs(req, res) {
  // const data = await query("SELECT * FROM portfolio_blog");
  // const url = data.rows.slug;
  // console.log(url);
  const data = await query("SELECT * FROM portfolio_blog");
  console.log(data);
  const blogPost = data.rows;
  console.log(blogPost);
  res.render("pages/blogPost", { blogPost });
}

async function getSingleBlog(req, res) {
  const slug = req.params.slug;
  const data = await query("SELECT * FROM portfolio_blog WHERE slug = $1", [
    slug,
  ]);
  console.log(data);
  res.render("pages/singleBlog");
}

module.exports = { getAllBlogs, getSingleBlog };
