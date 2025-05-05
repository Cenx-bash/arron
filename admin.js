
function saveQuestions() {
  const q1 = document.getElementById('edit-q1').value;
  const q2 = document.getElementById('edit-q2').value;
  const q3 = document.getElementById('edit-q3').value;
  const q4 = document.getElementById('edit-q4').value;
  const q5 = document.getElementById('edit-q5').value;
  
  const includeQ2 = document.getElementById('include-q2').checked;
  const includeQ3 = document.getElementById('include-q3').checked;
  const includeQ4 = document.getElementById('include-q4').checked;
  const includeQ5 = document.getElementById('include-q5').checked;

  const data = {
      question1: q1,
      question2: includeQ2 ? q2 : null,
      question3: includeQ3 ? q3 : null,
      question4: includeQ4 ? q4 : null,
      question5: includeQ5 ? q5 : null
  };

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'save_questions.php', true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = function() {
      if (xhr.status === 200) {
          document.getElementById('save-feedback').textContent = 'Questions saved successfully!';
      } else {
          document.getElementById('save-feedback').textContent = 'Error saving questions.';
      }
  };

  xhr.send(JSON.stringify(data));
}
