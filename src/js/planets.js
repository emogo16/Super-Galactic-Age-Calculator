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
      this.mercuryLifeExp = `Wow you still have ${(this.lifeExp * 0.24) - this.mercuryAge} years. Congrats!! `
    } else {
    this.mercuryLifeExp = `Your estimated life here in Mercury is approximately 80 years!`
    };
  }
}  
// ${this.lifeExpectancy - this.mercuryAge}