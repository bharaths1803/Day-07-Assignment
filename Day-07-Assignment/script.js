var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){

  var result =  JSON.parse(request.response);
  console.log(result);

  // Countries from Asia continent /region
  var a = result.filter((ele) => ele.region == "Asia" || ele.continents.includes("Asia")).map((ele) => ele.name.common);
  console.log(a);

  // Countries with a population less than 2 lakh
  var b = result.filter((ele) => ele.population < 200000).map((ele) => ele.name.common);
  console.log(b);

  // Print name, capital, flag using forEach
  result.forEach(element => {
    console.log(element.name, element.capital, element.flag)
  });

  //Print total population
  var totPopulation = result.reduce((acc,ele) => acc + ele.population,0);
  console.log(totPopulation);

  

  //Print country using US dollars as currency

  /*
  Approach:
  1) For each element, currencies must have atleast 1 object nested inside it(ele.currencies != null)
  2) Also, get all the keys of the currency object if above is satisfied
  2) Then, if it has USD, then filter it
  3) Finally using map to take out only the common names alone
  */

  var c = result.filter((ele) => ele.currencies != null && Object.keys(ele.currencies).includes("USD")).map((ele) => ele.name.common);
  console.log(c);
  
}