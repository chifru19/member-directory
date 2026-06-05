fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.getElementById('tableBody');
    const searchInput = document.getElementById('searchInput');

    function render(filter = '') {
      tableBody.innerHTML = '';
      data.filter(m => m.name.toLowerCase().includes(filter.toLowerCase()))
          .forEach(m => {
            tableBody.innerHTML += `<tr>
                <td>${m.name}</td>
                <td>${m.role}</td>
                <td>${m.country}</td>
                <td>${m.interests}</td>
                <td>${m.status}</td>
            </tr>`;
          });
    }

    searchInput.addEventListener('input', (e) => render(e.target.value));
    render();
  });