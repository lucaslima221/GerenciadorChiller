document.addEventListener('DOMContentLoaded', () => {
    const chillers = [
        { id: 1, link: 'chillers/ch1/index.html' },
        { id: 2, link: 'chillers/ch2/index.html' },
        { id: 3, link: 'chillers/ch3/index.html' },
        // { id: 4, link: 'LINK_CHILLER_4' }
    ];

    const grid = document.querySelector('.chillers-grid');

    chillers.forEach(chiller => {
        const card = document.createElement('a');
        card.className = 'chiller-card';
        card.href = chiller.link;
        card.target = '_blank';
        card.innerHTML = `
            <h2>CHILLER ${chiller.id}</h2>
            <p>Acessar Sistema de Controle</p>
        `;
        
        grid.appendChild(card);
    });
});