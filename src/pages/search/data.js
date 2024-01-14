// 0 = together
// 1 = selling
// 2 = story -> 안됨
// 3 = freeboard -> 안됨
// 4 = qna

const together = [
  {
    type: 0,
    description: '운동같이해요~',
    id: 'u1fqdccf85wxjgu',
    title: '운동하실분',
  },
  {
    type: 0,
    description: '프론트엔드가 한분 부족해서 뽑습니다',
    id: 'tpjzcn4yjiumrbf',
    title: '프로젝트 하실분 구함 고수만 ',
  },
  {
    type: 0,
    description: '말그대로',
    id: 't7kb6inlvqjvo4d',
    title: '맛있는거 먹으러 갈 사람~',
  },
  {
    type: 0,
    description: '해리포터 읽으실 분~',
    id: 'q1sit6mexlllndy',
    title: '해리포터 읽으실 분~',
  },
  {
    type: 0,
    description: '배드민턴 치실 분~',
    id: 'y806oy64ji5tauu',
    title: '배드민턴 치실 분~',
  },
  {
    type: 0,
    description: '이쿠죠',
    id: 'uvhsh3s5s27nm2c',
    title: '운동가요',
  },
  {
    type: 0,
    description: '절호의 찬스입니다 잡으세요',
    id: 'xhppp458ozuq7hi',
    title: '플젝 하실분들 보세요 ',
  },
  {
    type: 0,
    description: '돌이킬수 없는 약속 읽으실 분 ~',
    id: 'k50oi8x0yc7jgo0',
    title: '돌이킬수 없는 약속 읽으실 분 ',
  },
  {
    type: 0,
    description: 'asdfsadf',
    id: 'rj3gzp3t1kt1vvr',
    title: 'asdf',
  },
  {
    type: 0,
    description: '반갑습니당',
    id: '18g5tt2vaq1airw',
    title: '안녕하세요',
  },
  {
    type: 0,
    description: '운\n동\n하\n실\n분',
    id: 'b9d9qfw70s6909s',
    title: '운동하실분~~',
  },
  {
    type: 0,
    description: '영화보러가실분 구해요~~~~~',
    id: '518vvc7ux6yklbi',
    title: '영화 보러가실분~~',
  },
  {
    type: 0,
    description: 'ㅅㅅㅅㅅㅅㅇㅅ로로롤',
    id: 'dp3usd2bqmw3c1y',
    title: '테스트',
  },
  {
    type: 0,
    description: '채팅방테스트입니다.',
    id: 'mjkghoxzimdtzuq',
    title: '채팅방테스트',
  },
];

const selling = [
  {
    type: 1,
    description: '산지 3년밖에 안지났어요',
    id: 'iqsrf10q6z4jaff',
    title: '애플마우스 팝니다',
  },
  {
    type: 1,
    description: '쓴지 2년밖에 안지났습니다',
    id: 'ug4saxw20gh9ofc',
    title: '애플매직키보드 팝니다 ',
  },
  {
    type: 1,
    description: '멋있습니다',
    id: '7rdu075redbc68z',
    title: '멋쟁이 사자 배경팝니다',
  },
  {
    type: 1,
    description: '아주 이뽀요',
    id: 'shclm9erlr44vpv',
    title: '카밀로고나눔합니다',
  },
  {
    type: 1,
    description: '집에 너무 많아서 나눔해요',
    id: 'izurnbzm6kdbxb2',
    title: '멍뭉이 사진 나눔합니다',
  },
  {
    type: 1,
    description: '주술을 할 수 있어요',
    id: 'a6e6t9ciee2wi8a',
    title: '주술을 나눠드려요',
  },
  {
    type: 1,
    description: '정말 노력해서 직접 만들었습니다',
    id: 'ftmkivyluz7c9u3',
    title: '저희 키포드를 판매합니다',
  },
  {
    type: 1,
    description: '정말 비싸요',
    id: 'f00c2s1rjv2zkbk',
    title: '제가 그린 그림을 판매합니다',
  },
  {
    type: 1,
    description: '어떤데 어떤데~',
    id: '18mva8gqffp771w',
    title: '저의 초상화입니다 판매할게요',
  },
];

