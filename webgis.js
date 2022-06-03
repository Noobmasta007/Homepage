window.onbeforeunload = function() {
    var Ans = confirm("You are about to leave this page, are you sure you want to leave!");
    if(Ans==true)
        return true;
    else
        return false;
};
