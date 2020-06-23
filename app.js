// Assignment # 21-25
//Q1.

//var frst = "John";
// var lst = "Keat";

// var frst = prompt("enter your First Name");
// var lst = prompt("Enter your Last Name");
// var fullName = "JohnKeat";
// if(frst=="John" && lst=="Keat"){
// alert("Welcome"+" "+ fullName);
// }
//OR
// var firstName = ["Shabbir"]
// var lastName = ["Ahmed"]
// for(var i=0; i<firstName.length; i++){
//     for(var x=0; x<firstName.length; x++){
// document.write("WelCome"+" "+firstName[i]+" "+lastName[x])        
//     }    
// }
 
 // Q2.
// var favorite = prompt("Your Favourite Mobile Phone Model.");
// document.write ("My favorite phone is: Samsung Galaxy S6 Edge Plus");
// document.write ("<br>Length of string:" +" "+ favorite.length);

    //Q3.

// var later = "Pakistani";
// document.write("String: Pakistani");
// document.write("<br>Index of 'n':"+later.indexOf("n"));

 // Q4.

//  var text = "Hello World";
//  document.write("Hello World");
//  document.write ("<br>Last index of 'l' :" + text.lastIndexOf("l"));

  // Q5.

// var character = "Pakistani";
// document.write("String : Pakistani");
// document.write("<br> Character at index 3 :"+ character[3]);

 // Q6.

// var frst =["John"];
// var lst = ["Keat"];
// var ful_Nam = frst.concat(lst);
// document.write(ful_Nam);

  //Q7.

// var text = "Hyderabad";
// var newText = text.replace("Hyder","Islam");
// document.write("City : Hyderabad" );
// document.write("<br> After replacement :"+ newText);

 //Q8.

//  var message = "Ali and Sami are best friends.They play cricket and football together.";
//  var repText = message.replace(/and/g,"&");
//  document.write("Result after replacement looks like :"+" "+repText);

    //Q9.

// var myString = "472";
// myString = parseInt(myString,10)
// document.write("Value : 472"+"<br>Type : string"+ "<br>Value :"+" "+ myString+ "<br> Type : number");

  //Q10.

// var userInput = prompt("Enter the dry fruit you like"); 
// userInput = userInput.toUpperCase();
// document.write("User input : peanuts"+  "<br> Upper case :" +" "+userInput);

  // Q11.

// var userData = prompt("Enter your subject");
// var firstChar = userData.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChar = userData.slice(1);
// otherChar = otherChar.toLowerCase();
// userData = firstChar+otherChar;
// document.write(userData);

    //Q12.

// var num = 35.36;
// var numStr = "3536";
// var newNum = numStr.replace(35.36, "3536")
// document.write("Number :"+" "+ num + "<br>  Result :"+" "+ newNum);

  //Q13.

// var inPut = prompt ("enter your name");
// for(var i=0;i<inPut.length; i++){
// var checkChar = inPut.charCodeAt(i);
// }
// if (checkChar>= 33 || checkChar<=44 || checkChar<=46|| checkChar<=64){
// document.write("Please enter a valid username")
// }
// else{
//   ocument.write("Operation Successful!") 
// }


//14. 

// I_put = prompt( "Welcome to ABC Bakery. What do you want to order Sir/Ma'am");
// A = ["cake", "apple","cookie","chips","patties"];
// I_put = I_put.toLowerCase();
// if(I_put== "cake"&& I_put.toLowerCase()){
// document.write("cake is available at index 0 in our bakery")
// }
// else if(I_put=="cookie"&& I_put.toLowerCase()){
// document.write("cookie is available at index 2 in our bakery");    
// }
// else if(I_put=="pastry"&& I_put.toLowerCase()){
// document.write("We are sorry , pastry is not available in our bakery")    
//     }
// else if(I_put=="patties"&& I_put.toLowerCase()){
// document.write("patties are available at index 4 in our bakery")    
//             }   

    // Q15.
    // var user =prompt("enter your password ")
    // if(user === charCodeAt > 65 ||  122 && ! num){
    // alert("Enter password: 123cmad" )
    // }else if( user === ! user === charCodeAt()){
    // alert("password can not begin with a number")
    // }else if(user.valueOf.length >6){
    // alert("password.value.length ")
    // }
    
    //Q16    

// var university = "University of Karachi";
// var split = university.split("");    
// for(var i=0; i<split.length; i++){
// document.write(split[i]+"<br>");  
// }       

   //Q17.

// var charcter = prompt("Enter a country");
// var lastChar= charcter.slice(-1);
// document.write("User input:"+" "+ charcter+ "<br> Last character of input :"+" "+lastChar);

  
//Q18.
// var word = "The quick brown fox jumps over the lazy dog";
// var found= word.toLowerCase();
// var counter = found.match(/the/g).length;
// document.write(word+"<br>"+" "+"There are"+" "+counter+" "+"occurences of word'the'");

             


