function Space(name, address, description, price, owner){
  this.spaceName = name;
  this.address = address;
  this.desc = description;
  this.price = price ;
  this.owner = owner;
  this.availability = [];
}

Space.prototype.addDates = function (availStart,availEnd) {
  for (i = availStart; i<= availEnd; i++) {
    this.availability.push(i);
  }
};
