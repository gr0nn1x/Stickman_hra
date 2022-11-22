const stickman = document.getElementById("stickman");
const counter = document.getElementById("counter");
const potion = document.getElementById("potion");
const money = document.getElementById("money");
const stats = document.getElementById("stats");
const jew = document.getElementById("jew");

let enemyhp = 50;
let enemyhpincrease = 78;
let dmgincrease = 1;
let potion1price = 57;
let balance = 0;
let potion2price = 230;
let moneygain = 35;
let zid = 1;
stickman.onclick = () => {
  enemyhp -= dmgincrease;
  counter.innerHTML = `HP: ${enemyhp}`;
  if (enemyhp <= 0) { 
enemyhp += enemyhpincrease;
enemyhpincrease *= 2;
balance += moneygain;
moneygain *= 2;
money.innerHTML = `peníze: ${balance}`;
  }
};

potion.onclick = () => {
  if (potion1price <= balance) {
    balance -= potion1price;
    potion1price *= 2;
    dmgincrease *=2;
    money.innerHTML = `peníze: ${balance}`;
    potion.innerHTML = `Zvíšit sílu Cena: ${potion1price}`;
    stats.innerHTML  = `Síla: ${dmgincrease}`;
  }
};

potion2.onclick = () => {
  if (potion2price <= balance) {
    balance -= potion2price;
    potion2price *= 2;
    moneygain *=1;
    zid += 1;
    money.innerHTML = `peníze: ${balance}`;
    jew.innerHTML = `Židovství: ${zid}`;
    potion2.innerHTML =`Zvíšit židovství Cena: ${potion2price}`;
  
  }
};
