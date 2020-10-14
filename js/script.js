var input = document.getElementById("input");
var add = document.getElementById("add");
var ul = document.getElementById("ul")

let items = (localStorage.getItem('items')) ? JSON.parse(localStorage.getItem('items')) : []

add.addEventListener('click', function (e) {
    items.push(input.value);
    localStorage.setItem('items', JSON.stringify(items));
    location.reload(true)
})

function showitems() {
    for (var i = 0; i < items.length; i++) {
        console.log(items[i])
    
        const li = document.createElement("li");
        const x = document.createElement("div");
        li.textContent = items[i];

        ul.appendChild(li);
    }
}

function clearItems() {
    localStorage.removeItem('items')

    items = [];

    ul.innerHTML = '';
}

showitems()