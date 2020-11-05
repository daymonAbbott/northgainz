

let heroSpan = document.querySelector('span.hero-name');
heroSpan.textContent = 'speed'

function agility(){
heroSpan.textContent = 'agility';
}

setTimeout(function() { agility(); }, 3000);

function strength(){
  heroSpan.textContent = 'strength';
  }
  
  setTimeout(function() { strength(); }, 6000);

function power(){
  heroSpan.textContent = 'power';
  }
  
  setTimeout(function() { power(); }, 9000);

function northgainz(){
  heroSpan.textContent = 'north gainz';
  }
  
  setTimeout(function() { northgainz(); }, 12000);




  let aboutbutton = document.querySelector('#aboutbutton');
  let aboutsection = document.querySelector('#about');

  aboutbutton.addEventListener('click', function(){
    aboutsection.scrollIntoView({behavior: "smooth"});
  })

  let teambutton = document.querySelector('#teambutton');
  let teamsection = document.querySelector('#team');

  teambutton.addEventListener('click', function(){
    teamsection.scrollIntoView({behavior: "smooth"});
  })

  // let servicebutton = document.querySelector('#servicebutton');
  // let servicesection = document.querySelector('#service');

  // servicebutton.addEventListener('click', function(){
  //   servicesection.scrollIntoView({behavior: "smooth"});
  // })

  let contactbutton = document.querySelector('#contactbutton');
  let contactsection = document.querySelector('#contact');

  contactbutton.addEventListener('click', function(){
    contactsection.scrollIntoView({behavior: "smooth"});
  })







 