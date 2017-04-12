function getSleepHours(day) {
  var hours = prompt('How many hours of sleep did you get on ' + day + '?');
  var day = ('Monday');
  return Number(hours);
}

function getActualSleepHours() {
  return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
}

function getIdealSleepHours() {
  var ideal = prompt('How much sleep is ideal every night?');
  return Number(ideal) * 7;
}

function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  
  if(actualSleepHours === idealSleepHours) {
    console.log('You got the ideal amount of sleep!');
  }
  
  if(actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than is ideal.');
  }
  
  if(actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Get some rest.');
  }
}

calculateSleepDebt();