const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 2000;

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2.5,
    speed: Math.random() * 1 + 0.3,
  });
}

function animate() {
  ctx.fillStyle = '#000428';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'white';
  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();

    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

animate();



const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = link.getAttribute('href').substring(1); 
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, 
        behavior: 'smooth'
      });
    }
  });
});



// Select the "Home" link
const homeLink = document.querySelector('a[href="#home"]');

// Add event listener to the "Home" button
homeLink.addEventListener('click', function(e) {
  e.preventDefault();  // Prevent default anchor link behavior
  
  // Scroll to the top of the page with a smooth effect
  window.scrollTo({
    top: 0,  // Scroll to the very top
    behavior: 'smooth'
  });
});
