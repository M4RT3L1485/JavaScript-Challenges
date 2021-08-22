//Challenge 1: Your Age in days
function ageInDays (){
    var   birthYear = prompt("What year you born... Good Friend?");
    var inDays  = (2021 - birthYear)*365;

    /**
     When we need to show a result normaly we use the consle, but when we need to show the
     result in html we use DOM (Document Object Module) to put in the page

            create --> Which HTML element what we are going to create
            create textnode --> Text element we want to create
    
     To put the text we have just created we are going to put it in the next line of code

            set attribute --> puts HTML tag we created an atribute. The first parameter
            is to put the name of the attribute and the second one yo put the equal of 
            the attribute 

            document.getElementById --> search the id of the HTML tag and put inside the HTML
            tag that we created in create element

            Note: We put append child to put inside the tag 
    **/

    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("You are " + inDays + " days old"); 

    h1.setAttribute("id","inDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset(){

    //Remove --> Make the elemination of the HTML tag we created in the previously function
    document.getElementById("inDays").remove();
}

//Challenge 2: Halo generator
function haloGenerator(){
    var img = document.createElement("img");
    var div = document.getElementById("flex-halo-generator");
    img.setAttribute("class","halo-image");
    img.src = "https://sm.ign.com/ign_latam/news/h/halo-infin/halo-infinite-no-plans-to-delay-until-2022-remove-xbox-one-s_d15d.jpg";
    div.appendChild(img);
}

//Challenge 3: Rock, Scissors, Paper
function rpsGame(yourChoice){
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomRps());

    result = decideWinner(humanChoice,botChoice);
    message= finalMessage(result);
    rpsForntEnd(yourChoice.id,botChoice, message); 
}

function randomRps(){

    /* 
        The bot should be able to choice 3 alternatives, function returns an int number
        given by a random number 
    */

    return  Math.floor(Math.random() * 3);
}

function numberToChoice(number){

    /* 
        The robot recive the number of the decission makes in the previous function
        and the pass to a string
        0 --> rock
        1 --> scissors
        2 --> paper
    */

    return ["rock","scissors","paper"][number];
}

function decideWinner (yourChoice,botChoice){
    var rpsDatabase = {
        "rock":{"scissors": 1,"rock": 0.5, "paper": 0},
        "paper": {"rock":1, "paper":0.5 , "scissors":0 },
        "scissors": {"paper":1, "scissors":0.5 , "rock":0}
    }

    var yourScore = rpsDatabase[yourChoice][botChoice];
    var botScore = rpsDatabase[botChoice][yourChoice];

    return [yourScore,botScore];
};

function finalMessage([yourScore,botScore]){
    if(yourScore === 0){
        return {"message": "You Lost", "color": "red"};
    }
    else if(yourScore === 0.5){
        return {"message": "You Tied", "color": "yellow"};
    }
    else{
        return {"message": "You Won", "color": "green"};
    }
}

function rpsForntEnd(humanImageChoice, botImageChoice, finalMessage){
    var imageDatabase = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors":document.getElementById("scissors").src
    };
    
    
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();
    

    var humanDiv= document.createElement('div');
    humanDiv.setAttribute('id', 'humanDiv');
    var botDiv= document.createElement('div');
    botDiv.setAttribute('id', 'botDiv');
    var messageDiv= document.createElement('div');
    messageDiv.setAttribute('id', 'messageDiv');

    humanDiv.innerHTML="<img src ='" + imageDatabase[humanImageChoice] + "' height = 150px width=150px style= box-shadow: 0px 10px 50px rgba(37,50,233,1);>";
    messageDiv.innerHTML= "<h1 style:'color: " + finalMessage["color"] + "; font-size: 60px; padding: 30px;'>" + finalMessage["message"] + "</h1>";
    botDiv.innerHTML="<img src ='" + imageDatabase[botImageChoice] + "' height = 150 width=150 style= box-shadow: 0px 10px 50px rgba(243,38,24,1);>";

    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

function rpsReset(){
    document.getElementById('humanDiv').remove();
    document.getElementById('botDiv').remove();
    document.getElementById('messageDiv').remove();


    var rock = document.createElement('img');
    var paper = document.createElement('img');
    var scissors = document.createElement('img');

    rock.setAttribute('id','rock');
    rock.src= "https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-yellow-hard-pattern-cartoon-stone-image_1200019.jpg";
    rock.alt= 'rock';

    paper.setAttribute('id','paper');
    paper.src = "https://www.pngitem.com/pimgs/m/177-1776943_stack-of-white-paper-drawing-paper-clip-art.png";
    paper.alt = 'paper';

    scissors.setAttribute('id','scissors');
    scissors.src = "https://www.nicepng.com/png/detail/24-241170_scissors-drawing.png";
    scissors.alt = 'scissors';

    document.getElementById('flex-box-rps-div').appendChild(rock);
    document.getElementById('flex-box-rps-div').appendChild(scissors);
    document.getElementById('flex-box-rps-div').appendChild(paper);

    document.getElementById('paper').setAttribute('onclick','rpsGame(this)');
    document.getElementById('rock').setAttribute('onclick','rpsGame(this)');
    document.getElementById('scissors').setAttribute('onclick','rpsGame(this)');
}

//Challenge 4 change the color of all buttons

/**
This instrucction getElementsByTagName returns an array whith evry HTML tag
that a have the element button
**/

var all_buttons = document.getElementsByTagName('button');

function buttonColorChange(buttonThingy){
    if(buttonThingy.value === 'red'){
        buttonsRed();
    }
    else if(buttonThingy.value === 'green'){
        buttonsGreen();
    }
    else if(buttonThingy.value === 'yellow'){
        buttonColorYellow();
    }
}

function buttonsRed(){
    for(let i =0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for(let i =0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorYellow(){
    for(let i =0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }
}