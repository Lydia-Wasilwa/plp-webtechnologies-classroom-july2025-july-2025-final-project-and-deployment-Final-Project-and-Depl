document.addEventListener("DOMContentLoaded", () => {
  const text = "Hi, I'm Lydia Wasilwa";
  let i = 0;
  const speed = 100; // typing speed in ms

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});
// Contact Form Validation
 const contactForm = document.querySelector(".contact-form");
 if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");
      let errors = [];

      // Name validation
      if (name.value.trim() === "") {
        errors.push("Name is required");
      }

      // Email validation
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.value.match(emailPattern)) {
        errors.push("Enter a valid email address");
      }

      // Message validation
      if (message.value.trim().length < 10) {
        errors.push("Message should be at least 10 characters");
      }

      // Display result
      if (errors.length > 0) {
        alert("Please fix the following:\n- " + errors.join("\n- "));
      } else {
        alert("Thank you, " + name.value + "! Your message has been sent.");
        contactForm.reset();
      }
    });
}

