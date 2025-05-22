document.addEventListener('DOMContentLoaded', () => {
    const chillers = [
        { id: 1, link: 'LINK_CHILLER_1' },
        { id: 2, link: 'LINK_CHILLER_2' },
        { id: 3, link: 'chillers/ch1/index.html' },
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