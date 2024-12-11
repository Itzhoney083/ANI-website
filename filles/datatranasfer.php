<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    
    ?>
    <form action="getdata.php" style="color:tan;"><li>Name:<input type="text" id="namemy" name="namemy"></li>
        <li>Mobileno.:<input type="number" name="number" id="number"></li>
        <li>E-mail: <input type="email" name="email" id="email"></li>
        <li>Address: <input type="text" id="Address" name="Address"></li>
            <li><input type="submit" value="submit"> </li>
    </form>
    <form action="showdata.php">
        search Anybody:
        <li><input type="text" name="name"></li>
        <li> <input type="submit" value="submit"></li>
    </form>
</body>
</html>