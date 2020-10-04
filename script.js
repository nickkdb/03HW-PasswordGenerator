function generate() {
    var test = 0;
    var Lalpha = "abcdefghijklmnopqrstuvwxyz";
    var Ualpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var spec = "!@#$%^&*("
    var numbs = "0123456789"
    var options = ""
    var final = ""
    while (true) {
        var ans = prompt("Enter desired password length(8-128 characters");
        var a = parseInt(ans);
        if (ans == null) {
            test++;
            break;
        } else if (isNaN(a) || a < 8 || a > 128) {
            alert("invalid entry, try again!");
            continue;
        } else {
            break;
        }
    }
    while (test == 0) {
        alert("Your password must include minimum 1 of the following 4 character types")
        var numeric = confirm("Do you want numbers in your password?");
        var upper = confirm("Do you want uppercase letters in your password?");
        var lower = confirm("Do you want lowercase letters in your password?");
        var special = confirm("Do you want special characters in your password?");

        if (numeric == false && upper == false && lower == false && special == false) {
            alert("invalid! No characters selected")
            continue;
        } else {
            break;
        }
    }

    if (numeric == true) {
        options += numbs;
    }

    if (upper == true) {
        options += Ualpha;
    }

    if (lower == true) {
        options += Lalpha;
    }

    if (special == true) {
        options += spec;
    }

    for (var i = 0; i < a; i++) {
        final += options.charAt(Math.floor(Math.random() * options.length));
    }

    

    return final;
   }

   function display() {
       var outcome= generate();
        document.getElementById("result").innerHTML= outcome;
   }
