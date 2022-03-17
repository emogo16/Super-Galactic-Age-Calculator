import Planets from "./../src/js/planets.js";

describe("Planets", () => {
  test("#1 It will create a Planets object", () => {
    const planets = new Planets(27, "Male");
    expect(planets.age).toEqual(27);
    expect(planets.gender).toEqual("Male");
  });
  test ("#2 It will return the correct age in `Male` in Mercury years.", () => {
    const planets = new Planets(27, "Male");
    planets.lifeExpectancy();
    planets.mercuryAge();
    expect(planets.mercuryAge).toEqual(6);
    expect(planets.mercuryLifeExp).toEqual( "Wow you must be really healthy because you have passed your life expectancy about 14.64 years. Congrats!! ");
  }); 


});