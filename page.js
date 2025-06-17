const featured_Projects= document.getElementById('featured_projects');

let projects=[];
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

fetch("projects.json").then(res=>{
  return res.json();
}).then(loadedprojects=>{
projects=loadedprojects;
console.log(projects);
FeaturedProjects()
})

FeaturedProjects = ()=>{
  featured_Projects.setAttribute('href', `${projects[Math.floor(Math.random() * projects.length)]}`)
}

