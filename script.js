function afficheMessage() {
    alert("Bienvenue sur ma page ma page web personnell ! je suis information.")

}

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if
        (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "mode clair";
    } else {
        themeBtn.textContent = "mode sombre";
    }
})

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.reportValidity()) {
            return;
        }

        const formData = new FormData(contactForm);
        const name = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const message = String(formData.get("message") || "").trim();

        if (!name || !email || !message) {
            formStatus.textContent = "Remplis les trois champs avant de continuer.";
            return;
        }

        const subject = encodeURIComponent("Message de " + name);
        const body = encodeURIComponent("Nom : " + name + "\nE-mail : " + email + "\n\n" + message);
        const mailtoLink = "mailto:calvinfakacalvin@gmail.com?subject=" + subject + "&body=" + body;

        formStatus.textContent = "Le brouillon e-mail a été demandé. Si rien ne s'ouvre, copie les informations du formulaire et écris à calvinfakacalvin@gmail.com depuis ta messagerie.";
        window.location.href = mailtoLink;
    });
}