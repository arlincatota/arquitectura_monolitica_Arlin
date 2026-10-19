const questions = [
  {
    id: 1,
    question: "¿Qué caracteriza principalmente a una arquitectura monolítica?",
    options: ["Cada función se despliega en un servidor distinto.", "La aplicación se construye y despliega como una unidad.", "No puede dividirse internamente en módulos.", "Todos sus datos deben estar en la nube."],
    correctAnswer: 1,
    explanation: "Un monolito se entrega como una unidad, aunque su código interno sí puede organizarse en módulos."
  },
  {
    id: 2,
    question: "¿Cómo se organiza normalmente una arquitectura de microservicios?",
    options: ["Como una única aplicación inseparable.", "Como servicios autónomos responsables de capacidades de negocio.", "Como páginas estáticas sin lógica de negocio.", "Como una base de datos por cada usuario."],
    correctAnswer: 1,
    explanation: "Los microservicios separan capacidades de negocio en servicios que pueden desarrollarse y desplegarse independientemente."
  },
  {
    id: 3,
    question: "¿Cuál describe mejor el despliegue de un monolito tradicional?",
    options: ["Se despliega la aplicación completa como una unidad.", "Cada método se despliega por separado.", "Siempre debe desplegarse mediante mensajería.", "No requiere construir el software."],
    correctAnswer: 0,
    explanation: "Los cambios suelen requerir construir y desplegar la aplicación integrada."
  },
  {
    id: 4,
    question: "¿Qué ventaja puede ofrecer escalar microservicios de forma selectiva?",
    options: ["Evita cualquier necesidad de infraestructura.", "Permite asignar capacidad a los servicios que más la necesitan.", "Elimina todos los problemas de rendimiento.", "Hace innecesario monitorear el sistema."],
    correctAnswer: 1,
    explanation: "Cuando la demanda varía entre capacidades, es posible escalar únicamente los servicios afectados."
  },
  {
    id: 5,
    question: "¿Cómo suelen comunicarse servicios en una arquitectura distribuida?",
    options: ["Mediante APIs o mensajería.", "Solo mediante variables globales.", "Siempre dentro del mismo proceso.", "No necesitan comunicarse."],
    correctAnswer: 0,
    explanation: "APIs y sistemas de mensajería son mecanismos habituales para la comunicación entre servicios."
  },
  {
    id: 6,
    question: "¿Cuál es una ventaja posible de un monolito para un producto pequeño?",
    options: ["Elimina la necesidad de probar.", "Tiene menor complejidad operativa inicial en ciertos contextos.", "Permite escalar cada función por separado.", "Evita que el código requiera organización."],
    correctAnswer: 1,
    explanation: "Un despliegue integrado puede ser más sencillo de operar al comienzo, especialmente para un dominio acotado."
  },
  {
    id: 7,
    question: "¿Qué ayuda a controlar el acoplamiento en un monolito?",
    options: ["Evitar cualquier módulo.", "Definir límites claros y organizarlo de manera modular.", "Duplicar cada función en varios lugares.", "Separar cada línea de código en un servicio."],
    correctAnswer: 1,
    explanation: "La modularidad y los límites explícitos permiten mantener cohesión aun cuando la aplicación se despliega como una unidad."
  },
  {
    id: 8,
    question: "¿Qué reto operativo suele aumentar con microservicios?",
    options: ["La necesidad de observabilidad y monitoreo distribuido.", "La imposibilidad de usar APIs.", "El tener que compilar el navegador.", "La falta de cualquier comunicación de red."],
    correctAnswer: 0,
    explanation: "Un sistema distribuido requiere supervisar servicios, comunicaciones, fallos y rendimiento en conjunto."
  },
  {
    id: 9,
    question: "¿En qué escenario podrían ser razonables los microservicios?",
    options: ["En todo proyecto, independientemente del equipo.", "En un sistema complejo con dominios claros y equipos preparados para operarlo.", "Solo en aplicaciones sin usuarios.", "Cuando se quiere evitar automatizar despliegues."],
    correctAnswer: 1,
    explanation: "Los microservicios pueden encajar cuando hay límites de dominio y capacidad operativa para gestionar la distribución."
  },
  {
    id: 10,
    question: "¿Qué criterio es importante al elegir una arquitectura?",
    options: ["Cuál es más popular en redes sociales.", "Tamaño del proyecto, necesidades de escala y experiencia del equipo.", "Cuántos lenguajes de programación se pueden usar.", "Elegir siempre la opción con más componentes."],
    correctAnswer: 1,
    explanation: "La elección depende de los requisitos, la evolución prevista, el equipo, el presupuesto y la capacidad de operación."
  }
];

const quizForm = document.querySelector("#quiz-form");
const questionCounter = document.querySelector("#question-counter");
const questionText = document.querySelector("#question-text");
const answerOptions = document.querySelector("#answer-options");
const previousButton = document.querySelector("#previous-button");
const nextButton = document.querySelector("#next-button");
const finishButton = document.querySelector("#finish-button");
const quizMessage = document.querySelector("#quiz-message");
const progressBar = document.querySelector("#progress-bar");
const progress = document.querySelector(".quiz-progress");
const progressLabel = document.querySelector("#progress-label");
const quizResults = document.querySelector("#quiz-results");
let currentQuestionIndex = 0;
const answers = Array(questions.length).fill(null);

