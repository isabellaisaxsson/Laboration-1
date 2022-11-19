var Y= "Yes";
var N= "No";
alert("Welcome to the world called Mushroom World!");

alert("My name is Lulu and I am an elf");

var questionName = window.prompt("What is your name?");

alert("Welcome " + questionName + "!");

alert("Oh hey Peach! How are you today, this is my new friend " + questionName);

var questionPeach = prompt("Would you like to talk to Peach? Yes Or No");

if(questionPeach == Y){

    var questionY = prompt("Peach talking: Hi " + questionName + " my name is Peach I have lost my friend Yoshi! Could you help me find him? Yes or No");

}

else if(questionPeach == N){

    alert("Oh Okay " + questionName + " we don't need to talk to her");

    var questionN = prompt("Oh no I just got these bad news! Bowser has stolen Marios magic hat! Could you help me with this? Yes Or No");
    
    if(questionN = Y){

    }

    else(questionN = N){

        alert("Okay! Well I have to go goodbye " + questionName + "!");
    }
}

else{
    alert("Please answer Yes or No!")
}
