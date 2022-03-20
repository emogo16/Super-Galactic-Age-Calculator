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
  test ("#3 It will return the correct age in `Male` in Mercury years.", () => {
    const planets = new Planets(50, "Male");
    planets.lifeExpectancy();
    planets.mercuryAge();
    expect(planets.mercuryAge).toEqual(12);
    expect(planets.mercuryLifeExp).toEqual("Wow my calculations conclude you have gone over by almost -1.6799999999999997 years to be exact. Congrats!! ");
  });
  test ("#4 It will return the correct age in `Female` in Mercury years.", () => {
    const planets = new Planets(50, "Female");
    planets.lifeExpectancy();
    planets.mercuryAge();
    expect(planets.mercuryAge).toEqual(12);
    expect(planets.mercuryLifeExp).toEqual( "You are lucky to be alive since you have exceeded your life expectancy by 2 years! ");
  });

    //now we want to test that if you are older it will say your years left
  // test ("#3 If mercuryAge < lifeExpectancy it will return lifeExpectancy - mercuryAge", () => {
  //   const planets = new Planets(27, "Male");
  //   planets.lifeExpectancy();
  //   planets.mercuryAge();
  //   expect(planets.mercuryAge).toEqual(6);
  //   expect(planets.lifeExp).toEqual(86);
  //   expect(planets.mercuryLifeExp).toEqual( "Your estimated life here in Mercury is approximately 80 years!" );
  // });

});