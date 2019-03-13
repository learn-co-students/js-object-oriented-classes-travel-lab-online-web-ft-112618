
class Driver {

  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endYear) {
    const end = new Date(endYear, 0);
    return end.getFullYear() - this.startDate.getFullYear();
  }
}

class Route {

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];

    const horizDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    const vertDistance = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    return horizDistance + vertDistance;
  }

  estimatedTime(peak=false) {
    return peak ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3; 
  }
}