//  Assignment # 26-30
//Q1.

// var posInt = +prompt("Enter a positive integer");
// var numberPosInt = Math.round(posInt);
// var numberPosInt1   = Math.floor(3.4);
// var numberPosInt2 = Math.ceil(3.4);
// document.write("number :"+" "+posInt+" "+"<br> Round of value :"+" "+ numberPosInt+"<br> floor value :"+" "+numberPosInt1+"<br> ceil value :"+" "+numberPosInt2);

//Q2.

// var NegInt = +prompt("Enter a Negative integer");
// var numberNegInt = Math.round(NegInt);
// var numberNegInt1   = Math.floor(-2.6);
// var numberNegInt2 = Math.ceil(-2.6);
// document.write("<br> number :"+" "+NegInt+" "+"<br> Round of value :"+" "+ numberNegInt+"<br> floor value :"+" "+numberNegInt1+"<br> ceil value :"+" "+numberNegInt2);

  //Q3.

// var absVal = +prompt("Enter current Temprature of your city");
// if (absVal < 0){
// document.write("The absolute value of"+" "+absVal+"is"+" "+(Math.abs(absVal)));
// }
// else if (absVal >=0){
//   document.write("The absolute value of"+" "+absVal+"is"+" "+(Math.abs(absVal)));
// }
// else
// document.write("Enter a Number");

     //Q4.
// var x = Math.floor((Math.random()*6)+1);     
// document.write("random dice value :"+" "+x);
     
     //Q5.
// var headsUser = prompt("Enter heads User");
// var tailsUser = prompt("Enter tails User");
// var toss = Math.random()*2;
// var floor = Math.floor(toss);
// var floor = Math.floor(toss);
// if(floor===0){
// document.write("random coin value :"+" "+ headsUser)
// }
// else{
// document.write("random coin value :"+" "+tailsUser)
// }

         // Q6.
//  var y = Math.floor((Math.random()*100)+1);     
//  document.write("random number between 1 and 100 :"+" "+y);

          // Q7.
// var currentWeight = prompt("Enter your weight in kgs or Kilograms.");          
// var input_par = parseInt(currentWeight);
// document.write("The weight of User is"+" "+ currentWeight);

           //Q8.
// var secr_No = +prompt("Enter your number from 1-10");
// if(secr_No==7){
// document.write("Well done! You found the number")    
// } 
// else{
// document.write("Try again")       
// }           

       // Assignment # 31-34
//Q1.       
// var currentDate = new Date();
// document.write(currentDate);

//Q2.
// var monthNames = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "Octoer", "November", "December"];
// var now = new Date();
// var theMonth = now.getMonth();
// var nameOfMonth = monthNames[theMonth];
// document.write("Current month :"+" "+nameOfMonth);

//Q3.
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// document.write("Today is"+" "+nameOfToday);

//Q4.

// var Day = prompt("Enter a day of the week");
// var funDay1 = "saturday";
// var funDay2 = "sunday";
// if
// (Day == funDay1){
// document.write("It's Fun Day");
// }
// else if
// (Day == funDay2)
// {  
// document.write("It's a Fun Day");
// }
// else
// {  
// document.write("Try another Day");
// }

//Q5.
// var d = new Date();

// if(d <=15-5-2020){
//   document.write("First fifteen days of the month")
// }
// else  
// {
// document.write("Last days of the month")  
// }

//Q6.
// var dat = new Date();
// var datMili = dat.getTime();
// var datMili_convert = datMili/1000*60
// document.write("Current Date :"+dat+"<br>Elapsed milliseconds since january 1, 1970 :"+" "+datMili_convert);

//Q7.
// var test = new Date();
// var hrs = test.getHours();
// if(hrs >=12){
// document.write("It's PM");
// }
// else if(hrs <= 12){
// document.write("It's AM");
// }

//Q8.
// var laterDate = new Date();
//  laterDate.setMonth(11);
//  laterDate.setDate(31);
//  document.write("Later date :"+" "+laterDate);

//Q9.
// var today = new Date("April 25, 2020");
// var doomsday = new Date("June 18, 2015");
// var msToday = today.getTime();
// var msDoomsday = doomsday.getTime();
// var msDiff =  msToday-msDoomsday ;
// var dDiff = msDiff / (1000 * 60 * 60 * 24);
// alert(dDiff+" "+ "days have been passed since since 1st Ramadan, 2015")

//Q10.
// var referenceDate = new Date();
// var beginDate = new Date("January 01, 2015");
// var msreferenceDate = referenceDate.getTime();
// var msbeginDate = beginDate.getTime();
// var msDiffSec =  msreferenceDate-msbeginDate ;
// document.write("On reference date"+" "+referenceDate+" "+msDiffSec+" "+"seconds had passed since beginning of 2015");

