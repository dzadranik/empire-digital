let aboutUsBtn = document.querySelector('.link-about-us');
let aboutUsBlock = document.querySelector(".about-us");
let contactUsBtn = document.querySelector('.link-contact-us');
let contactUsBlock = document.querySelector(".contact-us");

aboutUsBtn.addEventListener('click', function() {aboutUsBlock.scrollIntoView({ behavior: 'smooth' });});
contactUsBtn.addEventListener('click', function() {contactUsBlock.scrollIntoView({ behavior: 'smooth' });});