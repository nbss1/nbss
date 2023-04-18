      window.onload = function() {
        var date = new Date(document.lastModified);
        var options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', era: 'short', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        var nepaliDate = date.toLocaleDateString('ne-NP-u-ca-perso', options);
        var lastUpdate = document.getElementById('last-update');
        lastUpdate.textContent = nepaliDate;
      }
