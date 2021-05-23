<?php 

$kullaniciadi = $_POST['uname'];
$parola = $_POST['psw'];

if($kullaniciadi=="b201210378@sakarya.edu.tr" && $parola == "b201210378")
{
    echo "<h2>Giriş başarılı.</h2> <br>";
    echo "<h1>Hoşgeldiniz b201210378 !!";

    
}
else
{
    echo "<h1>Giriş başarısız.</h1> <br>";
    echo "<h2>3 Saniye İçinde Giriş yap sayfasına yönlendirileceksiniz.</h2>";
    header("Refresh: 3; url=login.html");
}
?>
<br><br><br>
<a class="active" href="index.html">Ana Sayfaya Dön</a>
