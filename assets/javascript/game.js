
//  here are the wins and loses , and the box with a random number 
var winner = 0;
var losser = 0;
var oneMore = 0;


//  random number generated for the pictures
var pic1= Math.floor(Math.random()*11+1);
var pic2= Math.floor(Math.random()*11+1);
var pic3= Math.floor(Math.random()*11+1);
var pic4= Math.floor(Math.random()*11+1);  

var random = Math.floor(Math.random()*101+19);
$('#greenBox').text(random);

function reset(){
  random = Math.floor(Math.random()*101+19);
  $('#greenBox').text(random);
  pic1 = Math.floor(Math.random()*11+1);
  pci2 = Math.floor(Math.random()*11+1);
  pic3 = Math.floor(Math.random()*11+1);
  pic4 = Math.floor(Math.random()*11+1);
  oneMore = 0;
  $('#oneMore').text(oneMore);
}
function yes(){
  alert("You won!");
    winner++; 
    $('#winner').text(winner);
    reset();
}
function lost(){
    alert ("You lose!");
      losser++;
      $('#losser').text(losser);
      reset();
    }

$('#firstPhoto').on ('click', function(){
    oneMore = oneMore + pic1;
    $('#oneMore').text(oneMore);
    console.log("New userTotal= " + oneMore);
          //sets win/lose conditions
        if (oneMore === random){
          yes();
        }
        else if ( oneMore > random){
          lost();
          reset();
        }   
  })  
  $('#secondPhoto').on ('click', function(){
    oneMore = oneMore + pic2;
    $('#oneMore').text(oneMore);
    console.log("New userTotal= " + oneMore);
          //sets win/lose conditions
        if (oneMore === random){
          yes();
        }
        else if ( oneMore > random){
          lost();
        }   
  })  
  $('#thirdPhoto').on ('click', function(){
    oneMore = oneMore + pic3;
    $('#oneMore').text(oneMore);
    console.log("New userTotal= " + oneMore);
          //sets win/lose conditions
        if (oneMore === random){
          yes();
        }
        else if ( oneMore > random){
          lost();
        }   
  })  
  $('#fourthPhoto').on ('click', function(){
    oneMore = oneMore + pic4;
    $('#oneMore').text(oneMore);
    console.log("New userTotal= " + oneMore);
          //sets win/lose conditions
        if (oneMore === random){
          yes();
        }
        else if ( oneMore > random){
          lost();
        }   
  })  


$('#winner').text(winner);
$('#losser').text(losser);
$('#oneMore').text(oneMore);
$('#firstPhoto').text(oneMore);


