const whatsappNumber = "12462695138"; // Your WhatsApp number

// SINGLE SERVICE BOOKING
document.querySelectorAll('.book-btn').forEach(button=>{
  button.addEventListener('click', ()=>{
    const service = button.closest('.service-card').getAttribute('data-service');
    const message = encodeURIComponent(`Hi LinkUp! I would like to book the following service: ${service}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  });
});

// MULTI-SERVICE BOOKING
const bookSelectedBtn = document.getElementById('bookSelected');
bookSelectedBtn.addEventListener('click', ()=>{
  const selected = [];
  document.querySelectorAll('.service-card').forEach(card=>{
    const checkbox = card.querySelector('.service-select');
    if(checkbox.checked){
      selected.push(card.getAttribute('data-service'));
    }
  });

  if(selected.length === 0){
    alert('Please select at least one service to book.');
    return;
  }

  const message = encodeURIComponent(`Hi LinkUp! I would like to book the following services: ${selected.join(', ')}`);
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
});

// SEARCH FUNCTIONALITY
const searchInput = document.getElementById('serviceSearch');
searchInput.addEventListener('input', ()=>{
  const query = searchInput.value.toLowerCase();
  document.querySelectorAll('.service-card').forEach(card=>{
    const service = card.getAttribute('data-service').toLowerCase();
    card.style.display = service.includes(query) ? "block" : "none";
  });
});

// CONTACT FORM
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  alert('Thank you! Your message has been sent. We will contact you via WhatsApp or email shortly.');
  contactForm.reset();
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});
