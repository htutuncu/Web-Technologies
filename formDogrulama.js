function myFunc() {
    if (document.getElementById("ad").value == "") {
      alert("Ad boş bırakılamaz.");
      return false;
    }
    if (document.getElementById("soyad").value == "") {
      alert("Soyad boş bırakılamaz.");
      return false;
    }
    if (document.getElementById("cinsiyet") == "") {
      alert("Cinsiyet boş bırakılamaz.");
      return false;
    }
    if (document.getElementById("numara") == "") {
      alert("Numara boş bırakılamaz.");
      return false;
    }
    if (document.getElementById("email") == "") {
      alert("E-mail boş bırakılamaz.");
      return false;
    }
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.forms["bizeulasin"]["email"].value;
    if (reg.test(address) == false) {
      alert('Geçersiz email adresi!...');
      return false;
    }

  }