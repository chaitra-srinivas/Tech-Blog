const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Get all comments

router.get("/", async (req, res) => {
  try {
    const commentsData = await Comment.findAll({});

    // serialize data so the template can read it

    const comments = commentsData.map((comment) => {
      return comment.get({ plain: true });
    });

    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new comment

router.post("/", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment_content: req.body.comment_content,
      blog_id: req.body.blog_id,
      user_id: req.session.user_id,
    });

    // serialize data so the template can read it

    const newComment = commentData.map((comment) => {
      return comment.get({ plain: true });
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a comment

router.delete("/", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    // serialize data so the template can read it

    const deleteComment = commentData.map((comment) => {
      return comment.get({ plain: true });
    });
    res.status(200).json(deleteComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
