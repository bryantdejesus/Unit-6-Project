$(".button").click(function(){
  var message1= $(".input1") .val();
//  var message2= $(".input2") .val();
  //var message3=$(".input3") .val();
   
  
  var message2= parseInt($(".input2") .val());
  
  var message3=parseInt($(".input3") .val());
  
  
  console.log(message1);
  console.log(message2);
  console.log(message3);
  console.log(message2*message3*(2050-2019));
  var result= message2* message3*(2050-2019);
  var finalMessage = "from the year 2019 to 2050 " + message1 + " will spend   " + result;
  console.log(finalMessage);
   $(".results").append("<p>"+ finalMessage + "</p>");
   
});