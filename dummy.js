<!DOCTYPE html>
<html>
  <head>
    <title>Nepali Year and Last Update</title>
  </head>
  <body>
    <h1>Nepali Year and Last Update</h1>
    <p id="year"></p>
    <p id="last-update"></p>

    <script>
      var nepaliDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
      function updateNepaliYear() {
        var year = new Date().getFullYear();
        var nepaliYear = year + 56;
        var nepaliYearString = "";
        while (nepaliYear > 0) {
          var digit = nepaliYear % 10;
          nepaliYearString = nepaliDigits[digit] + nepaliYearString;
          nepaliYear = Math.floor(nepaliYear / 10);
        }
        document.getElementById("year").textContent = nepaliYearString;
      }
      updateNepaliYear();
      setInterval(updateNepaliYear, 1000);

      window.onload = function() {
        var lastUpdate = new Date(document.lastModified);
        var options = { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric', 
          weekday: 'long', 
          era: 'short', 
          hour: 'numeric', 
          minute: 'numeric', 
          second: 'numeric', 
          hour12: false, 
          timeZone: 'Asia/Kathmandu', 
          calendar: 'nepali' 
        };
        var nepaliDate = lastUpdate.toLocaleDateString('ne-NP', options).replace('सन्', '').replace('Last updated on ', '');
        var updateMessage = document.getElementById('last-update');
        updateMessage.textContent = nepaliDate;
      };
    </script>
  </body>
</html>
