<?php
$data = json_decode(file_get_contents("data.json"), true);
$response = [];
foreach ($data['questions'] as $q) {
  $id = $q['id'];
  $response[$id] = $_POST[$id] ?? null;
}
$data['responses'][] = $response;
file_put_contents("data.json", json_encode($data, JSON_PRETTY_PRINT));
echo "<script>alert('Thank you!'); location.href='form.php';</script>";
