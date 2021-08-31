function repeatMessage(message, repeatCount){

    if (typeof(messsage) != "string") {
        throw ("message is not a string");
    }

    if (repeatCount * 1 === NaN) {
        throw ("repeatCount is not a number")
    }

    let messageToShow = "";
    for (let index = 0; index < repeatCount; index++) {
        messageToShow += message; 
    }
    return messageToShow;
}

console.log(repeatMessage("hello",3));

module.exports = {
    repeatMessage,
}