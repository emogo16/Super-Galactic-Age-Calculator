import Planets from "./../src/js/planets.js";

describe("Planets", () => {
  test("#1 It will create a Planets object", () => {
    const planets = new Planets(27, "Male");
    expect(planets.age).toEqual(27);
    expect(planets.gender).toEqual("Male");
  });
  test ("#2 It will return the correct age in Mercury years.", () => {
    const planets = new Planets(27, "Male");
    planets.lifeExpectancy();
    planets.mercuryAge();
    expect(planets.mercuryAge).toEqual(6);
    expect(planets.mercuryLifeExp).toEqual( "Wow you still have 14.64 years. Congrats!! ");
  }); 
  test ("#3 It will return the correct age in `Male` in Mercury years.", () => {
    const planets = new Planets(27, "Male");
    planets.lifeExpectancy();
    planets.mercuryAge();
    expect(planets.mercuryAge).toEqual(6);
    expect(planets.mercuryLifeExp).toEqual( "Wow you still have 14.64 years. Congrats!! ");
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