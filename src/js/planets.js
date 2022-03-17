export default class Planets {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
  }
  lifeExpectancy() {
    if (this.gender==="Male") {
      this.lifeExp = 86;
    } else if (this.gender ==="female") {
      this.lifeExp = 89;
    }
  }
  mercuryAge() {
    this.mercuryAge = Math.round(this.age * 0.24);
    if (this.mercuryAge < this.lifeExp) {
      this.mercuryLifeExp = `Wow you must be really healthy because you have passed your life expectancy about ${(this.lifeExp * 0.24) - this.mercuryAge} years. Congrats!! `
    // } else {
    };
  }
}  
