# Speech Transcription

The basic functionality of the speech transcription application is shown in the picture. Speech Recognition interface of the Web Speech API is used here. User speech is processed by the SpeechRecognition interface and is show to the user in the textbox in the front end.![Alt text](/Untitled3.png) 
When user hits the start button, the SpeechRecognition interface is called which then takes the voice input of the user. Once the input is taken, its processed and returned to the user as text. And if the user hits the stop button then the interface is stopped. And when the reset button is hit, the recorded text is saved to DB.
The below picture is the architecture of the application. It consists of a View, Controllers (JavaScript), Models (Bootstrap) in the frontend part. At the back end the request is served by Node.js and the all the chats are stored in the Mongo Db(No SQL) .
Technologies used:
•	HTML 
•	CSS
•	Bootstrap
•	JavaScript
•	SpeechRecognition interface of the Web Speech API
•	Node.js
•	Mongo db
