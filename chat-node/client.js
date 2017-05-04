var net = require('net');

var client = net.connect(3000);

client.on('connect', function () {
    client.write('Hello, I am the client!');
});
client.on('end', function () {
    process.exit();
});
client.on('data', function (message) {
    console.log(message.toString());
});

process.stdin.on('readable', function () {
    var message = process.stdin.read();
    if (!message) return;
    message = message.toString().replace(/\n/, '');
    client.write(message);
});
