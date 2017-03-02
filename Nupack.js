// Food 13%
// Drugs 7.5%
// Electronics 2%
// Man Power 1.2%/person

function CostOfJob(basePrice, manPower, itemCategory){

  // Standard Variables
  var standardMarkup = 0.05;
  var foodMarkup = 0.13;
  var drugMarkup = 0.075;
  var electronicMarkup = 0.02;
  var humanMarkupPP = 0.012;
  var humanMarkup = manPower * humanMarkupPP;

  var standardPrice = basePrice * (1 + standardMarkup);
  console.log(standardPrice);

  if (itemCategory === "food") {
    var foodPrice = standardPrice * foodMarkup;
    var humanPrice = standardPrice * humanMarkup;
    var total = standardPrice + foodPrice + humanPrice;

    console.log("food " + total);
  }
  else if (itemCategory === "drugs") {
    var drugPrice = standardPrice * drugMarkup;
    var humanPrice = standardPrice * humanMarkup;
    var total = standardPrice + drugPrice + humanPrice;

    console.log("drugs " + total);
  }
  else if (itemCategory === "electronics") {
    var electronicPrice = standardPrice * electronicMarkup;
    var humanPrice = standardPrice * humanMarkup;
    var total = standardPrice + electronicPrice + humanPrice;

    console.log("electronics " + total);
  }
  else {
    var humanPrice = standardPrice * humanMarkup;
    var total = standardPrice + humanPrice;

    console.log("standard " + total);
  }
}



// CostOfJob(5, "bob", 3);

// Input: $1,299.99, 3 people, food  // Output: $1,591.58
// CostOfJob(1299.99, 3, "food");   Pass

// Input: $5,432.00, 1 person, drugs // Output: $6,199.81
// CostOfJob(5432, 1, "drugs");    Pass

// Input: $12,456.95, 4 people, books // Output: $13,707.63
CostOfJob(12456.95, 4, "books");
