var msgServices = {};
msgServices.serviceArray = [];
msgServices.service = null;
msgServices.listenerID = null;

function checkChanges(){            
    $("#chatBox").live('keyup blur', function(event) {
        if(event.keyCode == '13'){
            var msg = $("#chatBox")[0].value;
            $("#chatBox")[0].value = '';            
            broadcastMsg(msg);
        }            
    });
}


function broadcastMsg(msg){
    for(var i in msgServices.serviceArray){    
        var session = msgServices.serviceArray[i].createWebinosEvent();
        session.type = "latitude_message";
        session.addressing = {};
        session.addressing.to = [];
        //session.addressing.to.push(msgServices.serviceArray[i].serviceAddress);
        
        session.payload = msg;
        session.dispatchWebinosEvent({
            onSending: function (event, recipient) {
                console.log(event);
            },
            onCaching: function (event) {
                console.log(event);
            },
            onDelivery: function (event, recipient) {
                console.log("---delivery---");
                console.log(recipient);
                console.log("--------------")
            },
            onTimeout: function (event, recipient) {
                console.log(event);
            },
            onError: function (event, recipient, error) {
                console.log("---error---");
                console.log(error);
                console.log("-----------");
            }
        });
    }
}


function initMsg(){
    webinos.discovery.findServices(new ServiceType('http://webinos.org/api/events'), {
        onFound: function(service){
            msgServices.serviceArray[service.serviceAddress] = service;
            service.bind({
                onBind: function(){
                    console.log("binding to: " + service.serviceAddress);
                    service.addWebinosEventListener(function (event) {
                            $("#chatLog").append($('<p>' + event.payload + '</p>'));
                    }, "latitude_message");                    
                }
            });
        }
    });
}






$(document).ready(function(){
    checkChanges();
   webinos.session.addListener('registeredBrowser', initMsg);
});
    
