<?php

//$_GET супер глобальный массив
//$_POST
include('includes/db.php');
$login = $_POST['login'];
$password = $_POST['password'];

$count = mysqli_query($connection, "SELECT * FROM `users` WHERE `login` = '$login' AND `password` = '$password' ");

if( mysqli_num_rows($count) == 0 )
{
    echo 'This account do not exists';
}else
{
    echo 'Hello,'.$login;
}
?>