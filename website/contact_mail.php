<?php
//fname is variable
$Name = $_POST["name"];
$Designation = $_POST["designation"];
$Organisation = $_POST["org"];
$Email = $_POST["email"];
$Number = $_POST["mobile"];
$Time = $_POST["time"];
$Comment = $_POST["comment"];
//$Comment = $_POST["comments"];
//$mobile = $_POST["mobile"];
//$check = $_POST["check"];

$to = "ashish@conceptindia.com";
$subject = 'Feedback / Enquiry Form';
$content = "<font face='verdana' style='font-size:12px'><br /><br />Name : $Name <br /><br />Designation: $Designation <br /><br />Organisation: $Organisation<br /><br /> Email: $Email <br /><br />Number: $Number <br /><br /> Comment: $Comment</font>";
$headers = "From: $email" . "\r\n";
$headers .= "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";

//echo $subject.' '.$content; die();


	$mail = mail($to, $subject, $content, $headers);
	if($mail) {
		
		echo "<br><br><br><h2 align=center>Thank you for your enquiry. We will contact you shortly...</h2>";
		
		echo "<meta http-equiv=refresh content=\"1;url=http://www.conceptpr.com\">";
		
	} else {
			?>
		<script>
			alert("Your enquiry was unable to send due to some technical problem. Please try back later!!!");
			location.href="Contact-us.html";
        </script>
	<?php
}
?>