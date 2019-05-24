// Code your solution here:
driver = [
  { name: 'Sally',   revenue: 400 },
  { name: 'Annette', revenue: 200 },
  { name: 'Jim',     revenue: 150 }
]

function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let newDrivers = drivers.filter(driver=> driver.revenue > revenue);
  return newDrivers.map(function(driver) {
    return driver.name
  })
}

function exactMatch(drivers, attribute) {
  for (const key in attribute) {
    return drivers.filter(driver=> driver[key] === attribute[key])
  }
}

function exactMatchToList(drivers, attribute) {
  for (const key in attribute) {
    let filtered = drivers.filter(driver=> driver[key] === attribute[key])
    return filtered.map(function(driver) {
      return driver.name
    })

  }
}
