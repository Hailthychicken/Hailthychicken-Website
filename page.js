const featured_Projects= document.getElementById('featured_projects');
const latest_project= document.getElementById('latest_project');
const upcomingproject = document.getElementById('upcoming_project');

let featured_p;
let projects=[];
let upcoming_p;
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
FeaturedProjects();
latestProject();
});


fetch("upcoming_project.json").then(res=>{
  return res.json();
}).then(upcomingProjects=>{
 upcoming_p= upcomingProjects;
 upcomingProject();
});

FeaturedProjects = ()=>{
  featured_p = projects[Math.floor(Math.random() * projects.length)]
  featured_Projects.setAttribute('href', `${featured_p.link}`)
  featured_Projects.style.backgroundImage = `url(${featured_p.pic})`

}

latestProject = ()=>{
  latest_project.setAttribute('href', `${projects[0].link}`);
  latest_project.style.backgroundImage = `url(${projects[0].pic})`;
}

upcomingProject = ()=>{
upcomingproject.setAttribute('href', `${upcoming_p.link}`);
upcomingproject.style.backgroundImage= `url(${upcoming_p.pic})`
}
