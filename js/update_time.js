window.onload = function() {
    var date = new Date();
    var options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', era: 'short', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false, timeZone: 'Asia/Kathmandu', calendar: 'nepali' };
    var nepaliDate = date.toLocaleDateString('ne-NP', options);
    var dayOfWeek = date.toLocaleDateString('ne-NP', { weekday: 'long', timeZone: 'Asia/Kathmandu', calendar: 'nepali' });
    var time = date.toLocaleTimeString('ne-NP', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false, timeZone: 'Asia/Kathmandu' });
    var fullDate = nepaliDate + ', ' + dayOfWeek + ', ' + time;
    var nepaliTime = document.getElementById('nepali-time');
    nepaliTime.textContent = fullDate;
}
