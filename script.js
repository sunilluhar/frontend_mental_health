document.addEventListener('DOMContentLoaded', function() {
  const moodForm = document.getElementById('moodForm');
  const callDoctorForm = document.getElementById('callDoctorForm');

  moodForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const mood = document.getElementById('mood').value;
      const thoughts = document.getElementById('thoughts').value;
      console.log(`Mood: ${mood}, Thoughts: ${thoughts}`);
      moodForm.reset();
  });

  callDoctorForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;

      // Normally you would send this information to a backend server to handle the call request
      // For this example, we'll just log the details
      console.log(`Name: ${name}, Phone: ${phone}`);

      // Replace this with actual functionality to call the doctor
      alert(`Your request for a call from a doctor at ${phone} has been submitted. Please await a response.`);

      callDoctorForm.reset();
  });
});
