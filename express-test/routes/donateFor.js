const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

const pool = require("../db/pool");

router.get("/", function (req, res, next) {
  // データデータ全権取得API
  pool.query("SELECT * FROM donateFor", function (error, result) {
    if (error) {
      throw error;
    }
    res.status(200).json({
      data: result.rows,
    });
  });
});
router.get("/:id", function (req, res, next) {
  // データid検索用API
  const id = req.params.id;
  pool.query(
    "SELECT * FROM donateFor WHERE id = $1",
    [id],
    function (error, result) {
      if (error) {
        throw error;
      }
      res.status(200).json({
        data: result.rows,
      });
    }
  );
});
module.exports = router;
