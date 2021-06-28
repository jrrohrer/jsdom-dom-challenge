
// i can leave comments

document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("counter");
  const minusBtn = document.getElementById("minus");
  const plusBtn = document.getElementById("plus");
  const heartBtn = document.getElementById("heart");
  const pauseBtn = document.getElementById("pause");
  const likeCount = {};
  const comment = document.getElementById("comment-input");
  const list = document.getElementById("list");
  const submit = document.getElementById("submit");

  let i = 0; 
  let timer = setInterval(function() {i += 1; counter.innerText = i;}, 1000);

  plusBtn.addEventListener("click", increment);
  minusBtn.addEventListener("click", decrement);
  pauseBtn.addEventListener("click", pauseOrResume);
  heartBtn.addEventListener("click", likes);
  submit.addEventListener("click", makeComment);


  function increment() {
    i += 1;
    counter.innerText = i;
  }

  function decrement() {
    i -= 1;
    counter.innerText = i;
  }

  function likes() {
    if (likeCount[counter.innerText]) {
      likeCount[counter.innerText] += 1;
    } else {
      likeCount[counter.innerText] = 1;
    }
    const list = document.getElementsByClassName("likes")[0];
    const li = document.createElement("li");
    li.innerText = counter.innerText + " has been liked " + likeCount[counter.innerText] + " time(s)."
    list.appendChild(li);
  }

  function pauseOrResume() {
    if (pauseBtn.innerText === "pause") {
      clearInterval(timer);
      plusBtn.disabled = true;
      minusBtn.disabled = true;
      heartBtn.disabled = true;
      pauseBtn.innerText = "resume";
    } else {
      plusBtn.disabled = false;
      minusBtn.disabled = false;
      heartBtn.disabled = false;
      pauseBtn.innerText = "pause";
      timer = setInterval(function() {i += 1; counter.innerText = i;}, 1000);
    }
  } 

  function makeComment(e) {
    e.preventDefault();
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(comment.value));
    list.appendChild(div);
    comment.value = "";
  }

})