document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app_container');

    if (appContainer) {
        // Carica la schermata del menu principale all'avvio
        fetch('main_menu/struttura_main_menu.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Errore nel caricamento del file: ${response.statusText}`);
                }
                return response.text();
            })
            .then(html => {
                appContainer.innerHTML = html;
                console.log('Menu principale caricato con successo.');
            })
            .catch(error => {
                console.error('Impossibile caricare il menu principale:', error);
                appContainer.innerHTML = '<p style="color: red; text-align: center;">Errore nel caricamento del menu principale.</p>';
            });
    } else {
        console.error('Elemento "app_container" non trovato.');
    }
});
