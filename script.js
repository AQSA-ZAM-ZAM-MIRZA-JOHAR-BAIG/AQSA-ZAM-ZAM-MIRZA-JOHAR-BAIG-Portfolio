console.log("Portfolio loaded successfully");

document.querySelectorAll(".links a").forEach(link => {

link.addEventListener("click", () => {
console.log("Profile link opened");
});

});