const form = document.getElementById('contactForm');
const phoneNumber = '+5491123456789'; // Reemplaza con tu número de WhatsApp

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const phone = document.getElementById('query').value;

  const message = `Hola! Me gustaría contactarme. Mi nombre es ${name} ${surname} y mi número de teléfono es ${phone}.`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, '_blank');
});