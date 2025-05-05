<?php
$data = json_decode(file_get_contents("data.json"), true);
$questions = $data['questions'];
?>

<!DOCTYPE html>
<html>
<head>
  <title>Feedback</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
  <h2>Feedback Form</h2>
  <form action="submit.php" method="POST">
    <?php foreach ($questions as $q): ?>
      <label><?= htmlspecialchars($q['text']) ?></label><br>
      <?php if ($q['type'] == 'rating'): ?>
        <div class="stars">
          <?php for ($i = 1; $i <= 5; $i++):
            $color = $i <= 2 ? "red" : ($i == 3 ? "yellow" : "green"); ?>
            <label><input type="radio" name="<?= $q['id'] ?>" value="<?= $i ?>" required>
              <span class="<?= $color ?>">★</span>
            </label>
          <?php endfor; ?>
        </div>
      <?php else: ?>
        <select name="<?= $q['id'] ?>" required>
          <option value="">--Select--</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select><br><br>
      <?php endif; ?>
    <?php endforeach; ?>
    <button type="submit">Submit</button>
  </form>
</div>
</body>
</html>
