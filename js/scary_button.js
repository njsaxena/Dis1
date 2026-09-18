let booleanvar = false;

function boo() {

    if (booleanvar == false) {
        document.getElementById("yayks").style.display = "block";
        document.getElementById("aww").style.display = "none";
        booleanvar = true;
    } else {
        document.getElementById("yayks").style.display = "none";
        document.getElementById("aww").style.display = "block";
        booleanvar = false;
    }
}