//Q11.
// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// var newCurrent = currentHour-1;
// document.write("Current date :"+" "+currentDate+" <br>"+"1 hour ago, it was"+" "+newCurrent);

//Q12.
// var recentDate = new Date();
// var previousDate = new Date("January 01, 1920");
// document.write("Current date :"+" "+recentDate+" <br>"+"100 years back, it was"+" "+previousDate);

//Q13.
// var dob =new Date (prompt("Enter your date of birth","Apr 26,1983"));
// var dobMili = dob.getTime();
// var today = new Date();
// var todayMili = today.getTime();
// var diff = todayMili-dobMili;
// var accuAge = Math.floor(diff/(1000*60*60*24*30*12));
// document.write("Your age is"+accuAge+"<br> Your birth year is"+dob.getFullYear());

//Q14.

// var mnth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
// var d = new Date("June 22, 2020");
// var C = mnth.slice(5,6);
// var Units = 410;
// var Charges = 16;
// var latePymnt =350;
// var netAmnt = Units*Charges;
// var grossAmnt = netAmnt+latePymnt;
// document.write("<h1>K-Electric Bill</h1>")
// document.write("Customer Name : Saadullah Khan"+"<br> Month :"+" "+C+"<br> Number of Units :"+Units+"<br> Charges per Unit :"+Charges+"<br> Net Amount Payable (with in Due Date) :"+netAmnt+"<br> Late Payment SurCharge :"+latePymnt+"<br> Gross Amount Payable (after Due Date) :"+grossAmnt)


//Assignment 35-38
//Q1.
// function tellTime() {
// var now = new Date();
// alert(now) 
// }
// tellTime();

//Q2.
// function greetUser() {
// alert("Hello! AnilaYousaf");
// }
// greetUser("Hello! AnilaYousaf.");

//Q3.
// function add(x,y){
// return x+y  
// }
// document.write(add(10,5));
// document.write("<br>"+add(7,9));
// document.write("<br>"+add(-6,6));

//Q4.
// function calculate(num1,opr,num2){
// if(opr==="+"){
// return num1+num2  
// }  

// else if(opr==="-"){
//   return num1-num2  
//   }  
//  else if(opr==="*"){
//  return num1*num2  
//   }  
// else{
// return "Incorrect operator!"  
// }
// }
// var result1 = calculate(0,"+",7);
// var result2 = calculate(10,"*",3);
// var result3 = calculate(70,"/",7);
// document.write(result1);
// document.write("<br>"+result2);
// document.write("<br>"+result3);

//Q5.
// function square(b){
// return (b **2)  
// }
// var result = square(9,2);
// document.write(result);

//Q6.
// function factorial(num){
//   if (num==0||num==1){
// return 1;    
//   }
// return factorial(num-1)*num;  
// }
// var output = factorial(5);
// document.write(output);

//Q7.
// function count(){
// for (var i=1; i<=20; i++){
// document.write(i+"<br>");  
// }  
// } 
// count();

//Q8.

// function pythagorous(sideA, sideB){
//   return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
// }
// console.log(pythagorous(6, 8));

//Q9.1.
// function Area (w,h){
// return w*h  
// }
// var A = Area(6,7);
// document.write(A);
//2.
// function permetr(w,h=7){
// return w*h
// }
// document.write(permetr(8,6));

//Q10.
// function checkStr(str){
// var str1 = str.split("").reverse().join("");
// if (str== str1){
// return true;  
// }
// else
// return false;
// }
// document.write(checkStr("radar"));

//Q11.

// function convert1stletter (letterOne) 
// {
// return letterOne.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();});
//    }
// document.writeln(convert1stletter("the quick brown fox"));

//Q12.


// var string = "Web Development Tutorial";
// function findLongest(str){
//   var arr = str.split(' ');
//   var desp = arr[0];
//   console.log(desp);
//   for(var i = 1; i < arr.length; i++){
//     desp.length < arr[i].length ? desp = arr[i] : desp;
//   }
//   return desp;
// }
// document.write(findLongest(string));


//Q13.
// function occurencesOfLetter(str, letter)
// {
// var letter1 = 0;
// for (var position =0; position<str.length;position++)  
// {
// if(str.charAt(position)==letter){
// letter1 +=1;
//  }
// }
// return letter;
// }
// document.write(occurencesOfLetter("Web and Mobile Hybrid App","b"));

//Q14.
// function calcCircumference()
// {
// var radius = +prompt('enter radius');
// var circumference = 2*3.14*radius;
// alert(circumference);  
// }
// return calcCircumference();


// function calcArea()
// {
//   var radius = +prompt('enter radius');
//   var Area = 2*3.14*radius*radius;
//   alert(Area);  
//   }
//   return Area();



