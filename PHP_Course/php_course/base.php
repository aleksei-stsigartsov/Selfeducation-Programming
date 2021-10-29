<?php
//VARIABLES
    $a = 'integer';
    $b = 21;
    $c = 21.42;
    $d = array(1,2,3,4,5);

    echo $a;echo '<hr>';
    echo $b;echo '</br>';
    echo $c;echo '</br>';
    echo $d[4];echo '</br>';

$f = array( //associative array
    'name' => 'Abraham ',
    'surname' => 'Tugalov',
    'age' => 20,
    'byear' => 1996,
    'education' => array('finished school in 2003', 'finished college in 2003'),
    'isProrgammer' => true
); // multidimensional array
echo $f['name'];
echo $f['education'][0];

$j = true;
echo'</br>'; echo $j ;echo'</br>';

echo 'test: $a </br>';
echo "test: $b";

echo '</br>' . $f['name'] . ' ' . $f['surname'] . '</br>'; //соединение

// OPERATORS AND CONDITIONS + - * / %
echo (5+10-1)/2%2;
echo '</br>'.'Answer is: '.($b + $c);

$weather = 'shiny'; //snow,rain,shiny,cloudy
// or = ||, and = &&, >=, =<, >, <, ==, !=
if ($weather === 'shiny'){
    echo '</br>'.'Погода кайф';
}else{
    echo '</br>'.'Погода гавно';
}
$age = 21;
if ($age < 21 && $f[name] != 'Abraham'){
    echo '</br>'.'Проход воспрещен';
}else if($age >= 21){
    echo '</br>'.'Welcome to the club buddy'.'</br>';
}

//CYCLES

//for
for ($i = 1 ; $i <= 2; $i++){
    echo $i;
    if($i%2==0){
        echo' - Чётное число';
    }else{echo ' - NeЧётное число';}
    echo '</br>';
}

//while
$test = 1;
while( $test <= 2){
    echo 'Test:'.$test.'</br>';
    $test++;}

//foreach
$names = array('Johny','Abraham','Alex');
foreach($names as $value){
    echo $value.'</br>';
}
foreach($d as $num){
    echo 'Sqrt of num '.$num.' = '.($num*$num).'</br>';
}

//FUNCTIONS

function myFunction()
{echo 'Hello GONDURAS';}
myFunction();
function myFunction2($a,$b){
    if($a>$b){echo '</br>'.$a.' is bigger than '.$b;}
    else if($a==$b){echo '</br>'.$a.' is equals '.$b;}
    else{echo '</br>'.$b.' is bigger than '.$a;}
}
myFunction2(1,2);

function get_bigger($a,$b){
    if($a>$b){return $a;}
    else return $b;
}

$bigger = get_bigger(23,24);
echo '</br >'.$bigger.' is bigger';
echo '</br>'.abs(-3000);
echo '</br>'.round(32.49);
echo '</br>'.ceil(32.49);
echo '</br>'.floor(32.99);
echo '</br>'.rand(0,100);
echo '</br>'.min(4,2,1,5,0,213,-1);
echo '</br>'.max(1,2,321);