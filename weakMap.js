
const items = new WeakMap();

const container = document.getElementById('content');

for (let i = 0; i < 50000; i++) {
    const el = document.createElement('li');
    el.textContent = `we are element ${i}`;
    el.onclick = function(ev) {
        console.log(items.get(el));
    }
    items.set(el, i);
    container.appendChild(el);
}

const removeHalf = function() {
    const amount = Math.floor(container.children.length / 2);
    for (let i = 0; i < amount; i++) {
        container.removeChild(container.firstChild);
    }
}
