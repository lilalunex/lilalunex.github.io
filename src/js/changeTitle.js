var headerOneHomepage = document.getElementById('HomePage');
var url = window.location.href;
var prettyUrl = url.substring(url.indexOf('//') + 2, url.lastIndexOf("/"))
headerOneHomepage.innerHTML = prettyUrl;