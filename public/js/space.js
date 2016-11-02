function Space(name, address, description, price, owner){
  this.spaceName = name;
  this.address = address;
  this.desc = description;
  this.price = price ;
  this.owner = owner;
  this.availability = [];
}

Space.prototype.addDates = function (availStart,availEnd) {
  for (var i = new Date(availStart); i<= new Date(availEnd); i.setDate(i.getDate() + 1)) {
    this.availability.push(new Date (i).getTime());
  }
};

Space.prototype.removeDates = function (availStart,availEnd) {
  for (var i = new Date(availStart); i<= new Date(availEnd); i.setDate(i.getDate() + 1)) {
    var index = this.availability.indexOf(i.getTime());
    this.availability.splice(index,1);
  }
};
