var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build(); 

connection.on("ReceiveMessage", function (user, message) {  //ReciveMessage adında bir mesaj gelirse bunu çalıştırır.

    console.log(user + "-" + message);
    message = user + ":" + message;
    var li = document.createElement("li");
    li.textContent = message;
    document.getElementById("messageList").appendChild(li);
});

connection.start().then(function () {  //then : başarılı olursa çalıştırır.
    console.log("connection started");
}).catch(function (err) {
    return console.error(err.toString());
    });

document.getElementById("sendButton").addEventListener("click", function (event) { //addEventListener olayı dinler. sonra click metodunu çalıştırır.
    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;

    connection.invoke("SendMessage", user, message).catch(function (err) { //public async Task SendMessage(string user, string message) buradan gelir.
        return console.error(err.toString());
    });
});
    