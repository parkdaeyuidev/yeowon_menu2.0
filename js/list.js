Storage.prototype.setObject = function(key, value) {
    this.setItem(String(key), JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    return JSON.parse(this.getItem(key));
}

var menu = window.localStorage;

function EmptyMenu(){
    menu.flowertea = [];
    menu.coffee = [];
    menu.noncoffee = [];
    menu.juice = [];
    menu.ade = [];
    menu.bakery = [];
    menu.brunch = [];
}

function AddMenu(category, menu_info){
    menu[category]=menu_info;
}