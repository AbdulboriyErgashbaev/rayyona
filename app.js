"use strict";
window.addEventListener("DOMContentLoaded", () => {
    let body = document.querySelector("body");
    let btn = document.querySelector("button");
    let p = document.querySelector("p");
    let song =document.querySelector("audio")

    btn.addEventListener("click", ()=>{
      song.play();
      btn.classList.add("show-btn")
      body.classList.add("body-bgc")
      p.classList.add("show-heart")
      setInterval(createSnow, 100);
      function createSnow() {
        let snow = document.createElement("i");
        snow.classList.add("fas");
        snow.classList.add("fa-heart");
        snow.style.left = Math.random() * window.innerWidth + "px";
        snow.style.animationDuration = Math.random() * 3 + 2 + "s";
        snow.style.opacity = Math.random();
        snow.style.fontSize = Math.random() * 30 + "px";
        body.append(snow);
      }
    })
});