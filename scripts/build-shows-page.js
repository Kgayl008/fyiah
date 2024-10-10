const showsArray = [
    {
        id: "1",
        date: new Date(2024, 10, 12).getTime(),
        place: "Miami Theater",
        location: "Miami, FL"
    },
    {
        id: "2",
        date: new Date(2024, 11, 5).getTime(),
        place: "Orlando Arena",
        location: "Orlando, FL"
    },
    {
        id: "3",
        date: new Date(2025, 0, 18).getTime(),
        place: "Tampa Bay Stadium",
        location: "Tampa, FL"
    },
    {
        id: "4",
        date: new Date(2025, 1, 10).getTime(),
        place: "Jacksonville Civic Center",
        location: "Jacksonville, FL"
    },
    {
        id: "5",
        date: new Date(2025, 2, 22).getTime(), // March 22, 2025
        place: "Sunrise Amphitheater",
        location: "Sunrise, FL"
    },
];

const showsSection = document.querySelector("#shows__section");
showsSection.classList.add("shows__section");

// Loop through the showsArray and create the show elements
for (let i = 0; i < showsArray.length; i++) {
    const show = showsArray[i];

    // Parent container for each show
    const container = document.createElement("div");
    container.classList.add("container");
    showsSection.appendChild(container);
    container.addEventListener("mousedown", () => {
        container.classList.toggle("selected");
    });

    // Date container
    const dateContainer = document.createElement("div");
    dateContainer.classList.add("container__dates");
    container.appendChild(dateContainer);

    const dateTitle = document.createElement("p");
    dateTitle.innerHTML = "DATE";
    dateContainer.appendChild(dateTitle);
    dateTitle.classList.add("shows__date-title");

    const dateContent = document.createElement("p");
    dateContent.innerHTML = convertDate(show.date);
    dateContainer.appendChild(dateContent);
    dateContent.classList.add("shows__dates");

    // Venue container
    const venueContainer = document.createElement("div");
    venueContainer.classList.add("container__venue");
    container.appendChild(venueContainer);

    const venueTitle = document.createElement("p");
    venueTitle.innerHTML = "VENUE";
    venueContainer.appendChild(venueTitle);
    venueTitle.classList.add("shows__venue-title");

    const venueContent = document.createElement("p");
    venueContent.innerHTML = show.place;
    venueContainer.appendChild(venueContent);
    venueContent.classList.add("shows__venue-content");

    // Location container
    const locationContainer = document.createElement("div");
    locationContainer.classList.add("container__location");
    container.appendChild(locationContainer);

    const locationTitle = document.createElement("p");
    locationTitle.innerHTML = "LOCATION";
    locationContainer.appendChild(locationTitle);
    locationTitle.classList.add("shows__location-title");

    const locationContent = document.createElement("p");
    locationContent.innerHTML = show.location;
    locationContainer.appendChild(locationContent);
    locationContent.classList.add("shows__location-content");

    // Buy Tickets button
const buyButtonContainer = document.createElement("div");
container.appendChild(buyButtonContainer);

// Create an anchor element
const buyTicketLink = document.createElement("a");
buyTicketLink.href = "https://www.bandsintown.com/a/15561233-fyiah?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar";
buyTicketLink.target = "_blank"; // Opens the link in a new tab
buyTicketLink.classList.add("shows__button"); // Add any relevant classes

// Create the button
const buyTicketButton = document.createElement("button");
buyTicketButton.innerHTML = "BUY TICKETS";
buyTicketButton.classList.add("shows__button");

// Append the button to the anchor
buyTicketLink.appendChild(buyTicketButton);

// Append the anchor to the button container
buyButtonContainer.appendChild(buyTicketLink);
}

// Function to format dates
function convertDate(timestamp) {
    const date = new Date(timestamp);
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

//Send Email
const contactForm = document.getElementById('contact__form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_9mfzb83','template_yjb4y9h','#contact__form','QxIVM4LRh4s1DAc3E')
    .then(()=>{
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
    }, () =>{
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)