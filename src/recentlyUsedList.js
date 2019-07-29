function RecentlyUsedList() {
  this.list = [];
  this.upperLimit = 10;
}

RecentlyUsedList.prototype.add = function(record) {
    if (this.size() >= this.upperLimit) {
        this.remove();
    }

    if (this.list.indexOf(record) === -1 && record !== "" && typeof record === "string") {
        this.list.unshift(record);
    }
}

RecentlyUsedList.prototype.remove = function() {
    return this.list.pop();
}

RecentlyUsedList.prototype.first = function() {
    return this.list[0];
}

RecentlyUsedList.prototype.last = function() {
    return this.list[this.list.length - 1];
}

RecentlyUsedList.prototype.lookUpBy = function(index) {
    return this.list[index];
}

RecentlyUsedList.prototype.size = function() {
    return this.list.length;
}

RecentlyUsedList.prototype.setUpperLimit = function(length) {
    this.upperLimit = length;
}