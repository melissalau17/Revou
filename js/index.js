function countBmi() {
    var p = [age.value, height.value, weight.value];
    if(male.checked){
      p.push("male");
    }else if(female.checked){
      p.push("female");
    }
  
    var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
  
    var result = '';
    if(bmi<18.5){
      result = 'Underweight';
       }else if(18.5<=bmi&&bmi<=24.9){
      result = 'Healthy';
       }else if(25<=bmi&&bmi<=29.9){
      result = 'Overweight';
       }else if(30<=bmi&&bmi<=34.9){
      result = 'Obese';
       }else if(35<=bmi){
      result = 'Extremely obese';
       }
    }