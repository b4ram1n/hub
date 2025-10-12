particlesJS('particles-js', {
	"particles": {
		"number": {
			"value": 8,
			"density": { "enable": true, "value_area": 800 }
		},
		"color": { "value": "#ffffff" },
		"shape": { "type": "circle" },
		"opacity": { "value": 0.5 },
		"size": { "value": 3, "random": true },
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		},
		"move": { "enable": true, "speed": 6 }
	},
	"interactivity": {
		"events": {
			"onhover": { "enable": true, "mode": "repulse" },
			"onclick": { "enable": true, "mode": "push" }
		},
		"modes": {
			"repulse": { "distance": 200, "duration": 0.4 },
			"push": { "particles_nb": 3 }
		}
	},
	"retina_detect": true
});

setTimeout(() => {
  console.log('particles.js loaded');

  const maxParticles = 100;// 最大数
  const checkInterval = 500;// ms

  const pJSDom = window.pJSDom && window.pJSDom[0];
  if (!pJSDom) return;

  setInterval(() => {
    const particles = pJSDom.pJS.particles.array;
    if (particles.length > maxParticles) {
      particles.splice(0, particles.length - maxParticles);
    }
  }, checkInterval);
}, 500);
