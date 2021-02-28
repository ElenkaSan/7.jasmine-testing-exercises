describe('calculateMontlyPayment', function () {
it('should calculate the monthly rate correctly', () => {
   let currentValues = {
    amount: 8000,
    years: 7, 
    rate: 10
   }
    expect(calculateMonthlyPayment(currentValues)).toEqual('132.81');
});

it("should return a result with 2 decimal places", () => {
  let currentValues = {
    amount: 11000,
    years: 5, 
    rate: 17
   }
  expect(calculateMonthlyPayment(currentValues)).toEqual('273.38');
});

/// etc
it("the actual value to be greater than the expected value", () => {
   let actualValue = 132.81;
   expect(actualValue).toBeGreaterThan(132);

});

it("the actual value to be true", () => {
   let actualValue = 273.38;
   expect(actualValue).toBe(273.38);
 }) 

});

beforeEach(() =>{
  console.log("BEFORE");
})

beforeAll(() =>{
  console.log("Before ALLLLL");
})

afterAll(() =>{
  console.log("After ALLLLL");
})