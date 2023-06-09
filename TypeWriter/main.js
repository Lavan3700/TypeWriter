function typeWriter() {
    let i = 0;
    let txt = 'Wir setzen den Maßstab für schulische Weiterbildungen.'; // Der Text, der getippt werden soll
    let speed = 150; // Geschwindigkeit millisekunden

    function write() {
        if (i < txt.length) {
            document.getElementById("titelTypeWriter").innerHTML += txt.charAt(i);
            i++;
            setTimeout(write, speed);
        } else {
            // Nach Schreiben 2 Sekunden warten, bevor Cursor entfernen
            setTimeout(function () {
                document.getElementById("titelTypeWriter").classList.add('finishedTyping');
            }, 2000);
        }
    }

    write();
}
window.onload = function () {
    setTimeout(typeWriter, 200); // Startet Funktion nach Verzögerung 2 Sekunden
}