const qna = [
  {
    type: 4,
    description:
      '이제 막 코딩을 시작한 코린이입니다.\r\n\r\n웹사이트를 제작하다가 문득 파일을 보는데\r\n\r\n아래 사진처럼 node_modules 파일이 글자색이 회색인데 혹시 문제있는건가요?',
    id: 'yj6lamly4dt3i80',
    title: 'node_modules 파일 색이 왜 이런가요?',
  },
  {
    type: 4,
    description:
      '자바스크립트 라이브러리 codemirror.js 를 이용해서 html 텍스트에디트 를만들려구하는데\r\n\r\n예제대로 따라해봐도\r\n\r\n줄표시와 들여쓰기 등은 되는데\r\n\r\n색상은 검은색으로만 표시됩니다\r\n\r\n다른예제들을 보면 빨간색 파란색 등으로 여러색으로 코드들이 표시되던데\r\n\r\n어떻게하면 그렇게되나요?\r\n\r\ncodemirror.js\r\n\r\ncodemirror.css\r\n\r\n파일만 인크루드했는데 다른파일이 필요한것이 있나요?',
    id: '3prwwkmzyd1dq59',
    title:
      '이제 막 코딩을 시작한 코린이입니다.\r\n\r\n웹사이트를 제작하다가 문득 파일을 보는데\r\n\r\n아래 사진처럼 node_modules 파일이 글자색이 회색인데 혹시 문제있는건가요?',
  },
  {
    type: 4,
    description:
      '안녕하세요 학교 과제로 웹메일 앱을 만들고있는중에 휴지통 기능을 구현중에 모르는게 있어서 질문드립니다.\r\n\r\n기능은 받은메일함의 메일들을 체크하고 휴지통으로 보 내기 버튼을 누르면 받은메일함의 메일이 사라지고 휴지통으로 메일들이 이동하는 기능을 구현할 생각인데요.\r\n\r\n자바스크립트로 이 구현이 가능한지 궁금합니다.',
    id: '3s11q2jtaoiculf',
    title: '자바스크립트 질문있습니다.',
  },
  {
    type: 4,
    description:
      '안녕하세요\r\n\r\n우편번호 찾기 버튼 없이 숫자를 직접 넣었을 때는 아래 이미지와 같이 잘 됩니다 \r\n\r\n그런데 [우편번호 찾기] 버튼으로 우편 번호 검색을 한 후 우편번호 필드에 출력은 되는데\r\n\r\n바로 유효성 인식을 하지 못하는 상황 입니다.',
    id: 'eagcpllh6gqwa13',
    title: '유효성 인식 문제 (자바스크립트 )',
  },
  {
    type: 4,
    description:
      '자바스크립트 로작업중입니다\r\n\r\n<div id="up"></div>\r\n\r\n<div id="separator"></div>\r\n\r\n<div id="down"></div>\r\n\r\nfunction dragElement(element, direction) {\r\n\r\nvar md; // remember mouse down info\r\n\r\nconst first = document.getElementById("up");\r\n\r\nconst second = document.getElementById("down");\r\n\r\nelement.onmousedown = onMouseDown;\r\n\r\n............................................\r\n\r\n}\r\n\r\ndragElement(document.getElementById("separator"), "H");\r\n\r\n위와같은코드가 있을때\r\n\r\ndragElement 함수에 전달되는 element 의 전과 후의 엘레멘트를 구하려면 어떻게해야될까요?\r\n\r\n그러니까\r\n\r\n<div id="up"></div>\r\n\r\n<div id="separator"></div>\r\n\r\n<div id="down"></div>\r\n\r\n<div id="up"></div>\r\n\r\n<div id="separator2"></div>\r\n\r\n<div id="down"></div>\r\n\r\n..............\r\n\r\n와같이 separator 와 separator2 를 각각 전달인자로 넣었을때\r\n\r\n각각에 해당하는 up 과 down 의 엘레멘트를 구하고싶습니다\r\n\r\nconst first = document.getElementById("up");\r\n\r\nconst second = document.getElementById("down");\r\n\r\n이렇게 아이디로 구하는방식으로는 안되는것같습니다\r\n\r\n조언부탁합니다',
    id: 'dnt4q08f8iufnpv',
    title: '자바스크립트 에서 엘레멘트 구하기...',
  },
  {
    type: 4,
    description:
      '자바스크립트로 아날로그 타이머를 만들고 있었는데 이해가 잘안되는 부분이 생겼습니다.',
    id: '1d54axlsgbuxzqc',
    title: '자바스크립트 마우스 이벤트 질문',
  },
  {
    type: 4,
    description:
      '안녕하세요. 디자인 전공으로 종사하다가 코딩쪽으로 스펙업을 하고 싶어서 입문하게된 코린이입니다.\r\n\r\n독학으로 자바스크립트 공부중인데요\r\n\r\nchtatGPT라는 정말 좋은 선생님이 생겨서 공부하기 정말 좋은 시대라고 생각하고 공부 하고 있습니다.\r\n\r\n입문한지는 며칠안되어서 너무 기본적인 것일 수도 있겠지만..\r\n\r\n챗지피티로 물어봐도 이랬다 저랬다 답변이 계속 바뀌는 질문이라 ㅠㅠ 여기에 올려봅니다.\r\n\r\n클로저를 공부하고 있고, 그 개념에 대해서는 대략적으로 이해를 했습니다.\r\n\r\n문제는 클로저를 응용하는 코드의 예시에서인데요,',
    id: '3postble8usiyfw',
    title:
      '코딩 입문한지 얼마안된 초보입니다. (자바스크립트 클로저에 대한 질문)',
  },
  {
    type: 4,
    description: '블록블록블록블록블록블록블록블록블록블록',
    id: 'noabqs29y7gpcrd',
    title: '블록체인블록체인블록블록블록블록',
  },
  {
    type: 4,
    description: '안녕하세요\r\n\r\nㅋㅋㅋ\r\nㅋㅋ\r\nㅋㅋ\r\n<div>gdgd<div>',
    id: '792r5w6cvtmgrc9',
    title: '질문이 있었는데 없어졌어요',
  },
  {
    type: 4,
    description: '갑자기 기억이 안납니다 허허\r\n\r\nㅋㅋㅋ\r\n\r\n\r\nㅋㅋㅋ',
    id: '97nrqujwiy7ekxt',
    title: '질문이 있습니다.',
  },
];

