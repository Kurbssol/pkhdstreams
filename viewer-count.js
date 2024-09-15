let socket;

function connectWebSocket() {
  socket = new WebSocket('wss://cnt.dd12streams.com/totalviewers');
  
  socket.onopen = function(event) {
    console.log('Connected to WebSocket server');
    // Send initial ping and start sending ping every 15 seconds
    sendPing();
    setInterval(sendPing, 15000);
  };
  
  socket.onmessage = function(event) {
    const data = JSON.parse(event.data);
    if (data.ping === 'pong') {
      document.getElementById('viewers').textContent = data.viewers + " viewers";
    }
  };
  
  socket.onclose = function(event) {
    console.log('WebSocket connection closed, attempting to reconnect in 10 seconds...');
    setTimeout(connectWebSocket, 10000); // Attempt to reconnect after 10 seconds
  };
  
  socket.onerror = function(error) {
    console.error('WebSocket error:', error);
  };
}

function sendPing() {
  const message = JSON.stringify({ ping: 'ping' });
  socket.send(message);
}

connectWebSocket(); // Initial connection attempt


//If you want to count seperately
// + location.pathname.substring(1) after '