var costOfJob = function(basePrice, manPower, itemCategory){

  const standardMarkup = 0.05;
  const foodMarkup = 0.13;
  const drugMarkup = 0.075;
  const electronicMarkup = 0.02;
  const serviceMarkup = 0.012;

  function getStandardPrice() {
    var standardPrice = basePrice * (1 + standardMarkup);
    return standardPrice;
  }

  function getServicePrice() {
    var standardPrice = getStandardPrice();

    if (isNaN(manPower)){
      throw new TypeError("manPower Error");
    } else {
      var servicePrice = standardPrice * manPower * serviceMarkup;
      return servicePrice;
    }
  }

  function getSpecialtyPrice(itemCategory){
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
      //assumption: if itemCategory is anything but three listed cases, assume standard Item & specialty price 0
      var specialtyPrice = 0;
      return specialtyPrice;
    }
  }

  try {
    var standardPrice = getStandardPrice();
    var humanPrice = getServicePrice();
    var specialtyPrice = getSpecialtyPrice(itemCategory);

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

module.exports = costOfJob;
