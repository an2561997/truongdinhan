const newitems = [{
        name: "item 1",
    },
    {
        name: "item 2",
    },
    {
        name: "item 3",
    },
    {
        name: "item 4",
    }
]
window.onload = function() {
    for (let a of newitems) {
        document.getElementsByClassName("menu")[0].innerHTML += < span > '+ a name +' < /span>;
    }
};