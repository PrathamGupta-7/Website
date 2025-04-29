const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for contacting LEO Automobiles! We will get back to you soon.');
      form.reset();
    });