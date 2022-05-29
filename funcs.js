
const create = function() {
    this.x = 10;
    console.log('this', this);
    const innerFun = function() {
        console.log('inner this', this);
    }

    const innerArrowFun = () => {
        console.log('inner arrow this', this);
    }

    innerFun();
    innerArrowFun();
}

const item = new create();

// console.log(item);

const data = new Array(10000000);

for (let i = 0; i < data.length; i++) {
    data[i] = i;
}

const setData = new Set();


for(let i = 0; i < data.length; i++) {
    setData.add(i);
}

data.includes(5000000);
setData.has(5000000);

const map = new Map();

for (let i = 0; i < 10000; i++) {
    map.set(`${i}item`, i);
}

map.forEach((val, key) => console.log(val));
map.size();
map.has('0item');
map.clear();

console.log(map);
