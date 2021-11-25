const router = require("express").Router();
const { User, Blog, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: Comment,
          attributes: ["id", "comment_content", "user_id", "blog_id"],
          include: { model: User, attributes: "name" },
        },
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // serialize data so the template can read it
    const blogs = blogData.map((blog) => {
      blog.get({ plain: true });
    });

    // pass serialized data and session flag into template

    res.render("homepage", {
      blogs,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  } else {
    res.render("login");
  }
});

module.exports = router;
