var costOfJob = function(basePrice, manPower, itemCategory){

  const standardMarkup = 0.05;
  const foodMarkup = 0.13;
  const drugMarkup = 0.075;
  const electronicMarkup = 0.02;
  const humanMarkupPP = 0.012;

  function calcStandardPrice() {
    standardPrice = basePrice * (1 + standardMarkup);
    return standardPrice;
  }

  function validateManPower(manPower) {
    if (isNaN(manPower)){
      // throw new Error("Please enter a number 0-100 for people required");
      throw new TypeError("foo bar baz");
    }
    else {
      humanMarkup = manPower * humanMarkupPP;
      return humanMarkup;
    }
  }

  function calcHumanMarkup() {
    humanPrice = standardPrice * humanMarkup;
    return humanPrice;
  }

  function specialtyMarkupCalc(itemCategory){
    if (itemCategory === "food") {
      specialtyPrice =  standardPrice * foodMarkup;
      return specialtyPrice;
    }
    else if (itemCategory === "drugs") {
      specialtyPrice =  standardPrice * drugMarkup;
      return specialtyPrice;
    }
    else if (itemCategory === "electronics") {
      specialtyPrice =  standardPrice * electronicMarkup;
      return specialtyPrice;
    }
    else {
      specialtyPrice = 0;
      return specialtyPrice;
    }
  }

  function calcTotal(){
    total = Math.round((standardPrice + specialtyPrice + humanPrice)*100)/100;
    console.log('Total Price:' + total);
    return total;
  }

  calcStandardPrice();
  validateManPower(manPower);
  calcHumanMarkup();
  specialtyMarkupCalc(itemCategory);
  calcTotal();

}

// costOfJob(1299.99, 3, "food"); // Output: $1,591.58
costOfJob(5432, 1, "drugs"); // Output: $6,199.81
// costOfJob(12456.95, 4, "books"); // Output: $13,707.63
// costOfJob(100, "hello");
// costOfJob(100, 2, "books");

module.exports = costOfJob;
