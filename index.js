
const start = () => {

    let r = document.getElementById('result');
    
            if('webkitSpeechRecognition' in window){
                let speechRecognizer = new webkitSpeechRecognition();
                    speechRecognizer.continuous = true;
                    speechRecognizer.interimResults = true;
                    speechRecognizer.lang = 'en-US';
                    speechRecognizer.start();

                let finalTranscripts = '';
                speechRecognizer.onresult = function(event) {
                    let interimTranscripts = '';
                    for(let i = event.resultIndex; i < event.results.length; i++){
                        let transcript = event.results[i][0].transcript;
                        transcript.replace('\n', '<br>')
                        if(event.results[i].isFinal){
                            finalTranscripts += transcript
                        }else{
                            interimTranscripts += transcript;
                        }
                    }
                    r.innerHTML = finalTranscripts + '<span style="color:#999">' + interimTranscripts + '</span>'
                    
                }

                speechRecognizer.onerror = function(event) {

                }

            }else{
                r.innerHTML = 'Your browser is not supported. If you are using Chrome, please update'
            }  
};