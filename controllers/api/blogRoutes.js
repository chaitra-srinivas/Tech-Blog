const router = require("express").Router();
const { Blog } = require("../../models");
const withAuth = require("../../utils/auth");

// GET all blog posts

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

    res.status(200).json(blogs);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET a single blog post

router.get("/:id", withAuth, async (req, res) => {
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

    const blogById = blogData.map((blog) => {
      return blog.get({ plain: true });
    });

    res.render("blog", {
      ...blogById,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a post

router.post("/", withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a post

router.put(":/id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.update(
      {
        title: req.body.title,
        blog_content: req.body.blog_content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!blogData) {
      res.status(404).json({ message: "No blog with that id!" });
      return;
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE a post

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!blogData) {
      res.status(404).json({ message: "No blog with that id!" });
      return;
    }
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
