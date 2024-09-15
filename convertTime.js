document.addEventListener("DOMContentLoaded", function() {
    const events = document.querySelectorAll(".race-event");
    events.forEach(event => {
        const serverTime = event.getAttribute("data-time");
        const serverTimeZone = event.getAttribute("data-timezone");

        // Convert server time to user's local time
        const localTime = new Date(new Date(serverTime).toLocaleString("en-US", { timeZone: serverTimeZone }));
        const userLocalTime = localTime.toLocaleString();

        // Display the local time
        event.innerHTML += ` - Local Time: ${userLocalTime}`;
    });
});
