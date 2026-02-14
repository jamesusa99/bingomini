// BingoMini — 导航、动效与交互
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
      });
    });
  }

  // Typewriter Effect
  const typewriterEl = document.querySelector('.typewriter');
  if (typewriterEl) {
    const fullText = typewriterEl.dataset.text || 'BingoMini：您的个人私有 AI 算力中心';
    typewriterEl.dataset.text = fullText;
    typewriterEl.textContent = '';
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        typewriterEl.textContent += fullText.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 60);
  }

  // Parallax Scroll
  const parallaxEl = document.querySelector('[data-parallax]');
  if (parallaxEl) {
    const speed = parseFloat(parallaxEl.dataset.parallax) || 0.1;
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const offset = scrolled * speed;
      parallaxEl.style.transform = `translateY(${offset}px)`;
    });
  }

  // Scroll Reveal
  const revealEls = document.querySelectorAll('.scroll-reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  // Nav active state on scroll
  const sections = document.querySelectorAll('section[id]');
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks?.querySelectorAll('a').forEach((a) => {
            a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-20% 0px -70% 0px' }
  );
  sections.forEach((section) => navObserver.observe(section));
});
