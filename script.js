// ดึงข้อมูลจากไฟล์ JSON
fetch('books.json')
  .then(response => response.json())
  .then(data => {
    const bookGrid = document.getElementById('bookGrid');
    // แสดงผลข้อมูล 5 รายการแรก
    data.slice(0, 5).forEach(book => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${book.Cover}" alt="${book.Title}">
        <h3>${book.Title}</h3>
        <p>${book.Description}</p>
        <p><strong>Author:</strong> ${book.Author}</p>
        <p><strong>Price:</strong> ${book.Price}</p>
      `;
      bookGrid.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading books:', error));
