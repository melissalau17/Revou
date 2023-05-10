function hitungbmi() {
    var selectedgender = $('input[name="jenis-kelamin"]:checked').val();
    var age = $('input[name="usia"]').val();
    var weight = $('input[name="berat-badan"]').val();
    var height = $('input[name="tinggi-badan"]').val();

    height /= 100;

    var bmi = weight / (height * height);

    bmi = bmi.toFixed(2);

    var result = '';
    var topresult = '';
    if(bmi<18.5) {
        topresult = "Berat badan kurang";
        result = 'Underweight';
        $("#under-quality").show();
        $("#contentunderweight").show();
        $(".application-button").show();
    } else if(18.5 <= bmi && bmi <= 22.9) {
        topresult = "Berat badan sedang";
        result = 'Healthy';
        $("#normal-quality").show();
        $(".application-button").show();
    } else if(22.91 <= bmi && bmi <= 24.9) {
        topresult = "Berat badan lebih";
        result = 'Overweight';
        $("#over-quality").show();
        $("#contentoverweight").show();
        $(".application-button").show();
    } else if(24.91 <= bmi) {
        topresult = "Obesitas";
        result = 'Obese';
        $("#obese-quality").show();
        $("#contentobese").show();
        $(".application-button").show();
    }
    
    document.getElementById("hasil-berat-badan").innerHTML = topresult;
    document.getElementById("hasil-bmi").innerHTML = bmi;
    document.getElementById("hasil-keterangan").innerHTML = result;
}

function resetbmi(){
   
    document.getElementById("jenis_pria").checked = false;
    document.getElementById("jenis_wanita").checked = false;
    document.getElementById("usia").value = "";
    document.getElementById("berat-badan").value = "";
    document.getElementById("tinggi-badan").value = "";
   
    document.getElementById("hasil-berat-badan").innerHTML = "Keterangan";
    document.getElementById("hasil-bmi").innerHTML = "0.0";
    document.getElementById("hasil-keterangan").innerHTML = "Keterangan";

    $("#contentoverweight").hide();
    $("#contentunderweight").hide();
    $("#contentobese").hide();
    $("#obese-quality").hide();
    $("#over-quality").hide();
    $("#normal-quality").hide();
    $("#under-quality").hide();
    $(".application-button").hide();
}

    if (height === "/^[2-9]' ?:\d|1[0-1]?$/" || isNaN(height)) {
        result.innerHTML = "Provide a valid Height!"}
  
    else if (weight === "/^\d{2,3} ?kg$/" || isNaN(weight)) {
        result.innerHTML = "Provide a valid Weight!"};
