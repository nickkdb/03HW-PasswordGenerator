For this assignment I used HTML, JS, and CSS. For the HTML, I gave the page a title
saying "password generator", a generate button, and a textbox for the generated
password to appear in. Using CSS, I added a background image, and styled the 
text and the button. When the button is clicked, JS runs the display function, which 
runs the generate() function and then displays the returned password to the HTML
text box. The generate function begins two while loop which verifies if the entered
password length is between 8-128 characters and that atleast one character type is 
selected for generation. If these criterias are met, the loops are broken. The 
selected character types (those which == true) are added to the variable "options", which is then run in a for loop to output random characters by using math.random.
# 03HW-PasswordGenerator