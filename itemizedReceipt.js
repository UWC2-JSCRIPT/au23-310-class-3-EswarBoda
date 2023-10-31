// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price
// using NumberFormat to print $$ currency sign, instead of using $$ string literal
let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const logReceipt = (...items) => {
  let subTotal = 0;
  let total = 0;
  items.forEach((item) => {
    subTotal = item.price + item.tax; // sub total (price + tax) of each item
    total += item.price + item.tax; // cumulative total (price + tax) of all the items
    console.log(item.descr + ' - '
      +  USDollar.format(item.price)
      + ' + '
      +  USDollar.format(item.tax)
      + ' = '
      +  USDollar.format(subTotal));
      subTotal = 0 // Reset subTotal to 0 after each item
  })

  console.log('Total - ' + USDollar.format(total));
};

// Check
logReceipt(
  { descr: 'Burrito', price: 5.99, tax: 0.60 },
  { descr: 'Chips & Salsa', price: 2.99, tax: 0.30 },
  { descr: 'Sprite', price: 1.99, tax: 0.20 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97

/*const obj1 = {descr: 'Burrito', price: 5.99}
const obj2 = {descr: 'Chips & Salsa', price: 2.99}
const obj3 = {descr: 'Sprite', price: 1.99}

logReceipt(obj1, obj2, obj3);*/
