<meta charset="UTF-8">
<?php
$name = $_POST['name'];
$company = $_POST['company'];
$email_address = $_POST['email'];
$message = $_POST['message'];

$txt = "name: " . $name . "\n" . "company: " . $company . "\n" . "email address: " . $email_address . "\n" . " wrote the following:" . "\n\n" . $message;

mail("cocoao@naver.com", "Form to email message from".$name, $txt);

echo "
<script>
  alert('메일이 전송되었습니다.');
  location.href = '/na_pf/pages/about.php';
</script>
"
?>