 
 let forText = "";
 for (let i = 5; i <= 15; i++) {
     forText += i + " ";
 }
 document.getElementById("forLoop").innerText = forText;

 
 let j = 5;
 let whileText = "";
 while (j <= 15) {
     whileText += j + " ";
     j++;
 }
 document.getElementById("whileLoop").innerText = whileText;


 let k = 5;
 let doWhileText = "";
 do {
     doWhileText += k + " ";
     k++;
 } while (k <= 15);
 document.getElementById("doWhileLoop").innerText = doWhileText;