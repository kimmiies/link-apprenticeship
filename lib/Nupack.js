var costOfJob = function(basePrice, manPower, itemCategory){

  // Markup Variables
  var standardMarkup = 0.05;
  var foodMarkup = 0.13;
  var drugMarkup = 0.075;
  var electronicMarkup = 0.02;
  var humanMarkupPP = 0.012;
  var humanMarkup = manPower * humanMarkupPP;

  // Standard Calulations
  var standardPrice = basePrice * (1 + standardMarkup);
  var humanPrice = standardPrice * humanMarkup;

  // Additional Markups
  if (itemCategory === "food" || itemCategory === "drugs" || itemCategory === "electronics") {
    if (itemCategory === "food") {
      var specialtyPrice =  standardPrice * foodMarkup;
    }
    else if (itemCategory === "drugs") {
      var specialtyPrice =  standardPrice * drugMarkup;
    }
    else if (itemCategory === "electronics") {
      var specialtyPrice =  standardPrice * electronicMarkup;
    }
    
    var total = Math.round((standardPrice + specialtyPrice + humanPrice)*100)/100;
    console.log("specialtyPrice " + total);
    return total;
  }

  else {
    var total = Math.round((standardPrice + humanPrice)*100)/100;

    console.log("standard " + total);
    return total;
  }
}

// Input: $1,299.99, 3 people, food  // Output: $1,591.58
// costOfJob(1299.99, 3, "food");

// Input: $5,432.00, 1 person, drugs // Output: $6,199.81
costOfJob(5432, 1, "drugs");

// Input: $12,456.95, 4 people, books // Output: $13,707.63
// costOfJob(12456.95, 4, "books");

module.exports = costOfJob;
