// Simulate loading screen for 5 seconds
setTimeout(function() {
  // Hide loading screen and show the form
  document.getElementById('loadingScreen').style.display = 'none';
  document.getElementById('formSection').style.display = 'block';
}, 5000);  // 5 seconds

// SweetAlert notification on form submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();  // Prevent form submission

  // Show SweetAlert notification
  Swal.fire({
      title: 'Pendaftaran Berhasil!',
      text: 'Anda telah berhasil mendaftar untuk event.',
      icon: 'success',
      confirmButtonText: 'OK'
  });

  // Simulate form submission to Formspree
  fetch('https://formspree.io/f/xdkkprln', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
      },
      body: new FormData(document.getElementById('registrationForm'))
  })
  .then(response => response.json())
  .then(data => {
      if (data.ok) {
          // Form submitted successfully, show confirmation
          Swal.fire({
              title: 'Pendaftaran Berhasil!',
              text: 'Admin akan mengirimkan pesan ke nomor anda jika anda pemenangnya!.',
              icon: 'success',
              confirmButtonText: 'OK'
          });
      } else {
          // Handle any errors
          Swal.fire({
              title: 'Terjadi Kesalahan!',
              text: 'Gagal mengirim data, coba lagi.',
              icon: 'error',
              confirmButtonText: 'OK'
          });
      }
  })
  .catch(error => {
      console.error('Error:', error);
      Swal.fire({
          title: 'Terjadi Kesalahan!',
          text: 'Gagal mengirim data, coba lagi.',
          icon: 'error',
          confirmButtonText: 'OK'
      });
  });

  // Reset form after submission
  document.getElementById('registrationForm').reset();
});
