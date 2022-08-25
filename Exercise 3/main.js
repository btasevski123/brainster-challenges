const inputFrom = document.querySelector("#from");
const inputTo = document.querySelector("#to");
const inputSubject = document.querySelector("#subject");
const inputMessage = document.querySelector("#message");
const button = document.querySelector(".btn");


let promptFrom = prompt("The message is from");
let promptTo = prompt("The message is to");
let promptSubject = prompt("Enter the subject");
let promptMessage = prompt("Write the message");




class Form {
    constructor(_from, _to, _subject, _message) {
        this.from = _from;
        this.to = _to;
        this.subject = _subject;
        this.message = _message;
    };

    fillInputs() {
        
        inputFrom.value = this.from;
        inputTo.value = this.to;
        inputSubject.value = this.subject;
        inputMessage.value = this.message;

    };

    displayMethod() {
        alert(`The message is from: ${this.from}  To: ${this.to} The subject is: ${this.subject} The message is: ${this.message} `)
    };
}

let newForm = new Form(promptFrom, promptTo, promptSubject, promptMessage);
newForm.fillInputs();
newForm.displayMethod();