function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
  questionText.textContent = currentQuestion.question;
  answerOptions.replaceChildren();

  currentQuestion.options.forEach((option, optionIndex) => {
    const label = document.createElement("label");
    label.className = "answer-option";
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `question-${currentQuestion.id}`;
    input.value = String(optionIndex);
    input.checked = answers[currentQuestionIndex] === optionIndex;
    input.addEventListener("change", () => {
      answers[currentQuestionIndex] = optionIndex;
      quizMessage.textContent = "";
    });
    const text = document.createElement("span");
    text.textContent = option;
    label.append(input, text);
    answerOptions.append(label);
  });

  previousButton.disabled = currentQuestionIndex === 0;
  nextButton.hidden = currentQuestionIndex === questions.length - 1;
  finishButton.hidden = currentQuestionIndex !== questions.length - 1;
  quizMessage.textContent = "";
  const answeredCount = answers.filter((answer) => answer !== null).length;
  const percentage = Math.round((answeredCount / questions.length) * 100);
  progressBar.style.width = `${percentage}%`;
  progress.setAttribute("aria-valuenow", String(percentage));
  progressLabel.textContent = `Respondidas: ${answeredCount} de ${questions.length}`;
}

function advanceQuestion() {
  if (answers[currentQuestionIndex] === null) {
    quizMessage.textContent = "Selecciona una respuesta antes de continuar.";
    answerOptions.querySelector("input")?.focus();
    return;
  }
  currentQuestionIndex += 1;
  renderQuestion();
  questionText.focus?.();
}

function showResults() {
  const unansweredIndex = answers.findIndex((answer) => answer === null);
  if (unansweredIndex !== -1) {
    currentQuestionIndex = unansweredIndex;
    renderQuestion();
    quizMessage.textContent = "Responde esta pregunta antes de finalizar. Puedes revisar tus respuestas con el botón Anterior.";
    answerOptions.querySelector("input")?.focus();
    return;
  }

  const correctCount = questions.reduce((total, question, index) => (
    total + Number(answers[index] === question.correctAnswer)
  ), 0);
  const incorrectCount = questions.length - correctCount;
  const percentage = Math.round((correctCount / questions.length) * 100);
  let feedback;
  if (percentage >= 90) feedback = "¡Excelente! Dominas los conceptos fundamentales.";
  else if (percentage >= 70) feedback = "¡Muy bien! Tienes una buena comprensión del tema.";
  else if (percentage >= 50) feedback = "Vas por buen camino. Repasa algunas diferencias importantes.";
  else feedback = "Te recomendamos revisar las secciones educativas e intentarlo nuevamente.";

  quizForm.hidden = true;
  quizResults.hidden = false;
  quizResults.replaceChildren();
  const heading = document.createElement("h3");
  heading.tabIndex = -1;
  heading.textContent = "Resultado del cuestionario";
  const scoreCard = document.createElement("div");
  scoreCard.className = "score-card";
  const scoreNumber = document.createElement("div");
  scoreNumber.className = "score-number";
  scoreNumber.textContent = `${percentage}%`;
  scoreNumber.setAttribute("aria-label", `${percentage} por ciento de aciertos`);
  const scoreText = document.createElement("div");
  const feedbackText = document.createElement("p");
  feedbackText.className = "fw-bold text-light";
  feedbackText.textContent = feedback;
  const scoreDetail = document.createElement("p");
  scoreDetail.textContent = `${correctCount} correctas · ${incorrectCount} incorrectas · ${questions.length} preguntas`;
  scoreText.append(feedbackText, scoreDetail);
  scoreCard.append(scoreNumber, scoreText);
  const reviewHeading = document.createElement("h3");
  reviewHeading.className = "mt-4";
  reviewHeading.textContent = "Revisión de respuestas";
  const reviewList = document.createElement("div");
  reviewList.className = "review-list";

  questions.forEach((question, index) => {
    const isCorrect = answers[index] === question.correctAnswer;
    const review = document.createElement("article");
    review.className = `review-item ${isCorrect ? "correct" : "incorrect"}`;
    const title = document.createElement("h4");
    title.textContent = `${index + 1}. ${question.question}`;
    const status = document.createElement("p");
    status.className = "review-status";
    status.textContent = isCorrect ? "✓ Correcta" : "✗ Incorrecta";
    const selected = document.createElement("p");
    selected.textContent = `Tu respuesta: ${question.options[answers[index]]}`;
    const correct = document.createElement("p");
    correct.textContent = `Respuesta correcta: ${question.options[question.correctAnswer]}`;
    const explanation = document.createElement("p");
    explanation.textContent = question.explanation;
    review.append(title, status, selected, correct, explanation);
    reviewList.append(review);
  });

  const restartButton = document.createElement("button");
  restartButton.type = "button";
  restartButton.className = "btn btn-primary";
  restartButton.textContent = "Intentar nuevamente";
  restartButton.addEventListener("click", restartQuiz);
  quizResults.append(heading, scoreCard, reviewHeading, reviewList, restartButton);
  heading.focus?.();
}

function restartQuiz() {
  answers.fill(null);
  currentQuestionIndex = 0;
  quizForm.hidden = false;
  quizResults.hidden = true;
  renderQuestion();
  questionText.focus?.();
}

if (quizForm && questions.length) {
  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showResults();
  });
  nextButton.addEventListener("click", advanceQuestion);
  previousButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex -= 1;
      renderQuestion();
    }
  });
  renderQuestion();
}
