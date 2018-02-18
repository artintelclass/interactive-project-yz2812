

var x=0;
var y=0;
var socket;
var synchro='null';
var change=false;

//*****************Connect to Websocket*****************//
function setupOsc(oscPortIn, oscPortOut) {
	var ipPort = ipAddress+':8081';
	socket = io.connect(ipPort, { port: 8081, rememberTransport: false });
	socket.on('connect', function() {
		socket.emit('config', {
			server: { port: oscPortIn,  host: ipAddress},
			client: { port: oscPortOut, host: ipAddress}
		});
	}); 
	socket.on('message', function(msg) {
		if (msg[0] == '#bundle') {
			for (var i=2; i<msg.length; i++) {
				receiveOsc(msg[i][0], msg[i].splice(1));
			}
		} else {
			receiveOsc(msg[0], msg.splice(1));
		}
	});
}


function receiveOsc(address,value) {
	console.log('sent'+address);
	socket.emit('message',[address,address]);
	if(address=='/left'){
	Reveal.left();
	}else if(address=='/right'){
	Reveal.right();
	}else if(address=='/up'){
	Reveal.up();
	}else if(address=='/down'){
	Reveal.down();
	}

}


var JSLink = "http://"+ipAddress+":8081/socket.io/socket.io.js"
var JSElement = document.createElement('script');
JSElement.src = JSLink;
JSElement.onload = OnceLoaded;
document.getElementsByTagName('head')[0].appendChild(JSElement);

var counter =0;


function OnceLoaded() {
    setupOsc(12000, 6451);
		
}

