<?php

/* https://api.telegram.org/bot1654661474:AAEp9v8-rCo-3v3KBwFYDPhbv3t3hSEOIV8/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

// поля из формы
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_mail'];
$country = $_POST['user_country'];
$city = $_POST['user_city'];
$address = $_POST['user_address'];
$user_date_in = $_POST['user_date_in'];
$user_date_out = $_POST['user_date_out'];
$user_prise = $_POST['user_prise'];
// токен нашего бота из botFather
$token = "1654661474:AAEp9v8-rCo-3v3KBwFYDPhbv3t3hSEOIV8";
// $chat_id = "https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXXXX/getUpdates";
$chat_id = "-521068837";
// 
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'с какого города заявка :' => $city,
  
  
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>
