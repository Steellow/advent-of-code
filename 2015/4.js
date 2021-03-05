const md5 = require("md5");

const input = "yzbqklnj";

//! Part 1
for (i = 0; true; i++) {
  if (md5(input + i).startsWith("00000")) {
    console.log(i); // Answer 1
    break;
  }
}

//! Part 2
for (i = 0; true; i++) {
  if (md5(input + i).startsWith("000000")) {
    console.log(i); // Answer 2
    break;
  }
}
