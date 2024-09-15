function checkStreamStatus(streamName, statusElementId) {
  const apiUrl = `https://api.example.com/stream-status/${streamName}`; // Replace with your actual API endpoint

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      const status = data.isOnline ? "Online" : "Offline";
      document.getElementById(statusElementId).textContent = status;
    })
    .catch(err => {
      console.log("Error fetching stream status:", err);
      document.getElementById(statusElementId).textContent = "Error";
    });
}

function updateAllStatuses() {
  checkStreamStatus('raw', 'raw-status');
  checkStreamStatus('nxt', 'nxt-status');
  checkStreamStatus('dynamite', 'dynamite-status');
  checkStreamStatus('smackdown', 'smackdown-status');
  checkStreamStatus('collision', 'collision-status');
  checkStreamStatus('nascar', 'nascar-status');
}

// Call status updates initially and then refresh every 20 seconds
updateAllStatuses();
setInterval(updateAllStatuses, 20000);
