# <API 설계>  : url과 method의 set
  0) 전체유튜버 조회 GET /youtubers
   - req : X
   - res : map 전체 조회

  1) (개별 조회하기) GET /youtubers/:id  - id로 map 에서 객체를 찾아, 그 객체의 정보를 뿌려줌
   - req : params.id <= map에 저장된 키 값을 전달
   - res : map에서 id로 객체를 조회해서 전달

  2) (유튜버 등록하기) POST /youtubers
   - req : body <= channelTitle, sub =0, videoNum  =0 (신규 유튜버 정보를 전달)
      db에 저장까지 해줌~~~~
   - res : "channelTitle님, 유튜버 생활을 응원합니다."

## 이번 강의 느낀점
점점 많은 개념을 학습하면서 개인적으로 찾아보고 정리해야하는 작업들이 생기고 있다.
강의가 이 파일 저 파일 돌아다니며서 우선 사용해보고 습득하는 방식으로 이루어져 있는데, 그래도 개념이 잘 들어오지 않아 헷갈리고 이해 안되는 부분은 따로 블로그에 정리하는 과정을 추가하고 있다.
아무래도 이 과정은 앞으로 매일 하게 될 것 같다
