const lastModifiedElement = document.getElementById("last-modified");
const lastModified = new Date(document.lastModified);
const bsDate = new NepaliDate(lastModified);
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
lastModifiedElement.textContent = `Last modified on ${bsDate.toLocaleDateString('ne-NP', options)}`;

var nepaliDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
var nepaliYearString = "";

setInterval(function() {
    var year = new Date().getFullYear();
    var nepaliYear = NepaliDate.fromAD(new Date(year, 0)).getYear();
    nepaliYearString = "";
    while (nepaliYear > 0) {
        var digit = nepaliYear % 10;
        nepaliYearString = nepaliDigits[digit] + nepaliYearString;
        nepaliYear = Math.floor(nepaliYear / 10);
    }
    document.getElementById("year").innerHTML = nepaliYearString;
}, 1000);
