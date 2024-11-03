AOS.init({
    duration: 1000, // Define a duração das animações
    once: true // Anima apenas uma vez ao rolar a tela
 });

function toggleText()
{
    var content = document.getElementById("content");
    if(content.style.display === "none")
    {
       content.style.display ="block";

    } else{
        content.style.display = "none";
    }
}

window.addEventListener('scroll', ()=>{
    const paralax = document.querySelector('.paralax');
    paralax.style.backgroundPositionY = -window.scrollY*0.3+"px";
});

document.querySelectorAll('nav a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});
 
document.getElementById("feedbackForm").addEventListener("submit", function(event)
{
    event.preventDefault();
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    if(name && email && message){
        document.getElementById("feedbackMessage").innerText="Obrigado pelo seu feedback 💕😍";
        document.getElementById("feedbackMessage").reset();
    } else{
        document.getElementById("feedbackMessage").innerText= "Por favor, prencha todos os campos.😥"
    }
});
    