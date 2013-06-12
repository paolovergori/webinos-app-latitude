/*******************************************************************************
 *  Code contributed to the webinos project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Copyright 2013 Istituto Superiore Mario Boella (IT)
 * Author: Paolo Vergori (ISMB), Michal T. Kozak (Antenna)
 ******************************************************************************/


var App = {}; //global object/namespace


$(document).ready(function(){   
    //for resizeChat & debug/chat append;
    App.debugEl = $('#debug');
    App.chatEl = $('#chatLog');
    App.chatText = $('#chatBox');
    App.body = $(document.body);
});


function resizeChat() {
    if(window.innerWidth > 960) {
        App.chatEl[0].style.maxHeight = window.innerHeight - parseInt(App.body.css('padding-bottom'),10) - (App.chatText.height()+2) - App.chatEl[0].offsetTop + 'px'; //+2 is for the 1px border x2
    }
}


function debugLog(msg) {
    App.debugEl.append(msg);
    App.debugEl.scrollTop(App.debugEl[0].scrollHeight); //scroll to bottom
}


function chatLog(msg) {
    if(!App.chatMaxHeightSet) {
        resizeChat();
        App.chatMaxHeightSet = true;
    }
    App.chatEl.append(msg);
    App.chatEl.scrollTop(App.chatEl[0].scrollHeight); //scroll to bottom
}


$(window).resize(function() {
    resizeChat();
});


function logWebinos(){
    console.log("-------------------------------------");
    console.log('webinos.session.getSessionId()');
    console.log(webinos.session.getSessionId());
    console.log("---");
    console.log('webinos.session.getConnectedPzh()');
    console.log(webinos.session.getConnectedPzh());
    console.log("---");
    console.log('webinos.session.getConnectedPzp()');
    console.log(webinos.session.getConnectedPzp());
    console.log("---");
    console.log('webinos.session.getConnectedDevices()');
    console.log(webinos.session.getConnectedDevices());
    console.log("---");
    console.log('webinos.session.getPZPId()');
    console.log(webinos.session.getPZPId());
    console.log("---");
    console.log('webinos.session.getPZHId()');
    console.log(webinos.session.getPZHId());
    console.log("---");
    console.log('webinos.session.getFriendlyName()');
    console.log(webinos.session.getFriendlyName());
    console.log("---");
    console.log('webinos.session.isConnected()');
    console.log(webinos.session.isConnected());
    console.log("---");
    console.log('webinos.session.getSessionId()');
    console.log(webinos.session.getSessionId());
    console.log("---");
    console.log('webinos.session.getWebinosVersion()');
    console.log(webinos.session.getWebinosVersion());
    console.log("---");
    console.log('webinos.session.getServiceLocation()');
    console.log(webinos.session.getServiceLocation());
    console.log("---");
    console.log('webinos.session');
    console.log(webinos.session);
    console.log("-------------------------------------");
} 
