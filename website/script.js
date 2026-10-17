// Preview only: deliberately does not transmit or store personal information.
// Connect a verified waitlist provider before production launch.
const form = document.querySelector('#waitlist-form');
const message = document.querySelector('#form-message');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = 'Preview only — your details have NOT been saved. A real verified waitlist service must be connected before launch.';
});