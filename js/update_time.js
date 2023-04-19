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
        var nepaliDate = lastUpdate.toLocaleDateString('ne-NP', options).replace('सन्', '');
        var updateMessage = document.getElementById('last-update');
        updateMessage.textContent = nepaliDate;
      };
