//* Aufgabe 1 - Basics
function a1(): void { //* Deklaration einer Funktion -> Rückgabewert void
    let x: string = "Alles"; //* Initialisierung String x mit dem Wert Alles
    console.log(x); //* wie System.out.print -> x = Platzhalter
    func1(); //* Hier wird Funktion aufgerufen -> Klar wird hier ausgegeben
    console.log("Logo!"); //* Ausgabe
} 

a1();

function func1(): void {
    console.log("Klar?"); //* Funktion normalerweise am Anfang wird oben aufgerufen
}
//*  a) Konsolenausgabe: Alles Klar Logo!

//*  b)
//*  c)

//* Aufgabe 2 - Kontinuierliche Variablenmanipulation
function a2(): void {
    let i: number = 9; //* Ini number i mit dem Wert 9

    do {
        console.log(i); //* Ausgabe i 
        i = i - 1; //* 
    } while( i > 0); //* wenn i größer 0 ist 
}

a2();

//* Konsolenausgabe: 