<?php
$data = json_decode(file_get_contents("data.json"), true);
foreach ($_POST['id'] as $i => $id) {
  $data['questions'][$i]['text'] = $_POST['text'][$i];
}
file_put_contents("data.json", json_encode($data, JSON_PRETTY_PRINT));
echo "<script>alert('Questions updated!'); location.href='admin.php';</script>";
