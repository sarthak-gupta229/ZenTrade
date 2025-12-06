function toggleSidebar(){
    const hamburger=document.querySelector(".hamburger");
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    hamburger.classList.toggle('active');
}
// Email validation
const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');

if (emailInput) {
  emailInput.addEventListener('blur', validateEmail);
  emailInput.addEventListener('input', validateEmail);
}

function validateEmail() {
  const email = emailInput.value.trim();
  const isValid = email.includes('@') && email.includes('.');
  
  if (!email) {
    emailError.textContent = 'Email is required';
    emailInput.parentElement.classList.add('error');
  } else if (!isValid) {
    emailError.textContent = 'Invalid email';
    emailInput.parentElement.classList.add('error');
  } else {
    emailError.textContent = '';
    emailInput.parentElement.classList.remove('error');
  }
}

/// messabge recived-support page
function recived(){
    alert("Your message has been received. We’ll be in touch soon.")
}

