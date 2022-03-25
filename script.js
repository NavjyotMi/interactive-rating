const ratng = document.querySelectorAll(".button");
const submit = document.querySelector("button");

const backcard = document.querySelector(".back--card");
const frontCard = document.querySelector(".front--card");

ratng.forEach((curr, i, arr) => {
  curr.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(`${i + 1}`);
    const rate = `${i + 1}`;
    document.querySelector(".btncl").textContent = rate;

    // console.log(arr[i]);
    arr[i].style.background = "#cf711f";
    arr[i].style.color = "white";
  });
  //   console.log(currentvalue);
});

submit.addEventListener("click", function (e) {
  e.preventDefault();
  backcard.classList.remove("hide");
  frontCard.classList.add("hide");
});
