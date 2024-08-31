document.querySelectorAll('.readMoreBtn').forEach(button => {
  button.addEventListener('click', function() {
    const text = this.previousElementSibling;
    const dots = text.querySelector('.dots');
    const moreText = text.querySelector('.more');

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      moreText.style.display = "none";
      this.innerHTML = "Read More";
    } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      this.innerHTML = "Read Less";
    }
  });
});

document.querySelector('.hover-trigger').addEventListener('mouseenter', function () {
    var myModal = new bootstrap.Modal(document.getElementById('hoverModal'));
    myModal.show();
  });

// chat bot

function sendMessage() {
  const userInput = document.getElementById('userInput').value;
  const messages = document.getElementById('messages');
  const userMessage = `<p><strong>You:</strong> ${userInput}</p>`;
  messages.innerHTML += userMessage;

  // Simple response logic
  let botResponse = 'Sorry, I do not understand.';
  if (userInput.includes('hello')) {
    botResponse = 'Hello! How can I assist you today?';
  }

  const botMessage = `<p><strong>Bot:</strong> ${botResponse}</p>`;
  messages.innerHTML += botMessage;
  document.getElementById('userInput').value = '';
}



console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: true
      }
    })
    .to("img", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(
      ".section.hero",
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    );
});

// service page

