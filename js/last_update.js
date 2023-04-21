const lastModifiedElement = document.getElementById("last-modified");
const lastModified = new Date(document.lastModified);
const bsDate = new NepaliDate(lastModified);
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
lastModifiedElement.textContent = `Last modified on ${bsDate.toLocaleDateString('ne-NP', options)}`;
