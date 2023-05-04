const readline = require('readline');

var DominoPilling = function(n, m) {

    let p = 0;

    if (n % 2 === 0) {
        p += (n / 2);
        p *= m;
    }
    else {
        p += Math.floor(n/ 2)
        p *= m;

        if (m % 2 === 0) {
            p += (m / 2)
        }
        else {
            p += Math.floor(m / 2)
        }
    }

    return p;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (res) => {
  const [m, n] =  res.split(' ');
  const result = DominoPilling(m, n);
  console.log(result);
  rl.close();
});
