import Planets from "./../src/js/planets.js";

describe("Planets", () => {
  test("#1 It will create a Planets object", () => {
    const planets = new Planets(50, "Male");
    expect(planets.age).toEqual(50);
    expect(planets.gender).toEqual("Male");
  });
  test ("#2 It will return the correct age in Mercury years.", () => {
    const planets = new Planets(50, "Male");
    planets.lifeExpectancy();
    planets.mercuryAge();
    expect(planets.mercuryAge).toEqual(12);
  }); 
  test ("#3 If mercuryAge > lifeExpectancy, it will return mercuryAge - lifeExpectancy", () => {
    const planets = new Planets(50, "Male");
    planets.lifeExpectancy();
    planets.mercuryAge();
    expect(planets.mercuryAge).toEqual(12);
    expect(planets.mercuryLifeExp).toEqual("Wow my calculations conclude you have gone over by almost -1.6799999999999997 years to be exact. Congrats!! ");
  });
  test ("#4 If mercuryAge > lifeExpectancy, it will return mercuryAge - lifeExpectancy", () => {
    const planets = new Planets(50, "Female");
    planets.lifeExpectancy();
    planets.mercuryAge();
    expect(planets.mercuryAge).toEqual(12);
    expect(planets.mercuryLifeExp).toEqual( "You are lucky to be alive since you have exceeded your life expectancy by 2 years! ");
  });
  test ("#5 It will return the correct age in `Male` in Venus years.", () => {
    const planets = new Planets(60, "Male");
    planets.lifeExpectancy();
    planets.venusAge();
    expect(planets.venusAge).toEqual(37);
    expect(planets.venusLifeExp).toEqual( "Wow you have gone over your life expectancy by -10.34 years. Congrats!! " );
  });
  test ("#6 It will return the correct age in `Female` in Venus years.", () => {
    const planets = new Planets(60, "Female");
    planets.lifeExpectancy();
    planets.venusAge();
    expect(planets.venusAge).toEqual(37);
    expect(planets.venusLifeExp).toEqual( "You are lucky to be alive since you have exceeded your life expectancy by 7 years" );
  });
  test ("#7 It will return the correct age in `Male` in Mars years.", () => {
    const planets = new Planets(50, "Male");
    planets.lifeExpectancy();
    planets.marsAge();
    expect(planets.marsAge).toEqual(94);
    expect(planets.marsLifeExp).toEqual( "You are lucky to be alive since you have exceeded your life expectancy by 44 years in mars" );
  });
  test ("#8 It will return the correct age in `Female` in Mars years.", () => {
    const planets = new Planets(50, "Male");
    planets.lifeExpectancy();
    planets.marsAge();
    expect(planets.marsAge).toEqual(94);
    expect(planets.marsLifeExp).toEqual( "You are lucky to be alive since you have exceeded your life expectancy by 44 years in mars" );
  });
  test ("#9 It will return the correct age in `Male` in Jupiter years.", () => {
    const planets = new Planets(50, "Male");
    planets.lifeExpectancy();
    planets.jupiterAge();
    expect(planets.jupiterAge).toEqual(584);
    expect(planets.jupiterLifeExp).toEqual( "You are lucky to be alive since you have exceeded your life expectancy by 534" );
  });
  test ("#10 It will return the correct age in `Female` in Jupiter years.", () => {
    const planets = new Planets(50, "Female");
    planets.lifeExpectancy();
    planets.jupiterAge();
    expect(planets.jupiterAge).toEqual(584);
    expect(planets.jupiterLifeExp).toEqual( "You are lucky to be alive since you have exceeded your life expectancy by 534" );
  });

});