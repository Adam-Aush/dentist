window.addEventListener("resize", () => {
  var swiper1 = new Swiper(".swiper1", {
    spaceBetween: 30,
    slidesPerView: window.innerWidth <= 700 ? 1 : 2,
    freeMode: true,
    //   pagination: {
    //     el: ".swiper-pagination1",
    //     clickable: true,
    //   },
    scrollbar: {
      el: ".swiper-pagination1",
      hide: true,
    },
  });
});

var swiper2 = new Swiper(".swiper2", {
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  // scrollbar: {
  //   el: ".swiper-pagination2",
  //   hide: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const question = document.querySelector(".game_question");
const choices = document.querySelectorAll(".form-control");
const progressText = document.querySelector(".progressText");
const progressBarFull = document.querySelector(".progressBarFull");
const checkboxs = document.querySelectorAll(".form-control_checkbox");
const game = document.querySelector(".game");
const game_content = document.querySelector(".game_content");

let questions = [
  {
    question: "Сколько зубов необходимо восстановить?",
    choice1: {
      img: "",
      title: "Один",
    },
    choice2: {
      img: "",
      title: "Несколько",
    },
    choice3: {
      img: "",
      title: "Всю челюсть",
    },
    choice4: {
      img: "",
      title: "Обе челюсти",
    },
    answer: "",
  },
  {
    question: "Как долго отсутствует зуб?",
    choice1: {
      img: "",
      title: "Один",
    },
    choice2: {
      img: "",
      title: "Несколько",
    },
    choice3: {
      img: "",
      title: "Всю челюсть",
    },
    choice4: {
      img: "",
      title: "Обе челюсти",
    },
    answer: "",
  },
  {
    question: "Когда планируете начать лечение?",
    choice1: {
      img: "",
      title: "Один",
    },
    choice2: {
      img: "",
      title: "Несколько",
    },
    choice3: {
      img: "",
      title: "Всю челюсть",
    },
    choice4: {
      img: "",
      title: "Обе челюсти",
    },
    answer: "",
  },
];

let currentQuestion = {};
let accept = false;

let selectNew = [];

let counter = 0;
let availableQuestions = [];

const MAX_QUEST = 3;

function start() {
  counter = 0;
  availableQuestions = [...questions];
  getNewQuestion();
}

start();

function getNewQuestion() {
  if (counter >= MAX_QUEST) {
    document.querySelector(".step1").style.display = "none";
    document.querySelector(".step2").style.display = "none";
    document.querySelector(".step3").style.display = "none";
    document.querySelector(".step4").style.display = "flex";
    document.querySelector(".game_block").style.display = "none";
    return;
  }

  let aaa = counter >= MAX_QUEST ? counter : counter + 1;

  console.log((aaa / MAX_QUEST) * 100);

  progressText.innerText = `${aaa} / ${MAX_QUEST}`;
  progressBarFull.style.width = `${(aaa / MAX_QUEST) * 100}%`;

  currentQuestion = availableQuestions[counter];
  question.innerText = currentQuestion.question;

  // availableQuestions.splice(counter - 1, 1)

  checkboxs.forEach((checkbox) => {
    checkbox.checked = false;
  });

  switch (counter) {
    case 1:
      document.querySelector(".step1").style.display = "none";
      document.querySelector(".step2").style.display = "flex";
      document.querySelector(".btn-consul").style.display = "block";
      document.querySelector(".btn-prev").style.display = "block";
      break;
    case 2:
      document.querySelector(".step1").style.display = "none";
      document.querySelector(".step2").style.display = "none";
      document.querySelector(".step3").style.display = "flex";
      document.querySelector(".btn-consul").style.display = "block";
      document.querySelector(".btn-prev").style.display = "block";
      break;

    default:
      document.querySelector(".step1").style.display = "flex";
  }

  counter++;
}

const nextBtn = document.querySelector(".next");

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    // const selectAnswer = e.target.dataset['number']
    // selectNew = [...selectNew, selectAnswer]
    // localStorage.setItem('answers', JSON.stringify(selectNew))
    accept = true;
    console.log(accept);
  });
});

nextBtn.addEventListener("click", (e) => {
  if (!accept) return;
  console.log(1);

  accept = false;

  setTimeout(() => {
    getNewQuestion();
  }, 1000);
});
