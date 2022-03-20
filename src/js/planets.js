export default class Planets {
  constructor(age, gender, planet) {
    this.age = age;
    this.gender = gender;
    this.planet = planet;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.68
  }
  lifeExpectancy() {
    if (this.gender==="Male") {
      this.lifeExp = 43;
    } else if (this.gender ==="female") {
      this.lifeExp = 49;
    }
  }
  mercuryAge() {
    this.mercuryAge = Math.round(this.age * 0.24);
    if (this.mercuryAge < this.lifeExp) {
      this.mercuryLifeExp = `Wow my calculations conclude you have gone over by almost ${(this.lifeExp * this.mercury) - this.mercuryAge} years to be exact. Congrats!! `
    } else {
    this.mercuryLifeExp = `You are lucky to be alive since you have exceeded your life expectancy by ${this.mercuryAge - 10} years! `
    };
  }
  venusAge() {
    this.venusAge = Math.round(this.age * 0.62);
    if (this.venusAge < this.lifeExp) {
      this.venusLifeExp = `Wow you have gone over your life expectancy by ${(this.lifeExp * this.venus) - this.venusAge} years. Congrats!! `
    } else {
    this.venusLifeExp = `You are lucky to be alive since you have exceeded your life expectancy by ${this.venusAge - 30} years`
    };
  }
  marsAge() {
    this.marsAge = Math.round(this.age * 1.88);
    if (this.marsAge < this.lifeExp) {
      this.marsLifeExp = `You exceeded life by ${(this.lifeExp * this.mars) - this.marsAge} years. Congrats!! `
    } else {
    this.marsLifeExp = `You are lucky to be alive since you have exceeded your life expectancy by ${this.marsAge - 50} years in mars`
    };
  }
  jupiterAge() {
    this.jupiterAge = Math.round(this.age * 11.68);
    if (this.jupiterAge < this.lifeExp) {
      this.jupiterLifeExp = `Wow you still have ${(this.lifeExp * this.jupiter) - this.jupiterAge} years. Congrats!! `
    } else {
    this.jupiterLifeExp = `You are lucky to be alive since you have exceeded your life expectancy by `
    };
  }
}  
// ${this.lifeExpectancy - this.mercuryAge}