<?php
$connection = mysqli_connect('localhost','root', '', 'test_db');
if( $connection == false)
{
    echo 'Не удалось подключиться к базе данных!</br>'.mysqli_connect_error();
    exit();
}