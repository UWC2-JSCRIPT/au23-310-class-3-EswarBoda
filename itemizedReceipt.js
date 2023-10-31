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
  let total = 0;
  items.forEach((item) => {
    total += item.price;
    console.log(item.descr + ' - ' +  USDollar.format(item.price));
  })

  console.log('Total - ' + USDollar.format(total));
};

// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
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
