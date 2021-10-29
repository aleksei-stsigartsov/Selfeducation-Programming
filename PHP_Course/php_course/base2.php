<?php

$connection = mysqli_connect('localhost','root', '', 'test_db');

if( $connection == false)
{echo 'Не удалось подключиться к базе данных!</br>'.mysqli_connect_error(); exit();}

$result = mysqli_query($connection, "SELECT * FROM `articles_categories`"); // создает функцию и помещает в переменную

if(mysqli_num_rows($result) == 0){
echo 'Записей по запросу не найдено';
}else{echo 'Записей найдено: ' .mysqli_num_rows($result). '</br>'; // функция показывающая количество записей в бд
}

//echo 'Today is: '.date('D').' of '.date('  d.m.Y').'. Time is: '.date(' H:i:s').'</br>';
//echo date('Y-m-d H:i:s');
$start_date = '2021-05-17 10:00:00';
$start_date_timestamp = strtotime($start_date);
$diff = time() - $start_date_timestamp;
$days_passed = floor((($diff / 60) / 60 / 24));
echo 'Mежду '.date('d.m.Y H:i:s', $start_date_timestamp).' и '.date('d.m.Y. H:i:s').
    ' прошло '.$days_passed.' дня';
?>

<ul>
    <?php
        while ( ($cat = mysqli_fetch_assoc($result)) ) //вызывает функцию с переданными параметрами
        {
            $articles_count = mysqli_query($connection, "SELECT COUNT(`id`) AS `total_count` FROM `articles`
                WHERE `category_id` = " .$cat['id']);
            $articles_count_result = mysqli_fetch_assoc($articles_count);
            echo '<li>'.$cat['title'].' ('.$articles_count_result['total_count'].')</li>';
        }
    ?>
</ul>
//если в форме мало данных, то хватит метода GET, если много значит POST//







