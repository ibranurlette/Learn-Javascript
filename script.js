// No 1
function fishBash(angka) {
  for (let index = 0; index < angka; index++) {
    if (index % 3 === 0) {
      console.log("fish");
    }
    if (index % 5 === 0) {
      console.log("bash");
    }
    if (index % 5 === 0) {
      console.log("fish bash");
    }
  }
}

fishBash(5);

// No 2
function sortingArray(array) {
  // ?using function javascript
  // console.log(array.sort().reverse());

  // without using it
  // small > large
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }
  console.log("RESULT SMALL > LARGE", array);

  // large > small
  var output = [];
  for (var i = array.length - 1; i > -1; i--) {
    output.push(array[i]);
  }
  console.log("RESULT LARGE > SMALL", output);
}

sortingArray([1, 5, 9, 6, 0]);

// No 3
function reverseString(string) {
  console.log(
    "REVERSE STRING",
    string.split("").reverse().join("") === string ? true : false
  );
}

reverseString("NON");
// reverseString("IBRA");
