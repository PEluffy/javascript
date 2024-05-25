const stompClient = new StompJs.Client({
  brokerURL: "ws://localhost:8080/gs-guide-websocket",
});
var inputUsername = $("#name");

function onMessageReceived(payload) {
  var message = JSON.parse(payload.body);
  if (message.type === "JOIN") {
    message.content = message.sender + "Joined!";
  } else if (message.type === "LOGOUT") {
    message.content = message.sender + "Left!";
  } else {
    message.content = message.content;
  }
  showMessage(message.content);
}

stompClient.onConnect = (frame) => {
  setConnected(true);
  console.log("Connected: " + frame);
  stompClient.subscribe("/topic/chat", onMessageReceived);
  sendName();
};

stompClient.onWebSocketError = (error) => {
  console.error("Error with websocket", error);
};

stompClient.onStompError = (frame) => {
  console.error("Broker reported error: " + frame.headers["message"]);
  console.error("Additional details: " + frame.body);
};

function setConnected(connected) {
  $("#connect").prop("disabled", connected);
  $("#disconnect").prop("disabled", !connected);
  if (connected) {
    $("#conversation").show();
  } else {
    $("#conversation").hide();
  }
  $("#greetings").html("");
}

function connect() {
  stompClient.activate();
}

function disconnect() {
  stompClient.deactivate();
  setConnected(false);
  console.log("Disconnected");
}

function sendName() {
  stompClient.publish({
    destination: "/app/chat.addUser",
    body: JSON.stringify({ sender: $("#name").val().trim(), type: "JOIN" }),
  });
}

function sendMessage() {
  stompClient.publish({
    destination: "/app/chat.sendMessage",
    body: JSON.stringify({
      content: $("#message").val().trim(),
      sender: $("#name").val().trim(),
      type: "CHAT",
    }),
  });
}

function showMessage(message) {
  $("#greetings").append("<tr><td>" + message + "</td></tr>");
}

$(function () {
  $("form").on("submit", (e) => e.preventDefault());
  $("#connect").click(() => connect());
  $("#disconnect").click(() => disconnect());
  $("#send").click(() => sendMessage());
});
