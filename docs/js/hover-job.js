var jobs = document.getElementsByClassName('job');
var textExperience = document.querySelector('.text-experience');

console.log(jobs);


jobs['invrsion'].addEventListener('click', function(){
    textExperience.textContent = "As a freelancer, I modeled \
    objects with different levels of detail for a Virtual Reality platform on Unreal \
    Engine 4.";
});

jobs['projekt'].addEventListener('click', function(){
    textExperience.textContent = "Making 3D arts for marketing pieces, \
    I also taught 3D Generalist classes within the company's education area.";
});

jobs['medx'].addEventListener('click', function(){
    textExperience.textContent = "From UI design to 3D modeling for \
    brain surgery simulations. Perhaps one of the most varied experiences \
    in a company.";
});

jobs['labbits'].addEventListener('click', function(){
    textExperience.textContent = "Managing a team of 3D artists and \
    designers working on projects such as advergames production and \
    advertising pieces for an Startups ecosystem.";
});

jobs['ht'].addEventListener('click', function(){
    textExperience.textContent = "Developing a Motion Capture \
    project from scratch, I worked in the most varied parts of the pipeline. \
    From filming to cleaning the animations and using Python for \
    plugins to make the life of others animators easier.";
});

jobs['freela'].addEventListener('click', function(){
    textExperience.textContent = "Since I started life as a 3D artist, I \
    have had opportunities to work on a variety of projects as a freelancer \
    through my portfólio, freelance sites and external contacts. These \
    projects were and still are what lead me to have confidence and \
    certainty that I am doing what I really like.";
});