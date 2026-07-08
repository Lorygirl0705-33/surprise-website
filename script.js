function hideAll() {
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("hide");
    });
}

function nextPage() {
    hideAll();
    document.getElementById("letter").classList.remove("hide");
}

function galleryPage() {
    hideAll();
    document.getElementById("gallery").classList.remove("hide");
}

function lovePage() {
    hideAll();
    document.getElementById("love").classList.remove("hide");
}

function yesLove() {
    hideAll();
    document.getElementById("yes").classList.remove("hide");

    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = "-20px";
        heart.style.fontSize = "30px";
        heart.style.pointerEvents = "none";
        heart.style.animation = "fall 4s linear forwards";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 250);
}

function noLove() {
    hideAll();
    document.getElementById("no").classList.remove("hide");
}
