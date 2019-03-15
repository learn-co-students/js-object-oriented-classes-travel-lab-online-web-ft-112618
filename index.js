let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
]

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(endDate){
    this.endDate = new Date(endDate, 0)
    return this.endDate.getFullYear() - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled(){
    const vertBlocks = this.beginningLocation.vertical - this.endingLocation.vertical
    const horizontalBlocks = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal)
    const totalBlocks = Math.abs(vertBlocks) + Math.abs(horizontalBlocks)
    return totalBlocks
  }
  estimatedTime(peakHours){
    let travelTime = 3
    if (peakHours) {
      travelTime = 2
    }
    const time = this.blocksTravelled() / travelTime
    return time
  }
}