const freeboard = [
  {
    type: 3,
    description: '두개에 삼처넌인데 나 천원밖에 없어.  오백원은 빌려주세요',
    id: 'fimlgepxwsd5d09',
    title: '나랑 붕어빵 나눠 먹을 분?',
  },
  {
    type: 3,
    description: '내가 가르쳐드림ㅋ 근데 님들이 도쿄까지 와야함',
    id: '6f2zhbma8zwjo8e',
    title: '주술 배울 사람 ( 0/3 )',
  },
  {
    type: 3,
    description: '놀아줄 사람~~~~ ',
    id: 'evg11bt99qsjfgj',
    title: '아 심심하다',
  },
  {
    type: 3,
    description:
      '저의 스승이 되어 주실 분을 찾습니다.  리액트 잘하시면 더 좋아요',
    id: '4sa6lysswz7asrv',
    title: '프론트엔드 고수님 찾습니다',
  },
  {
    type: 3,
    description:
      '프론트엔드 3년차입니다.. 어쩌구 저쩌구.. 이직 원해요.. 저시기 머시기',
    id: 'oy44dp26pxr2m21',
    title: '이직하고싶어요',
  },
  {
    type: 3,
    description: '2명 구합니다. 4명이서 달에 4250씩 내고 같이 봐요',
    id: 'zjxoejpjs2jw9a0',
    title: '넷플릭스 같이 봐요',
  },
  {
    type: 3,
    description: '코테부터 할까요 CS부터 할까요? 조언 부탁드립니당앙',
    id: 'r8zks7qh83fra28',
    title: '백엔드 공부 뭐부터 해야하나요?',
  },
  {
    type: 3,
    description: '다들 어떻게 공부하시나요?ㅠㅠ 꿀팁좀',
    id: '1w1bvlrcpy0cf9g',
    title: 'html 마크업 너무 어려워요..',
  },
  {
    type: 3,
    description:
      '진짜 하루종일 생각해봤는데 호랑이가 짱인것같아요. 호랑이가 최고에요. 왜냐면 호랑이는 일단 고양이과잖아요? 그리고 호랑이는 이름도 3글자구.. 암튼 호랑이가 짱인듯.. 괜히 유명한게 아니라고 다시 느낍니다.',
    id: 'prfg1a2ik7570x7',
    title: '호랑이',
  },
  {
    type: 3,
    description:
      '저는 양이 최고라고 생각합니다. 일단 양은 초식동물이죠? 여기서 추가점수 있습니다. 그리고 저는 이틀동안 생각했는데 양이 최고인것같네요',
    id: 'tnmwnva6zkp4qll',
    title: '호랑이 최고라는 분',
  },
];

