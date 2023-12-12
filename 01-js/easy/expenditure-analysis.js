/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  var output = {} // create an object
  for (let i = 0; i < transactions.length; i++) {
    var yanked_tansaction = transactions[i]
    if (output[yanked_tansaction.category]) {
      output[yanked_tansaction.category] = output[yanked_tansaction.category] + yanked_tansaction.price
    } else {
      output[yanked_tansaction.category] = yanked_tansaction.price
    }
  }
  // convert object to array 

  var keys = Object.keys(output)
  let final = [];
  for (let i = 0; i < keys.length; i++) {
    var yanked_category = keys[i];
    final.push({ category: yanked_category, totalSpent: output[yanked_category] })
  }
  //console.log(transactions)
  console.log(final)
  return final;
}

module.exports = calculateTotalSpentByCategory;
