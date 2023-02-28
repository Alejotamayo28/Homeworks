const num = 6;
let x = 0,
  y = 1,
  z = 1;
for (let i = 0; i <= num; i++) {
  z = x + y; // 1 2 3 5
  console.log(`${z} `); // 1 2 3 5  
  x = y; // 1 1 2 3
  y = z; // 1 2 3 5
}
