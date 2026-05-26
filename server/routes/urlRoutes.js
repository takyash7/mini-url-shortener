const express = require("express");
const { nanoid } = require("nanoid");
const db = require("../database/db");

const router = express.Router();


// CREATE SHORT URL
router.post("/shorten", (req, res) => {
  const { url } = req.body;

  // Empty URL check
  if (!url || url.trim() === "") {
    return res.status(400).json({
      error: "URL is required",
    });
  }

  // URL validation
  try {
    new URL(url);
  } catch (error) {
    return res.status(400).json({
      error: "Invalid URL format",
    });
  }

  // Generate short code
  const shortCode = nanoid(6);

  // Insert into database
  const query = `
    INSERT INTO urls (short_code, original_url)
    VALUES (?, ?)
  `;

  db.run(query, [shortCode, url], function (err) {
    if (err) {
      return res.status(500).json({
        error: "Database error",
      });
    }

    res.json({
      shortUrl: `http://localhost:5000/${shortCode}`,
    });
  });
});


// REDIRECT TO ORIGINAL URL
router.get("/:code", (req, res) => {
  const { code } = req.params;

  const query = `
    SELECT original_url
    FROM urls
    WHERE short_code = ?
  `;

  db.get(query, [code], (err, row) => {
    if (err) {
      return res.status(500).json({
        error: "Database error",
      });
    }

    // If short code not found
    if (!row) {
      return res.status(404).json({
        error: "Short URL not found",
      });
    }

    // Redirect to original URL
    res.redirect(302, row.original_url);
  });
});

module.exports = router;