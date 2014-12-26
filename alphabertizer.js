var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    // Your code goes here!
    var dict = [];
    for (var i = 0; i < names.length; i++ ) {
      var name = names[i].split(" ");
      lastFirst = name.pop() + ", " + name;
      dict.push(lastFirst);
    }
    return dict.sort();
  }

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));