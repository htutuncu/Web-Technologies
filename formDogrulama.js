function myFunc() {
    var formgiris = document.forms["bizeulasin"];
    var ad = document.getElementById("ad").value;
    var soyad = document.forms["bizeulasin"]["soyadi"].value;
    var cinsiyet = document.forms["bizeulasin"]["cinsiyet"].value;
    var number = document.forms["bizeulasin"]["number"].value;
    var email = document.forms["bizeulasin"]["email"].value;



    if (ad == "") {
      alert("Ad boş bırakılamaz.");
      return false;
    }
    if (soyad == "") {
      alert("Soyad boş bırakılamaz.");
      return false;
    }
    if (cinsiyet == "") {
      alert("Cinsiyet boş bırakılamaz.");
      return false;
    }
    if (number == "") {
      alert("Numara boş bırakılamaz.");
      return false;
    }
    if (email == "") {
      alert("email boş bırakılamaz.");
      return false;
    }
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms["bizeulasin"]["email"].value;
    if (reg.test(address) == false) {
      alert('Geçersiz email adresi!...');
      return false;
    }

  }