// eslint-disable-next-line import/prefer-default-export
export const resultDataList = [...together, ...selling, ...qna];

export const keywords = [
  '3년밖에',
  '가능한지',
  '검은색으로만',
  '고수만',
  '공부중인데요',
  '공부하기',
  '과제로',
  '구하고싶습니다',
  '구하는방식으로는',
  '구하려면',
  '구함',
  '구현중에',
  '그러니까',
  '그렇게되나요',
  '글자색이',
  '기본적인',
  '나눔합니다',
  '나눔해요',
  '나눠드려요',
  '누르면',
  '다른예제들을',
  '다른파일이',
  '대략적으로',
  '대해서는',
  '돌이킬수',
  '들여쓰기',
  '따라해봐도',
  '라이브러리',
  '로로롤',
  '로작업중입니다',
  '를만들려구하는데',
  '만들고',
  '만들고있는중에',
  '만들었습니다',
  '많아서',
  '말그대로',
  '맛있는거',
  '먹으러',
  '멋쟁이',
  '메일들을',
  '며칠안되어서',
  '모르는게',
  '문제있는건가요',
  '물어봐도',
  '바뀌는',
  '반갑습니당',
  '받은메일함의',
  '배경팝니다',
  '배드민턴',
  '버튼으로',
  '보러가실분',
  '보세요',
  '부족해서',
  '블록블록블록블록블록블록블록블록블록블록',
  '블록체인블록체인블록블록블록블록',
  '빨간색',
  '뽑습니다',
  '사라지고',
  '사진처럼',
  '색상은',
  '생각인데요',
  '선생님이',
  '숫자를',
  '스펙업을',
  '시대라고',
  '시작한',
  '아날로그',
  '아이디로',
  '안녕하세요',
  '안되는것같습니다',
  '안지났습니다',
  '안지났어요',
  '애플마우스',
  '애플매직키보드',
  '어떤데',
  '어떻게하면',
  '어떻게해야될까요',
  '얼마안된',
  '없어졌어요',
  '엘레멘트',
  '여러색으로',
  '예시에서인데요',
  '올려봅니다',
  '우편번호',
  '운동가요',
  '운동같이해요',
  '운동하실분',
  '웹메일',
  '웹사이트를',
  '위와같은코드가',
  '유효성',
  '이동하는',
  '이미지와',
  '이쿠죠',
  '인크루드했는데',
  '입문하게된',
  '입문한지는',
  '있겠지만',
  '있었는데',
  '있을때',
  '자바스크립트',
  '저랬다',
  '전달되는',
  '전달인자로',
  '절호의',
  '제작하다가',
  '조언부탁합니다',
  '주술을',
  '줄표시와',
  '질문이라',
  '질문있습니다',
  '찬스입니다',
  '채팅방테스트',
  '채팅방테스트입니다',
  '챗지피티로',
  '체크하고',
  '초상화입니다',
  '카밀로고나눔합니다',
  '코드들이',
  '코딩쪽으로',
  '코린이입니다',
  '클로저에',
  '키포드를',
  '타이머를',
  '테스트',
  '텍스트에디트',
  '판매할게요',
  '표시되던데',
  '표시됩니다',
  '프로젝트',
  '프론트엔드가',
  '필드에',
  '필요한것이',
  '하실분들',
  '해리포터',
  '회색인데',
  '휴지통',
  'asdf',
  'asdfsadf',
  'chtatGPT라는',
  'codemirror',
  'const',
  'css',
  'direction',
  'div',
  'document',
  'down',
  'dragElement',
  'element',
  'first',
  'function',
  'gdgd',
  'getElementById',
  'html',
  'info',
  'mouse',
  'node_modules',
  'onmousedown',
  'remember',
  'second',
  'separator',
  'var',
];
