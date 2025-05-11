<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $email = $_POST["email"];
    $mobilenum = $_POST["mobilenum"];
    $course = $_POST["course"];
    
    // Set the recipient email address
    $to = "info.marketdecoder@gmail.com"; // Replace with the actual recipient email address
    
    // Set up sender
    $headers = "From: $email\r\n";
    
    // Email subject
    $subject = "Enquiry Form";

    // Email content
    $email_message = "Name: $firstname $lastname\nEmail: $email\nMobile Number: $mobilenum\nCourse: $course\n\n";

    // Verify reCAPTCHA
    $recaptchaSecretKey = "6Le08DQrAAAAALX6nVaH0JeU6_USJC6t3LEeyxnq"; // Replace with your Secret Key
    $recaptchaResponse = $_POST["g-recaptcha-response"];

    // Send a POST request to Google reCAPTCHA API for verification
    $recaptchaVerificationUrl = "https://www.google.com/recaptcha/api/siteverify";
    $recaptchaData = [
        'secret' => $recaptchaSecretKey,
        'response' => $recaptchaResponse,
    ];

    $recaptchaOptions = [
        'http' => [
            'method' => 'POST',
            'content' => http_build_query($recaptchaData),
        ],
    ];

    $recaptchaContext = stream_context_create($recaptchaOptions);
    $recaptchaResult = file_get_contents($recaptchaVerificationUrl, false, $recaptchaContext);
    $recaptchaResultJson = json_decode($recaptchaResult);

    if ($recaptchaResultJson && $recaptchaResultJson->success) {
        // reCAPTCHA verification successful

        // Send email
        $mail_sent = mail($to, $subject, $email_message, $headers);

        if ($mail_sent) {
            echo "<div class='success_message'>Thank you for submitting form</div>";
                echo '<script>
                setTimeout(function() {
                    window.location = "index.html"; //redirect page
                }, 3000); // 3000 milliseconds (3 seconds) delay before redirecting
              </script>';
        } else {
            echo "Error sending enquiry.";
        }
    } else {
        // reCAPTCHA verification failed
        echo "reCAPTCHA verification failed. Please try again.";
    }
} else {
    // Invalid request method
    echo "Invalid request method.";
}
?>
