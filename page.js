// script.js
document.querySelectorAll('.nav-bar a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Remove active class from all links
    document.querySelectorAll('.nav-bar a').forEach(el => el.classList.remove('active'));
    this.classList.add('active');

    // Hide all sections
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));

    // Show the target section
    const targetId = this.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});

