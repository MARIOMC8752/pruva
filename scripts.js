// scripts.js
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('toggle-icon');
    if (document.body.classList.contains('dark-mode')) {
        icon.src = 'https://img.icons8.com/ios-filled/50/ffffff/sun.png';
    } else {
        icon.src = 'https://img.icons8.com/ios-filled/50/000000/moon-symbol.png';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarEncantamientos();
    convertir();
});

function mostrarEncantamientos() {
    const item = document.getElementById('item').value;
    let encantamientos = '';

    switch (item) {
        case 'espada':
            encantamientos = `
                <ul>
                    <li>Filo (V)</li>
                    <li>Aspecto Ígneo (II)</li>
                    <li>Botín (III)</li>
                    <li>Empuje (II)</li>
                    <li>Irrompibilidad (III)</li>
                </ul>`;
            break;
        case 'hacha':
            encantamientos = `
                <ul>
                    <li>Filo (V)</li>
                    <li>Aspecto Ígneo (II)</li>
                    <li>Botín (III)</li>
                    <li>Irrompibilidad (III)</li>
                </ul>`;
            break;
        case 'pico':
            encantamientos = `
                <ul>
                    <li>Eficiencia (V)</li>
                    <li>Toque de Seda (I)</li>
                    <li>Fortuna (III)</li>
                    <li>Irrompibilidad (III)</li>
                    <li>Reparación (I)</li>
                </ul>`;
            break;
        case 'pala':
            encantamientos = `
                <ul>
                    <li>Eficiencia (V)</li>
                    <li>Toque de Seda (I)</li>
                    <li>Fortuna (III)</li>
                    <li>Irrompibilidad (III)</li>
                    <li>Reparación (I)</li>
                </ul>`;
            break;
        case 'azada':
            encantamientos = `
                <ul>
                    <li>Eficiencia (V)</li>
                    <li>Toque de Seda (I)</li>
                    <li>Fortuna (III)</li>
                    <li>Irrompibilidad (III)</li>
                    <li>Reparación (I)</li>
                </ul>`;
            break;
        case 'arco':
            encantamientos = `
                <ul>
                    <li>Poder (V)</li>
                    <li>Golpeo (II)</li>
                    <li>Infinitud (I)</li>
                    <li>Irrompibilidad (III)</li>
                    <li>Reparación (I)</li>
                </ul>`;
            break;
        case 'tridente':
            encantamientos = `
                <ul>
                    <li>Lealtad (III)</li>
                    <li>Impulso (III)</li>
                    <li>Canalización (I)</li>
                    <li>Irrompibilidad (III)</li>
                    <li>Reparación (I)</li>
                </ul>`;
            break;
        case 'casco':
            encantamientos = `
                <ul>
                    <li>Protección (IV)</li>
                    <li>Respiración (III)</li>
                    <li>Afínidad Acuática (I)</li>
                    <li>Irrompibilidad (III)</li>
                    <li>Reparación (I)</li>
                    <li>Espinas (III)</li>
                    <li>Protección contra Proyectiles (IV)</li>
                    <li>Protección contra el Fuego (IV)</li>
                    <li>Protección contra Explosiones (IV)</li>
                </ul>`;
            break;
        case 'pechera':
            encantamientos = `
                <ul>
                    <li>Protección (IV)</li>
                    <li>Protección contra el Fuego (IV)</li>
                    <li>Protección contra Explosiones (IV)</li>
                    <li>Protección contra Proyectiles (IV)</li>
                    <li>Irrompibilidad (III)</li>
                    <li>Reparación (I)</li>
                    <li>Espinas (III)</li>
                </ul>`;
            break;
        case 'pantalones':
            encantamientos = `
                <ul>
                    <li>Protección (IV)</li>
                    <li>Protección contra el Fuego (IV)</li>
                    <li>Protección contra Explosiones (IV)</li>
                    <li>Protección contra Proyectiles (IV)</li>
                    <li>Irrompibilidad (III)</li>
                    <li>Reparación (I)</li>
                    <li>Espinas (III)</li>
                </ul>`;
            break;
        case 'botas':
            encantamientos = `
                <ul>
                    <li>Protección (IV)</li>
                    <li>Caída de Pluma (IV)</li>
                    <li>Agilidad Acuática (III)</li>
                    <li>Irrompibilidad (III)</li>
                    <li>Reparación (I)</li>
                    <li>Espinas (III)</li>
                    <li>Protección contra Proyectiles (IV)</li>
                    <li>Protección contra el Fuego (IV)</li>
                    <li>Protección contra Explosiones (IV)</li>
                    <li>Velocidad del Alma (III)</li>
                </ul>`;
            break;
        case 'mazo':
            encantamientos = `
                <ul>
                    <li>Densidad (V)</li>
                    <li>Aspecto Ígneo (II)</li>
                    <li>Aeroimpulso (III)</li>
                    <li>Fisura (IV)</li>
                    <li>Irrompibilidad (III)</li>
                    <li>Reparación (I)</li>
                    <li>Golpeo (V)</li>
                    <li>Perdición de los artropodos (V)</li>
                </ul>`;
            break;
        default:
            encantamientos = '';
            break;
    }

    document.getElementById('result').innerHTML = encantamientos;
}

function convertir() {
    const conversionType = document.getElementById('conversion-type').value;
    const inputValue = document.getElementById('input-value').value;
    let conversionResult = '';

    if (inputValue) {
        const value = parseInt(inputValue, 10);

        if (conversionType === 'stacks-a-bloques') {
            const bloques = value * 64;
            conversionResult = `${value} stacks son ${bloques} bloques.`;
        } else if (conversionType === 'bloques-a-stacks') {
            const stacks = Math.floor(value / 64);
            const sobrantes = value % 64;
            conversionResult = `${value} bloques son ${stacks} stacks y ${sobrantes} bloques sobrantes.`;
        }
    }

    document.getElementById('conversion-result').innerHTML = conversionResult;
}
