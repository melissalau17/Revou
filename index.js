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
        $("#contentunderweight").show();
    } else if(18.5 <= bmi && bmi <= 24.9) {
        topresult = "Berat badan sedang";
        result = 'Healthy';
    } else if(25 <= bmi && bmi <= 29.9) {
        topresult = "Berat badan lebih";
        result = 'Overweight';
    } else if(30 <= bmi && bmi <= 34.9) {
        topresult = "Berat badan sangat lebih";
        result = 'Obese';
    } else if(35 <= bmi) {
        topresult = "Berat badan kelebihan banyak";
        result = 'Extremely obese';
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

    $("#contentunderweight").hide();
}
