const elems = document.getElementsByClassName('stream-status');

function refreshStreams() {
    for (const elem of elems) {
        makeRequest(elem.getAttribute("data-videourl"), function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    // Check the response URL to determine if the stream is really online
                    if (this.responseURL == elem.getAttribute("data-videourl")) {
                        elem.classList.add('stream-status-online');
                        elem.innerHTML = 'Stream is online ✅';
                    } else {
                        elem.classList.add('stream-status-offline');
                        elem.innerHTML = 'Stream is offline ❌';
                    }
                } 
                else {
                    elem.classList.add('stream-status-offline');
                    elem.innerHTML = 'Stream is offline ❌';
                }
            }
        })
    };
}

function makeRequest(url, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = callback;
    xhttp.open("GET", url, true);
    xhttp.send();
}


refreshStreams();
setInterval(() => refreshStreams(), 10000);
