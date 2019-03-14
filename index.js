let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

// let route = new Route(
//   { horizontal: 'Park', vertical: '34' },
//   { horizontal: 'Park', vertical: '45' }
// );

// it('combines horizontal and vertical blocks travelled', function() {
//   let route = new Route(
//     { horizontal: '1st Avenue', vertical: '34' },
//     { horizontal: 'Park', vertical: '45' }
//   );
//   expect(route.blocksTravelled()).to.equal(15);


class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return new Date(endDate).getFullYear() - this.startDate.getFullYear() +1
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled() {
    let horizontal = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)

    let vertical =  parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical)
    return horizontal + vertical
  }

  estimatedTime(peak = false) {
    if (peak === true) {
      return Math.floor(this.blocksTravelled() / 2)
    }
    else {
      return Math.floor(this.blocksTravelled() / 3)
    }
  }

}
