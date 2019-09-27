var socket = io();

socket.on('connect', function () {
	console.log('Connected to server!');
});

socket.on('disconnect', function () {
	console.log('Disconnected from server!');
});

socket.on('sendMessage', function (message) {
	console.log('sendMessage', message);
});

// document.getElementById("send").addEventListener("sendMessage", sendMessage);
// document.getElementById("btnRoom").addEventListener("joinRoom", joinRoom);

// function sendMessage() {
//   let message = document.getElementById("message").value;
//   let room = document.getElementById("room").value || null;
//   let name = document.getElementById("name").value;
//   socket.emit('receiveMessage', {
//   	room: room,
// 	from: name,
// 	text: message
// })
// };

// function joinRoom() {
//   let room = document.getElementById("room").value;
//   let name = document.getElementById("name").value;
//   socket.emit('joinRoom', room)
// }

