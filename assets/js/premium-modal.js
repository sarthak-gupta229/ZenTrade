//premium-modal

function createPremiumServiceModal() {
 
  const modalDiv = document.createElement('div');
  modalDiv.id = 'premiumModal';
  modalDiv.className = 'premium-modal';
  
  modalDiv.innerHTML = `
    <div class="premium-modal-content">
      <span class="premium-close">&times;</span>
      <h2>Apply for the Service</h2>
      <form id="premiumServiceForm">
        <div class="form-group">
          <label for="userName">Name</label>
          <input type="text" id="userName" name="userName" required>
        </div>
        
        <div class="form-group">
          <label for="userEmail">Email</label>
          <input type="email" id="userEmail" name="userEmail" required>
        </div>
        
        <div class="form-group">
          <label for="userReason">Why do you want this service?</label>
          <textarea id="userReason" name="userReason" rows="4" required></textarea>
        </div>
        
        <button type="submit" class="submit-btn">Submit</button>
      </form>
    </div>
  `;

 
  document.body.appendChild(modalDiv);
}
function initPremiumServiceModal() {
  createPremiumServiceModal();

  const modal = document.getElementById('premiumModal');
  const btn = document.getElementById('getcard');
  const span = document.querySelector('.premium-close');
  const form = document.getElementById('premiumServiceForm');

  if (btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; 
    });
  }
  if (span) {
    span.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  }

  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('userName').value;
      const email = document.getElementById('userEmail').value;
      const reason = document.getElementById('userReason').value;


      console.log('Form submitted:', { name: name, email: email, reason: reason });

      alert('This service has limited availability. We have recorded your response and will inform you if you are eligible.');

      form.reset();
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  }
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPremiumServiceModal);
} else {
  initPremiumServiceModal();
}