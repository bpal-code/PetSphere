document.getElementById("appointmentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let booking = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    pet: document.getElementById("pet").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value
  };

  let bookings = JSON.parse(localStorage.getItem("appointments")) || [];
  bookings.push(booking);

  localStorage.setItem("appointments", JSON.stringify(bookings));

  alert("Appointment booked!");
  this.reset();
});
