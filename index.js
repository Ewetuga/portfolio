//trying

const menuEl= document.getElementById("menu");
const showEl= document.getElementById("show");

menuEl.addEventListener("click",()=>{
    showEl.classList.toggle("active");
    // showEl.style.display="block";
    // showEl.style.top = 100;
    // showEl.style.position= "absolute"
});

const menuLinks = document.querySelectorAll("#show a");
menuLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        showEl.classList.remove("active");
    })
})


// Add this to your index.js or create a new script file

// Smooth scrolling with offset
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").slice(1); // Get section ID
        const targetSection = document.getElementById(targetId);
        const offset = 60; // Height of the fixed header

        // Scroll to the section with offset
        window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: "smooth"
        });

        // Hide the menu after click
        if (showEl.classList.contains("show-menu")) {
            showEl.classList.remove("show-menu");
            showEl.style.display = "none";
        }
    });
});
