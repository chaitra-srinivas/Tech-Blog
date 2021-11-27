const router = require("express").Router();
const { User, Blog, Comment } = require("../models");
const withAuth = require("../utils/auth");

// GET all the blog posts on load of hompage
router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: Comment,
          attributes: ["id", "comment_content", "user_id", "blog_id"],
          include: { model: User, attributes: ["name"] },
        },
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // serialize data so the template can read it
    const blogs = blogData.map((blog) => {
      return blog.get({ plain: true });
    });

    // pass serialized data and session flag into template
    res.render("homepage", {
      blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET a single blog post by id

router.get("/blogs/:id", withAuth, async (req, res) => {
  try {
  const blogData = await Blog.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["name"] },
        {
          model: Comment,
          attributes: ["comment_content"],
          include: { model: User, attributes: ["name"] },
        },
      ],
    });

    const blogById = blogData.get({ plain: true });


    res.render("blog", {
      
      ...blogById,
      logged_in: req.session.logged_in,
      can_edit: (blogById.user_id === req.session.user_id)
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// The dashboard view - prevent unathorized access to route by using withAuth middleware


// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});




// When the user hits the /login end point check is session exists, redirect to dashboard if exists else redirect to login page
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    //todo: check if return is required
    return;
  } else {
    res.render("login");
  }
});

module.exports = router;
