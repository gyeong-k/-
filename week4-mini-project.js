//express 모듈 세팅
const express = require("express");
const app = express();
app.listen(7777);
app.use(express.json);

let db = new Map();
let id = 1;

//로그인post /login
app.post("/login", (req, res) => {
  res.json();
});

//회원 가입post /join
app.post("/join", (req, res) => {
  db.set(id++, req.body);

  if (req.body == {}) {
    res.status(404).json({
      message: "입력 값을 다시 확인해주세요.",
    });
  } else {
    res.status(201).json({
      message: `${db.get(id - 1).name}님 환영합니다.`,
    });
  }
});
app
  .route("/users/:id")
  .get((req, res) => {
    let id = parseInt(req.params);

    const user = db.get(id);
    if (user == undefined) {
      res.status(400).json({
        message: "회원 정보 없음",
      });
    } else {
      res.status(200).json({
        userId: user.id,
        name: user.name,
      });
    }
  })
  .delete((req, res) => {
    let id = parseInt(req.params);
    const user = db.get(id);

    if (user == undefined) {
      res.status(400).json({
        message: "회원 정보 없음",
      });
    } else {
      db.delete(id);
      res.status(200).json({
        message: `${user.name}님 다음에 또 봐~~~`,
      });
    }
  });
