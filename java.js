const readMoreBtn = document.querySelector('.read-more-btn');
const paragraphs = document.querySelector('.paragraphs');
readMoreBtn.addEventListener("click", (e) => {
    paragraphs.classList.toggle("show-more");
    if (readMoreBtn.innerText === "Read More") {
        readMoreBtn.innerText = "Read Less";
      } else {
        readMoreBtn.innerText = "Read More";
      }
    });
