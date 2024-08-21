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

