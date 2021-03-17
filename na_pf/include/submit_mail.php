<?php

// $errors = '';
// $myemail = 'cocoao@naver.com';

// if(
// empty($_POST['name']) ||
// empty($_POST['company']) ||
// empty($_POST['email']) ||
// empty($_POST['message']))

// {
// $errors .= "\n 내용을 입력해주세요.";
// }

// $name = $_POST['name'];
// $company = $_POST['company'];
// $email_address = $_POST['email'];
// $message = $_POST['message'];

// // echo $myemail,$name,$company,$email_address,$message;



// if(!$errors)
// {
// $to = $myemail;
// $email_subject = "Contact form submission: $name";
// $email_body = 'You have received a new message.'.

// "Here are the details:\n Name: $name \n".

// "Email: $company\n $email_address\n Message \n $message";

// $headers = "From: $myemail\n";

// $headers .= "Reply-To: $email_address";

// mail($to,$email_subject,$email_body,$headers);}

// if(isset($_POST['submit'])){
//   $to = "cocoao@naver.com"; // this is your Email address
//   $from = $_POST['email']; // this is the sender's Email address
//   $name = $_POST['name'];
//   $company = $_POST['company'];
//   $subject = "Form submission";
//   $subject2 = "Copy of your form submission";
//   $message = $name . " " . $company . " wrote the following:" . "\n\n" . $_POST['message'];
//   $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];

//   $headers = "From:" . $from;
//   $headers2 = "From:" . $to;
//   mail($to,$subject,$message,$headers);
//   mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
//   echo "Mail Sent. Thank you " . $name  . ", we will contact you shortly.";
// }


$name = $_POST['name'];
$company = $_POST['company'];
$email_address = $_POST['email'];
$message = $_POST['message'];

echo $name,$company,$email_address,$message;
mail("cocoao@naver.com", "Form to email message", $name, $company, $message , "From: $email_address");



?>