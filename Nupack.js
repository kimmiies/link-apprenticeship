function CostOfJob(basePrice, itemCategory, manPower){
  console.log(basePrice, itemCategory, manPower);

  function StandardJobCost(basePrice) {
    var standardPrice = basePrice * 1.05
    // console.log(standardPrice);
    return standardPrice;
  }

  // console.log(StandardJob(basePrice));

  function manPowerMarkupPercentage(manPower) {
    var markupPercentage = manPower * 0.012
    return markupPercentage;
  }


  // Function can only have one output
  // return StandardJobCost(basePrice);
  return manPowerMarkupPercentage(manPower);

}


CostOfJob(5, "bob", 3);
