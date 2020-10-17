let tmblSubmit = document.getElementById("tombol-submit")
tmblSubmit.addEventListener("click", function(){
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let telp = document.getElementById("telp").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let radios = document.getElementsByName("gender");
    let checkbox1 = document.getElementById("vehicle");

    if(nama == "") {
        alert('Nama tidak boleh kosong!');
    } else if (!(radios[0].checked || radios[1].checked)) {
        alert("pilih jenis kelamin anda");
        return false;
    } else if(!checkbox1.checked){
        alert('pilih salah satu hobi anda!');
    } else if(email == ""){
        alert('Email tidak boleh kosong!');
    } else if(telp == ""){
        alert('Telp tidak boleh kosong!');
    } else if(username == ""){
        alert('Username tidak boleh kosong!');
    } else if(password == ""){
        alert('Password tidak boleh kosong!');
    } 
     else {
        alert("Selamat! Anda berhasil register")
    }
  
})