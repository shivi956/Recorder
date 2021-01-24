const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

var a = 0;
var textbox = $("#textbox");
var instructions = $("#instructions");
var button = $("#start-btn");
var content = ' ';
recognition.continuous = true
recognition.onstart = function(){
    instructions.text("Transcripting...");
}
recognition.onspeechend = function(){
    instructions.text("No Activity");
}

recognition.onerror = function(){
    instructions.text("Try Again...");
}
recognition.onresult = function(event){
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    content += transcript;
    textbox.val(content);
}
button.click(function(event){
    if(content.length){
        content += ' ';
    }
    if(a === 0)
    {
        button.text("Stop");
        a = 1;
        recognition.start();
    }
    else
    {
        a = 0;
        button.text("Start");
        recognition.stop();
    }
    
});
$("#reset-btn").click(function(event){

    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            transcript: content
        })
    });
    
    recognition.stop();
    button.text("Start");
    textbox.val("");
    content = "";
});

textbox.on('input',function(){
    content = $(this).val();
});