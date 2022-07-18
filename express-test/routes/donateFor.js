const express = require("express");
const router = express.Router();

const pool = require("../db/pool");

//データ全件取得API
router.get("/", function (req, res, next) {
  pool.query("SELECT * FROM donateFor", function (error, result) {
    if (error) {
      throw error;
    }
    res.status(200).json({
      data: result.rows,
    });
  });
});

//データid検索API
router.get("/:id", function (req, res, next) {
  const id = req.params.id;
  pool.query(
    "SELECT * FROM donateFor where id = $1",
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

//データ登録API　追加
router.post("/", function (req, res, next) {
  const LENGTH = 10;
  const SOURCE = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < LENGTH; i++) {
    result += SOURCE[Math.floor(Math.random() * SOURCE.length)];
  }
  const { name, intro } = req.body.donateFor_data;
  pool.query(
    "INSERT INTO donateFor VALUES ($1, $2, $3)",
    [result, name, intro],
    function (error, result) {
      if (error) {
        res.status(500).json({
          status: "500 Internal Server Error",
          error: error,
        });
      }
      res.status(201).json({
        status: "success",
      });
    }
  );
});
// データ更新用API
router.put("/:id", function (req, res, next) {
  const { name, intro } = req.body.donateFor_data;
  pool.query(
    "UPDATE donateFor SET name = $1, intro = $2 WHERE id = $3 ",
    [name, intro, id],
    function (error, results) {
      if (error) {
        res.status(500),
          json({
            status: "500 Internal Server Error",
            error: error,
          });
      }
      if (results.rowCount === 0) {
        res.status(400).json({
          status: "400 Bad Request",
          message: "データが存在しません",
        });
      } else {
        res.status(200).json({
          status: "success",
        });
      }
    }
  );
});
module.exports = router;

// データ削除API
router.delete("/:id", function (req, res, next) {
  const id = req.params.id;
  pool.query(
    "DELETE FROM donateFor WHERE id =$1",
    [id],
    function (error, results) {
      if (error) {
        res.status(500),
          json({
            status: "500 Internel Server Error",
            error: error,
          });
      }
      if (results.rowCount === 0) {
        res.status(400).json({
          status: "400 Bad Request",
          message: "データが存在しません",
        });
      } else {
        res.sendStatus(200).json({
          status: "success",
          message: "データを削除しました",
        });
      }
    }
  );
});
