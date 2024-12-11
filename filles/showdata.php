<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data</title>
    <link rel="stylesheet" href="sd.css">
</head>
<body>     <div class="layout"></div>
    <div class="menu">
        <li><a href="portfolio.html" class="slide">Home</a></li>
        <li><a href="applicant.html" class="slide">Applicant</a></li>
        <li><a href="news.html" class="slide">News</a></li>
        <li><a href="About us.html" class="slide">About Us</a></li>
        <li><a href="help.html" class="slide">Help</a></li>
    </div>
    <div class="place">
    <?php
    $name=$_REQUEST['name'];
$dbhost='localhost';
$dbuser='root';
$dbpass='';
$dbname='application';
$conn=mysqli_connect($dbhost,$dbuser,$dbpass);
if(!$conn)
{
    die("could not connect".mysqli_error($conn));
}
// echo"connected";
mysqli_select_db($conn,$dbname);
$sql="SELECT * from info where name like '$name'";
$res=mysqli_query($conn,$sql);
if(!$res)
{
    die("could not get data<br>");
}
while($row=mysqli_fetch_array($res))
{
    echo("<div> name : $row[0]</div>");
    echo("<br><div> Mobile no. : $row[1]</div>");
    echo("<br> <div>E-mail : $row[2]</div>");
    echo("<br> <div>Address : $row[3]</div>");
}
mysqli_close($conn  );
    ?></div>
    <div class="coat"></div>
</body>
</html>