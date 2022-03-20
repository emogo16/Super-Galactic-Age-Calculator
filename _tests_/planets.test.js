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

});