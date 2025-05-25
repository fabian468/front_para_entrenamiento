document.addEventListener('DOMContentLoaded', () => {
    fetch('https://back-para-entrenamiento.onrender.com/api/upload')
        .then(res => res.json())
        .then(data => {
            console.log('Datos cargados:', data)
            renderTable(data)
        })

        .catch(err => console.error('Error al cargar los datos:', err));
});

function renderTable(entries) {
    const tbody = document.querySelector('#entries-table tbody');
    entries.forEach(entry => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${entry.episode}</td>
            <td>${entry.reward.toFixed(2)}</td>
            <td>${entry.loss.toFixed(2)}</td>
            <td>${entry.profitUSD.toFixed(2)}</td>
            <td>${entry.epsilon.toFixed(4)}</td>
            <td>${entry.drawdown.toFixed(2)}</td>
            <td>${entry.hitFrequency.toFixed(2)}%</td>
            <td>${entry.modelPath ? `<a href="${entry.modelPath}" target="_blank">Ver</a>` : 'N/A'}</td>
            <td>${entry.graphImages.map(img => `<img src="${img}" alt="img">`).join(' ')}</td>
            <td>${new Date(entry.timestamp).toLocaleString()}</td>
        `;

        tbody.appendChild(row);
    });
}
