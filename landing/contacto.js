document.getElementById("close-form").addEventListener("click", function() {
    document.getElementById("form-popup").style.display = "none";
    document.getElementById("form-popup").style.opacity = 0;
    setTimeout(function() {
        document.getElementById("form-popup").remove();
    }, 500);
});

document.getElementById("open-form").addEventListener("click", function() {
    document.getElementById("form-popup").style.display = "block";
    document.getElementById("form-popup").style.opacity = 0;
    setTimeout(function() {
        document.getElementById("form-popup").style.opacity = 1;
    }, 500);
});