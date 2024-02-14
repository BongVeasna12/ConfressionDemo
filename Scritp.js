"user strict";
let profileImg = document.querySelector("#profile-picture");
let title = document.querySelector("#title");
let description = document.querySelector("#description");
let yesButton = document.querySelector("#btn-yes");
let noButton = document.querySelector("#btn-no");
profileImg.src = "/audio/2024.jpg";
title.innerHTML = "MY BEUATIFUL GIRL!";
description.innerHTML = "Do you love me?🔪";

yesButton.innerHTML = "Yes";
noButton.innerHTML = "No";

let happyCat = new Audio("/audio/happycar.mp3");
let cryCat = new Audio("/audio/cry.mp3");

yesButton.addEventListener("click", () => {
  profileImg.src =
    "https://media1.tenor.com/m/UTrLSr85tYEAAAAC/happy-cat-cat.gif";
  title.innerHTML = "I love you too!";
  description.innerHTML = "I happy to hear that in valentine's day.";
  cryCat.pause();
  happyCat.play();
  happyCat.loop = true;
});

let scaleBtnYes = 1;
let scaleBtnNo = 1;
noButton.addEventListener("click", () => {
  profileImg.src =
    "https://media.tenor.com/BX94RpYwz2gAAAAM/banana-cat-crying.gif";
  title.innerHTML = "Oh no !";
  description.innerHTML = "I am so sad to hear that in valentine's day!";

  scaleBtnYes += 1;
  yesButton.style.transform = `scaleBtnYes (${scaleBtnYes})`;
  scaleBtnNo -= 1;
  noButton.style.transform = `scaleBtnNo(${scaleBtnNo})`;

  happyCat.pause();

  cryCat.play();
  cryCat.loop = true;
});
