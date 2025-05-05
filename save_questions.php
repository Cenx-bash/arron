<?php

$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

$questions = [];

if ($data['question1']) {
    $questions['question1'] = $data['question1'];
}
if ($data['question2']) {
    $questions['question2'] = $data['question2'];
}
if ($data['question3']) {
    $questions['question3'] = $data['question3'];
}
if ($data['question4']) {
    $questions['question4'] = $data['question4'];
}
if ($data['question5']) {
    $questions['question5'] = $data['question5'];
}

file_put_contents('questions.json', json_encode($questions));

echo 'Questions saved successfully!';
?>
