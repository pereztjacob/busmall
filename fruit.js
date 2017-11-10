// constructor function for Fruits options
function Item (type, src, votes) {
    this.type = type;
    this.src = src;
    this.votes = votes || 0;
}

Item.prototype.wasClicked = function () {
    this.votes += 1;
};

Item.prototype.render = function () {
    const ele = document.createElement('img');
    ele.src = this.src;
    ele.classList.add(this.type);
    return ele;
}