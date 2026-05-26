const express = require("express");
const crypto = require("crypto");
const db = require("../database/db");

const router = express.Router();


// CREATE SHORT URL
router.post("/shorten", (req, res) => {
  const { url } = req.body;

  if (!url || url.trim() === "") {
    return res.status(400).json({
      error: "URL is required",
    });
  }

  try {
    new URL(url);
  } catch (error) {
    return res.status(400).json({
      error: "Invalid URL format",
    });
  }

  const shortCode = crypto.randomBytes(3).toString("hex");

  try {
    const query = db.prepare(`
      INSERT INTO urls (short_code, original_url)
      VALUES (?, ?)
    `);

    query.run(shortCode, url);

    res.json({
      shortUrl: `https://YOUR-RENDER-URL.onrender.com/${shortCode}`,
    });

  } catch (error) {
    res.status(500).json({
      error: "Database error",
    });
  }
});


// REDIRECT ROUTE
router.get("/:code", (req, res) => {
  const { code } = req.params;

  try {
    const query = db.prepare(`
      SELECT original_url
      FROM urls
      WHERE short_code = ?
    `);

    const row = query.get(code);

    if (!row) {
      return res.status(404).json({
        error: "Short URL not found",
      });
    }

    res.redirect(302, row.original_url);

  } catch (error) {
    res.status(500).json({
      error: "Database error",
    });
  }
});

module.exports = router;