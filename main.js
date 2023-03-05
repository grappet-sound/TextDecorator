var textarea = document.getElementById("textarea");
var result = document.getElementById("result");
var message;

function generate(){
    message = textarea.value.split("");
    console.log(message);

    var random = Math.floor(Math.random() * 16);
    
    for(var i = 0; i < message.length; i++){
        if(random == 0){
            if(textDict.frakturDict[message[i]]){
                message[i] = textDict.frakturDict[message[i]];
            }
        }else if(random == 1){
            if(textDict.frakturBoldDict[message[i]]){
                message[i] = textDict.frakturBoldDict[message[i]];
            }
        }else if(random == 2){
            if(textDict.monospaceDict[message[i]]){
                message[i] = textDict.monospaceDict[message[i]];
            }
        }else if(random == 3){
            if(textDict.doublestruckDict[message[i]]){
                message[i] = textDict.doublestruckDict[message[i]];
            }
        }else if(random == 4){
            if(textDict.scriptDict[message[i]]){
                message[i] = textDict.scriptDict[message[i]];
            }
        }else if(random == 5){
            if(textDict.scriptBoldDict[message[i]]){
                message[i] = textDict.scriptBoldDict[message[i]];
            }
        }else if(random == 6){
            if(textDict.circledDict[message[i]]){
                message[i] = textDict.circledDict[message[i]];
            }
        }else if(random == 7){
            if(textDict.circledBlackDict[message[i]]){
                message[i] = textDict.circledBlackDict[message[i]];
            }
        }else if(random == 8){
            if(textDict.squaredDict[message[i]]){
                message[i] = textDict.squaredDict[message[i]];
            }
        }else if(random == 9){
            if(textDict.squaredBlackDict[message[i]]){
                message[i] = textDict.squaredBlackDict[message[i]];
            }
        }else if(random == 10){
            if(textDict.serifBoldDict[message[i]]){
                message[i] = textDict.serifBoldDict[message[i]];
            }
        }else if(random == 11){
            if(textDict.serifBoldItalicDict[message[i]]){
                message[i] = textDict.serifBoldItalicDict[message[i]];
            }
        }else if(random == 12){
            if(textDict.sansDict[message[i]]){
                message[i] = textDict.sansDict[message[i]];
            }
        }else if(random == 13){
            if(textDict.sansBoldDict[message[i]]){
                message[i] = textDict.sansBoldDict[message[i]];
            }
        }else if(random == 14){
            if(textDict.sansItalicDict[message[i]]){
                message[i] = textDict.sansItalicDict[message[i]];
            }
        }else if(random == 15){
            if(textDict.sansBoldItalicDict[message[i]]){
                message[i] = textDict.sansBoldItalicDict[message[i]];
            }
        }
        
    }
    result.innerHTML = "";
    textAnim();

}

function textAnim(){
    if(message.length == 0) return;
    result.innerHTML += message[0];
    message.shift(0);
    setTimeout(textAnim, 400);
}