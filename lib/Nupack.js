var costOfJob = function(basePrice, manPower, itemCategory){
  // Markup Variables
  const standardMarkup = 0.05;
  const foodMarkup = 0.13;
  const drugMarkup = 0.075;
  const electronicMarkup = 0.02;
  const humanMarkupPP = 0.012;

  // Standard Calulations
  var standardPrice = basePrice * (1 + standardMarkup);

  var humanMarkup = manPower * humanMarkupPP;
  var humanPrice = standardPrice * humanMarkup;

  // Speciality Markup Calculation
  if (itemCategory === "food") {
    var specialtyPrice =  standardPrice * foodMarkup;
  }
  else if (itemCategory === "drugs") {
    var specialtyPrice =  standardPrice * drugMarkup;
  }
  else if (itemCategory === "electronics") {
    var specialtyPrice =  standardPrice * electronicMarkup;
  }
  else {
    var specialtyPrice = 0
  }

  var total = Math.round((standardPrice + specialtyPrice + humanPrice)*100)/100;
  console.log('Total Price:' + total);
  return total;
}

// costOfJob(1299.99, 3, "food"); // Output: $1,591.58
// costOfJob(5432, 1, "drugs"); // Output: $6,199.81
// costOfJob(12456.95, 4, "books"); // Output: $13,707.63

module.exports = costOfJob;
