<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="gd.css">
</head>
<body>
        <div class="layout"></div>
    <div class="menu">
        <li><a href="portfolio.html" class="slide">Home</a></li>
        <li><a href="applicant.html" class="slide">Applicant</a></li>
        <li><a href="news.html" class="slide">News</a></li>
        <li><a href="About us.html" class="slide">About Us</a></li>
        <li><a href="help.html" class="slide">Help</a></li>
    </div>
    <div class="place">
    <?php
$name=$_REQUEST['namemy'];
$num=$_REQUEST['number'];
$email=$_REQUEST['email'];
$Add=$_REQUEST['Address'];
$dbhost='localhost';
$dbuser='root';
$dbpass='';
$dbname='application';
$conn=mysqli_connect($dbhost,$dbuser,$dbpass);
if(!$conn)
{
    die("could not connect".mysqli_error($conn));
    echo"Retry";
}
// echo"connected";
mysqli_select_db($conn,$dbname);
mysqli_query($conn,"insert into info values('$name',$num,'$email','$Add')");
// print("<br>Row inserted");
?>
    <span id="done1"><img src="done.gif" id="done"><span><br><BR>
  <a href="applicant.html"id="back" style="text-decoration:none;color:#000;">GO BACK</a></div>
  <div class="coat"></div>
</body>
</html>