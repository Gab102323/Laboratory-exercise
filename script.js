document.getElementById("showMessageBtn").addEventListener("click", function() {
    var message = document.getElementById("personalMessage");
    message.classList.remove("hidden");
    message.classList.add("visible");
});

function displayPersonalMessage() {
    document.write("<h2 style='color: #2e8b57; text-align: center;'>Hi, Good day for everyone!</h2>");
    document.write("<p style='color: #ff69b4; font-size: 1.2em; text-align: center;'>");
    document.write("You have the power to achieve anything you set your mind to. ");
    document.write("Believe in yourself and embrace the journey ahead.");
}

displayPersonalMessage();