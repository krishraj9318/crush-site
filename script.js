function start() {
  let text = "Not everything I code is for marks... some are just to make someone smile 🙂";
  let i = 0;

  function type() {
    if (i < text.length) {
      document.getElementById("msg").innerHTML += text[i];
      i++;
      setTimeout(type, 40);
    }
  }

  type();

  setInterval(createHeart, 300);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = "20px";
  heart.style.animation = "float 4s linear";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}