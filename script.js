// Replace this URL with your deployed Google Apps Script Web App URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzM1JTYIrGloME_dTRPubNWexYLVAtxOGbByxqp3zA_d720C66iCEqCALaxrc65xmE-/exec';

document.getElementById('submit-btn').addEventListener('click', function () {
  const answer1 = document.getElementById('answer1').value.trim();
  const answer2 = document.getElementById('answer2').value.trim();
  const answer3 = document.getElementById('answer3').value.trim();

  if (!answer1 && !answer2 && !answer3) {
    alert('Please share at least one reflection before submitting.');
    return;
  }

  const btn = document.getElementById('submit-btn');
  btn.disabled = true;
  btn.textContent = 'Sending...';

  const params = new URLSearchParams({
    answer1: answer1,
    answer2: answer2,
    answer3: answer3,
  });

  fetch(`${SCRIPT_URL}?${params.toString()}`)
    .then(() => showThankYou())
    .catch(() => showThankYou());
});

function showThankYou() {
  const formSection = document.getElementById('form-section');
  formSection.innerHTML = '<p class="thank-you">Thank you — your reflections are on their way to Francesca.</p>';
}
