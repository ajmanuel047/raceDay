const raceDay = (runnersAge, earlyRegistration) => {
let raceNumber = Math.floor(Math.random() * 1000);
if(runnersAge > 18 && earlyRegistration){
  raceNumber + 1000
}

if(runnersAge > 18 && earlyRegistration){
 return `You are to race at 9:30 and your racenumber is ${raceNumber}`
} else if(runnersAge > 18 && !earlyRegistration){
 return `You are to race at 11:00am and your racenumber is ${raceNumber}`
}
if(runnersAge < 18){
  return `You are to race at 12:30pm and your raceNumber is ${raceNumber}`
}
if(runnersAge == 18 ){
  return `Please see the registration desk` 
}
}

let output = raceDay(18, true)
console.log(output)