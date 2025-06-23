 const scriptURL = 'https://script.google.com/macros/s/AKfycbzHRNPRrymPTvMJZuT52MmixVmb4d88uO0YE8lUTAXMnijHrfnaftnWokG5XqiKwbap/exec'; // Replace with actual URL

  function submitBooking(e) {
    e.preventDefault();

    const data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      date: document.getElementById('date').value,
	  sati: document.getElementById('sati').value,
      car: document.getElementById('car').value,
      notes: document.getElementById('notes').value,
	  broj: document.getElementById('broj').value,
    };

    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(response => {
      alert("Hvala vam! Poslali ste upit za vozilo.");
      document.querySelector('.contact-form').reset();
    })
    .catch(err => alert("Error: " + err));
  }

  function bookCar(model) {
    document.getElementById('car').value = model;
    window.scrollTo({ top: document.querySelector('.contact-form').offsetTop - 100, behavior: 'smooth' });
  }

  flatpickr("#date", {
    mode: "range",
    minDate: "today",
    dateFormat: "d-m-Y",
    /*disable: [
        function(date) {
            // disable every multiple of 10
            return !(date.getDate() % 10);
        }
    ]*/
});
flatpickr("#sati", {
	 enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
	time_24hr: true
})

/*function submitBooking(event) {
  event.preventDefault();
  const spinner = document.getElementById("form-spinner");
  spinner.style.display = "block";

  // Simulate a short wait (e.g., form submission)
  setTimeout(() => {
    spinner.style.display = "none";
    document.getElementById("thankyou-modal").style.display = "flex";
  }, 2000);
}

function closeModal() {
  document.getElementById("thankyou-modal").style.display = "none";
}*/

/*Header toggle*/
  document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("active");
  });


