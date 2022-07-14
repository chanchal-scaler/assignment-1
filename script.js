let beginnerHeading = document.querySelector("[data-class='beginner-heading']");
let intermediateHeading = document.querySelector(
  "[data-class='intermediate-heading']"
);
let advancedHeading = document.querySelector("[data-class='advanced-heading']");

let beginnerCol = document.querySelector("[data-class='beginner-col']");
let intermediateCol = document.querySelector("[data-class='intermediate-col']");
let advancedCol = document.querySelector("[data-class='advanced-col']");

let infoCard1 = document.querySelector("[data-class='info-card-1']");
let infoCard2 = document.querySelector("[data-class='info-card-2']");
let infoCard3 = document.querySelector("[data-class='info-card-3']");

let infoSerial1 = document.querySelector("[data-class='info-serial-1']");
let infoSerial2 = document.querySelector("[data-class='info-serial-2']");
let infoSerial3 = document.querySelector("[data-class='info-serial-3']");

const resetActiveDescription = () => {
  for (let heading of [beginnerHeading, intermediateHeading, advancedHeading]) {
    heading.classList.remove("curriculum-table__heading--active");
  }
  for (let col of [beginnerCol, intermediateCol, advancedCol]) {
    col.classList.remove("curriculum-table__col--active");
  }
  for (let card of [infoCard1, infoCard2, infoCard3]) {
    card.classList.remove("curriculum-info__card--inactive");
  }
  infoSerial1.innerHTML = 1;
  infoSerial2.innerHTML = 2;
  infoSerial3.innerHTML = 3;
};

let updateActiveDescription = (level) => {
  resetActiveDescription();
  document
    .querySelector(`[data-class='${level}-heading']`)
    .classList.add("curriculum-table__heading--active");
  document
    .querySelector(`[data-class='${level}-col']`)
    .classList.add("curriculum-table__col--active");
  if (level == "intermediate") {
    infoSerial1.innerHTML = "";
    infoSerial2.innerHTML = 1;
    infoSerial3.innerHTML = 2;
    infoCard1.classList.add("curriculum-info__card--inactive");
  } else if (level == "advanced") {
    infoSerial1.innerHTML = "";
    infoSerial2.innerHTML = "";
    infoSerial3.innerHTML = 1;
    infoCard1.classList.add("curriculum-info__card--inactive");
    infoCard2.classList.add("curriculum-info__card--inactive");
  }
};

beginnerHeading.addEventListener("click", () =>
  updateActiveDescription("beginner")
);
intermediateHeading.addEventListener("click", () =>
  updateActiveDescription("intermediate")
);
advancedHeading.addEventListener("click", () =>
  updateActiveDescription("advanced")
);
beginnerCol.addEventListener("click", () =>
  updateActiveDescription("beginner")
);
intermediateCol.addEventListener("click", () =>
  updateActiveDescription("intermediate")
);
advancedCol.addEventListener("click", () =>
  updateActiveDescription("advanced")
);
