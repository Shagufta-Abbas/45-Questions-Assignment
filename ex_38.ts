
function describe_city(city: string, country: string = "U.S.A"): void {

console.log(`${city} is in ${country}.`); 
}

// Calling the function for three different cities describe_city("Karachi", "Pakistan"); describe_city("New York"); // Using the default country value

describe_city("Berlin", "Germany");