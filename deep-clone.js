const book1 = {
  author: 'Charlotte Bronte',
  publishers: [
    (publisher1 = {
      companyName: 'AB',
    }),
    (publisher2 = {
      companyName: 'CD',
    }),
  ],
};

function cloneObject(object) {
  let clone = {};
  for (let prop in object) {
    if (object[prop] != null && typeof object[prop] == 'object') {
      clone[prop] = cloneObject(object[prop]);
    } else {
      clone[prop] = object[prop];
    }
  }
  return clone;
}

let book4 = cloneObject(book1); // call the function and create the copy => book4

book1.publishers[0] = {
  companyName: 'Super Cool Company', // => change the deep property of the book1
};
book1.author = 'William Shakespeare'; // change the property of the book1
console.log(book1);
console.log(book4);