// document.addEventListener('DOMContentLoaded', function() {
//     const sloganSection = document.querySelector('.slogan');

//     sloganSection.addEventListener('click', function() {
//         // Randomly generate a hex color code
//         const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

//         // Change the background color of the slogan section
//         sloganSection.style.backgroundColor = randomColor;
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const galleryImages = document.querySelectorAll('.gallery img');
//     const lightbox = document.createElement('div');
//     lightbox.classList.add('lightbox');

//     galleryImages.forEach(image => {
//       image.addEventListener('click', function() {
//         const imageClone = image.cloneNode();
//         lightbox.innerHTML = '';
//         lightbox.appendChild(imageClone);
//         lightbox.style.display = 'flex';
//       });
//     });

//     lightbox.addEventListener('click', function() {
//       lightbox.style.display = 'none';
//     });

//     document.body.appendChild(lightbox);
//   });

const tableRows = document.querySelectorAll('.table tbody tr');

    tableRows.forEach((row) => {
      row.addEventListener('click', () => {
        alert(`You clicked on row ${row.cells[0].innerText}`);
      });
    });