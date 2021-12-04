//bmi = m/h2

const mark = {
     firstname : 'Mark',
     lastname : 'Miller',
     mass : 78,
     height : 1.69,

     calcBMI : function(){
          this.bmi = this.mass / (this.height**2);
          return this.bmi;
     }
}

const john = {
     firstname : 'John',
     lastname : 'Smith',
     mass : 92,
     height : 1.95,

     calcBMI : function(){
          this.bmi = this.mass / (this.height**2);
          return this.bmi;
     }
}

if(mark.calcBMI() > john.calcBMI()){
     console.log(`${mark.firstname} ${mark.lastname}'s BMI (${mark.bmi}) is higher than ${john.firstname} ${john.lastname}'s (${john.bmi})`);
}else{
     console.log(`${john.firstname} ${john.lastname}'s BMI (${john.bmi}) is higher than ${mark.firstname} ${mark.lastname}'s (${mark.bmi})`);
}