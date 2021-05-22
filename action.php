<!DOCTYPE html>
<html>
    <head>
        <title>Mesajınız Gönderildi!</title>
    </head>
    <body>
        <h1>Mesaj Gönderildi.</h1>
        Ad: <?php echo $_POST['adi'];?><br/>
        Soyad: <?php echo $_POST['soyadi'];?><br/>
        Cinsiyet: <?php 
        if($_POST['cinsiyet'] == "on")
            echo "Erkek";
        else
            echo "Erkek";
        ?><br/>
        Numara: <?php echo $_POST['number'];?><br/>
        Mail: <?php echo $_POST['email']; ?><br/>

       
        <a class="active" href="index.html">Giriş Sayfasına Dön</a>
    </ul>
    </body>
</html>