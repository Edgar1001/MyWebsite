const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    fetch('/submit', {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => res.json())
    .then((data) => {
        result.innerHTML = `Thank you, ${data.name}`;
    });
});
