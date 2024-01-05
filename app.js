if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register("./sw.js")
		.then((reg) => console.log("service worker registered", reg))
		.catch((err) => console.log("service worker not registered", err))
}

console.log("works")

document.getElementById('notifyButton').addEventListener('click', function () {
	// Check if the browser supports notifications
	if (!("Notification" in window)) {
		alert("This browser does not support notifications");
	}

	else if (Notification.permission !== 'denied') {
		Notification.requestPermission().then(function (permission) {
			if (permission === "granted") {
				var notification = new Notification("Button was pressed!");
			}
		});
	}
});

setInterval(() => {
	new Notification("Hello world!");
}, 5000)