import bgImage from "./images/pexels-hasan-kurt-154798938-10749578.jpg"

export function aboutPage(content) {
    document.body.style.background = `
        linear-gradient(rgba(0,0,0,0.2), 
        rgba(0,0,0,0.2)),
        url(${bgImage})
        `;
    document.body.style.backgroundSize = "cover";
    content.textContent = "";
    const about = document.createElement("div");
    const aboutTitle = document.createElement("h1");
    const aboutText = document.createElement("p");

    const contact = document.createElement("div");
    const contactNum = document.createElement("p");
    const contactEmail = document.createElement("p");

    aboutTitle.textContent = "About us";
    aboutText.innerHTML = `This is a page about us. This about page specifically talks about us. 
    While this page is named about us, this page is talking about us and not about the about us page. 
    This about page also contains our contacts. We may not call it an about us and contacts page and 
    instead call it an about us page, this page provides a description about us and our contacts. <br>
    While we have considered making a different page for contacts, the developer became lazy and 
    instead decided to put the about us and contacts in one page. This is because the developer has yet to eat
    in our restaurant. This is what happens when people don't eat in our restaurant. They become incompetent
    and lazy. Just like the developer who made this site. So please come and eat in La Talove... La Talova?
    La Tavola?... please come eat in our restaurant. Thank you`;
    contactNum.textContent= "Contact: +XXXXXXXXXXX";
    contactEmail.textContent = "Email: email@thisisanemail.com";

    about.classList.add("about");

    contact.appendChild(contactNum);
    contact.appendChild(contactEmail);
    about.appendChild(aboutTitle);
    about.appendChild(aboutText);
    about.appendChild(contact);
    content.appendChild(about);
}