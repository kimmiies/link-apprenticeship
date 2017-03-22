var costOfJob = function(basePrice, manPower, itemCategory){

  const standardMarkup = 0.05;
  const foodMarkup = 0.13;
  const drugMarkup = 0.075;
  const electronicMarkup = 0.02;
  const humanMarkupPP = 0.012;


// Parameters dynamic vs constant ...
// dont expose local variables because if another function has access to it, it will have unwanted side effects


  function getStandardPrice() {
    var standardPrice = basePrice * (1 + standardMarkup);
    // console.log("testing scope" + standardPrice);
    return standardPrice;
  }

  function calcHumanMarkup() {
    var standardPrice = getStandardPrice();

    if (isNaN(manPower)){
      throw new TypeError("manPower Error");
    } else {
      var humanPrice = standardPrice * manPower * humanMarkupPP;
      return humanPrice;
    }
  }

  function specialtyMarkupCalc(itemCategory){
    var standardPrice = getStandardPrice(basePrice);

    if (itemCategory === "food") {
      var specialtyPrice =  standardPrice * foodMarkup;
      return specialtyPrice;
    }
    else if (itemCategory === "drugs") {
      var specialtyPrice =  standardPrice * drugMarkup;
      return specialtyPrice;
    }
    else if (itemCategory === "electronics") {
      var specialtyPrice =  standardPrice * electronicMarkup;
      return specialtyPrice;
    }
    else {
      //assumption
      var specialtyPrice = 0;
      return specialtyPrice;
    }
  }

  try {
    var humanPrice = calcHumanMarkup();
    var standardPrice = getStandardPrice();
    var specialtyPrice = specialtyMarkupCalc(itemCategory);

    total = Math.round((standardPrice + specialtyPrice + humanPrice)*100)/100;
    console.log('Total Price:' + total);
    return total;

  } catch(e) {
    if (e.message === "manPower Error") {
        throw new TypeError("Invalid input. manPower must be an number 0-100");
      }
      else {
        throw new TypeError("General Error");
      }
  }
}

// costOfJob(1299.99, 3, "food"); // Output: $1,591.58
// costOfJob(5432, 1, "drugs"); // Output: $6,199.81
// costOfJob(12456.95, 4, "books"); // Output: $13,707.63
// costOfJob(100, "hello");
// costOfJob(100, 2, "books");

module.exports = costOfJob;
