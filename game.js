var Y= "Yes";
var N= "No";
alert("Welcome to the world called Mushroom World!");

alert("My name is Lulu and I am an elf");

var questionName = window.prompt("What is your name?");

alert("Lulu - Welcome " + questionName + "!");

alert("Lulu - Oh hey Peach! How are you today, this is my new friend " + questionName);

var questionPeach = prompt("Would you like to talk to Peach? Yes Or No");

if(questionPeach == Y){

    var questionY = prompt("Peach - Hi " + questionName + " my name is Peach! How are you today? good or bad");

    if(questionY == "good"){

        alert("Peach - Oh good! Well I hope that you two have an amazing day");

        alert("Goodbye " + questionName + "!")

    }

    else if(questionY == "bad"){

        alert("Peach - Oh no! Well I hope that your day gets much better!");

        alert("Goodbye " + questionName + "!")

    }

    else{

        alert("Please answer with good or bad")

    }

}

else if(questionPeach == N) {

    alert("Lulu - Oh Okay " + questionName + " we don't need to talk to her");

    var questionN = prompt("Oh no I just got these bad news! Bowser has stolen Marios magic hat! Could you help me with this? Yes Or No");
    
    if(questionN == Y){

        alert("Lulu - Mario said that Bowser ran in the direction of his Evil Tower");
        var questionMario = prompt("Outside of the Evil Tower: Lulu - the door is locked! How are we supposed to open it? pick up axe or pick up scissor")

        if(questionMario == "pick up axe"){

            alert("Lulu - Hit it against the door!");

            var questionDoor = prompt("Yes! We did it! Now we have to be very quiet, okay? Yes or No");



            if(questionDoor == Y){
                alert("Lulu - Thank you " + questionName + "! Now let's go upstairs");

                var questionWeapon = prompt("Outside of Bowsers room: Lulu - So I have my powers but which weapon do you want? sword or arrows");



                if(questionWeapon == "sword"){

                    var questionFight = prompt("Inside of Bowsers room: stab Bowser or hit Bowser with the sword");



                    if(questionFight == "stab Bowser"){

                        alert("Lulu - Bowser is down! Here is Marios hat");

                        alert("Lulu - Thank you for the help " + questionName + "! Goodbye, hope I see you soon!");

                    }            

                    else if(questionFight == "hit Bowser with the sword"){

                        alert("Lulu - Bowser is almost down! Here take the hat!")

                        alert("Lulu - Thank you for the help " + questionName + "! Goodbye, hope I see you soon!");
                    }

                    else{

                        alert("Please answer with stab Bowser or hit Bowser with the sword")

                    }
                }




                else if(questionWeapon == "arrow"){

                    var questionFightArrow = prompt("Inside of Bowsers room: hit Bowser with arrow or stab Bowser with arrow");

                    if(questionFight == "hit Bowser"){

                        alert("Lulu - Bowser is down! Here is Marios hat");

                        alert("Lulu - Thank you for the help " + questionName + "! Goodbye, hope I see you soon!");

                    }

                    else if(questionFight == "stab Bowser"){

                        alert("Lulu - Bowser is almost down! Here take the hat!")

                        alert("Lulu - Thank you for the help " + questionName + "! Goodbye, hope I see you soon!");
                    }
            }

                else{
                    
                    alert("Please answer with sword or arrows")
                        
                }
        }


    else if(questionDoor == N){

        alert("Oh no! Bowser has caught us! Now we will never get back Marios hat!");

        alert("GAME OVER")

    }

    else{

            alert("Please answer with Yes or No")
        
    }

}
    

    else if(questionMario == "pick up scissor"){

        alert("Lulu - Try to hit it against the door!");

        alert("Lulu - Well that didn't word");

        alert("GAME OVER");

    }

}


    else if(questionN == N){

        alert("Okay! Well I have to go goodbye " + questionName + "!");
    }

}
    

else {
    alert("Please answer Yes or No!")

}
