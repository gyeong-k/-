//express 모듈 세팅
let express = require("express");
const app = express();
app.listen(1234);

//데이터 셋팅
let youtuber1 = {
  channelTitle: "뉴진스",
  sub: "764만명",
  videoNum: "630개",
};

let youtuber2 = {
  channelTitle: "엔믹스",
  sub: "278만명",
  videoNum: "962개",
};

let db = new Map(); //key - value = json?
let id = 1;
db.set(id, youtuber1); //강의에서는 id++로 해서 값 넣고 +1되게 했는데 코드가 길어지면 헷갈릴것 같아 ++id로 작성
db.set(++id, youtuber2);

//REST API 설계
app.get("/youtubers", (req, res) => {
  let youtubers = {}; //새로운 객체 생성
  db.forEach(function (value, key) {
    //매개변수가 신기하게 해당 맵의 요소, 인덱스 순서임
    youtubers[key] = value; //배열을 이용해 객체 추가하는 방법
  });

  res.json(youtubers);
});

app.get("/youtubers/:id", function (req, res) {
  let id = parseInt(req.params.id);
  //console.log(req.params.id); //1출력 확인
  //id = parseInt(id);    // 아이디를 바로 parseInt(req.params.id)로 묶음
  const youtuber = db.get(id); // 하나의 객체 자체!
  console.log(youtuber);

  if (youtuber == undefined) {
    res.json({
      message: "유튜버 정보를 찾을 수 없습니다.",
    });
  } else {
    res.json(youtuber);
  }
});

//POST
app.use(express.json()); // http 이외의 모듈인 '미들웨어':json 설정
app.post("/youtubers", (req, res) => {
  console.log(req.body);
  //등록
  db.set(++id, req.body);
  res.json({
    message: `${db.get(id).channelTitle}님, 유튜버 생활을 응원합니다.`,
  });
});

