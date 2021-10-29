<?php
include('includes/db.php')
?>

<form method="POST" action="/php_course/handle.php">
    <input type="text" placeholder="Ваш логин" name="login">
    <input type="password" placeholder="Ваш пароль" name="password">
    <hr>
    <input type="submit" value="Отправить">
</form>