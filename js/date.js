            var year = new Date().getFullYear();
						var nepaliYear = year + 56;
						var nepaliDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
						var nepaliYearString = "";

						while (nepaliYear > 0) {
						    var digit = nepaliYear % 10;
						    nepaliYearString = nepaliDigits[digit] + nepaliYearString;
						    nepaliYear = Math.floor(nepaliYear / 10);
						}

						document.getElementById("year").innerHTML = nepaliYearString;

						setInterval(function() {
						    var year = new Date().getFullYear();
						    var nepaliYear = year + 56;
						    var nepaliYearString = "";
						    while (nepaliYear > 0) {
						        var digit = nepaliYear % 10;
						        nepaliYearString = nepaliDigits[digit] + nepaliYearString;
						        nepaliYear = Math.floor(nepaliYear / 10);
						    }
						    document.getElementById("year").innerHTML = nepaliYearString;
						}, 1000);
