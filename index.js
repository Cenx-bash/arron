// Store questions in localStorage or use default values
let questions = JSON.parse(localStorage.getItem("questions")) || {
  q1: "How would you rate the service?",
  q2: "Was the staff helpful?",
  q3: "Was the process easy?",
  q4: "Were you satisfied with the service?",
  q5: "Would you recommend this office?"
};

let feedback = {};

function generateQRCode() {
  const qrData = "https://www.your-website.com/feedback"; // Replace with your actual feedback URL
  
  // Clear previous QR code if any
  const qrCodeContainer = document.getElementById('qr-code');
  qrCodeContainer.innerHTML = '';

  // Generate QR code and append it to the page
  QRCode.toCanvas(qrCodeContainer, qrData, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('QR code generated!');
    }
  });

  // Hide QR code section and show consent section
  document.getElementById('qr-section').classList.add('hidden');
  document.getElementById('consent-section').classList.remove('hidden');
}

function giveConsent(agreed) {
  if (!agreed) {
    alert("You must give consent to continue.");
    return;
  }
  document.getElementById('consent-section').classList.add('hidden');
  document.getElementById('feedback-form').classList.remove('hidden');
  setupForm();
}

function setupForm() {
  document.getElementById('question1').innerText = questions.q1;
  
  // Handle the star rating system
  const starsDiv = document.getElementById('stars');
  starsDiv.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const span = document.createElement("span");
    span.innerText = "★";
    span.className = "star";
    span.dataset.value = i;
    span.onclick = () => rateService(i);
    starsDiv.appendChild(span);
  }

  const yesno = document.getElementById("yesno-questions");
  ["q2", "q3", "q4", "q5"].forEach((q, i) => {
    yesno.innerHTML += `
      <label>${questions[q]}</label><br>
      <select onchange="feedback['${q}'] = this.value">
        <option value="">--Select--</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select><br><br>
    `;
  });

  document.getElementById("form").onsubmit = (e) => {
    e.preventDefault();
    let responses = JSON.parse(localStorage.getItem("responses") || "[]");
    responses.push(feedback);
    localStorage.setItem("responses", JSON.stringify(responses));
    alert("Thank you for your feedback!");
    location.reload();
  };
}

function rateService(rating) {
  const stars = document.querySelectorAll('.stars span');
  stars.forEach((star) => {
    star.classList.remove('active', 'red', 'yellow', 'green');
    star.style.color = '#bbb'; // Reset to gray
  });

  for (let i = 0; i < rating; i++) {
    const star = stars[i];
    star.classList.add('active');
    if (rating <= 2) star.classList.add('red');
    else if (rating === 3) star.classList.add('yellow');
    else star.classList.add('green');
  }

  feedback.rating = rating;
}

document.addEventListener('DOMContentLoaded', function () {
  setupForm(); 
});
function rateService(rating) {
  const stars = document.querySelectorAll('.stars span');
  stars.forEach((star) => {
    star.classList.remove('active', 'red', 'yellow', 'green');
    star.style.color = '#bbb'; 
  });

  for (let i = 0; i < rating; i++) {
    const star = stars[i];
    star.classList.add('active');
    if (rating <= 2) star.classList.add('red');
    else if (rating === 3) star.classList.add('yellow');
    else star.classList.add('green');
  }

  feedback.rating = rating;
}
