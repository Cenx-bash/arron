<?php
$data = json_decode(file_get_contents("data.json"), true);
$questions = $data['questions'];
$responses = $data['responses'];
?>

<!DOCTYPE html>
<html>
<head>
  <title>Admin Panel</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
  <h2>Edit Questions</h2>
  <form method="POST" action="update_questions.php">
    <?php foreach ($questions as $i => $q): ?>
      <input type="hidden" name="id[]" value="<?= $q['id'] ?>">
      <input type="text" name="text[]" value="<?= htmlspecialchars($q['text']) ?>"><br><br>
    <?php endforeach; ?>
    <button type="submit">Save Changes</button>
  </form>

  <h2>Feedback Responses</h2>
  <pre><?php print_r($responses); ?></pre>
</div>
</body>
</html>
