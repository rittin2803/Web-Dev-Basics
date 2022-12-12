<?php
if(isset($_POST['submit'])){
// Fetching variables of the form which travels in URL
$email = $_POST['email'];
$password = $_POST['password'];
if($email !=''&& $password !='')
{
//  To redirect form on a particular page
header( "Location: index2.html" ); 
exit;
}
else{
?><span><?php echo "Please fill all fields.....!!!!!!!!!!!!";?></span> <?php
}
}
?>
