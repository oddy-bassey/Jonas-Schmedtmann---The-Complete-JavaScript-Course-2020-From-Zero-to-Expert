
//Objects

//object function
const oddy = {
     fristname: 'Oddy',
     lastname: 'Bassey',
     birthYear : '1996',
     job: 'CEO of Revoltcode',
     friends: ['Twin', 'Andrew', 'Gabriel', 'Mitchanki'],

     // age: function(birthYear){
     //      return 2021-birthYear;
     // }
     
     // age: function(){
     //      console.log(this);
     //      return 2021-this.birthYear;
     // }

     calcAge: function(){
          this.age = 2021-this.birthYear;
          return this.age;
     },

     getSummary: function(){
          return `${this.fristname} is a ${this.calcAge()} year old ${this.job}, he has ${this.friends.length} friends`;
     }
}; 

console.log(oddy.calcAge());
//console.log(oddy['age'](oddy.birthYear));

console.log(oddy.getSummary());
