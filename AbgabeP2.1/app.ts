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
//* Alle Buchstaben, Strings, Striche (_, -) sind zulässige Variablennamen und nichtzulässige Variablennamen sind Zahlen und Sonderzeichen
//*  b) Ich habe einen Breakpoint in Zeile 3 (Haltepunkt) gesetzt. Er geht von Zeile 3 bis Zeile 5 durch und es wird "Alles" in der Konsole ausgegeben.
//* Sobald er in Zeile 5 ist, springt er zu Zeile 11 in der die func1. Er geht durch die Funktion und gibt "Klar" in der Konsole aus. Danach springt er wieder hoch zur Zeile 6
//* und gibt "Logo!" in der Konsole aus.
//*  c)
function c3(): void{
    console.log( c + " Gute!" c + " Klar?" c + " Logo!");
}
function c1(): void{
    c3();
}
let c: string = "Alles";

c1();

//* Aufgabe 2 - Kontinuierliche Variablenmanipulation

function a2(): void {
    let i: number = 9; //* Ini number i mit dem Wert 9

    do {
        console.log(i); //* Ausgabe i 
        i = i - 1; //* 
    } while (i > 0); //* wenn i größer 0 ist 
}

a2();

//* Konsolenausgabe: 9
//*                  8
//*                  7
//*                  6
//*                  5
//*                  4
//*                  3
//*                  2
//*                  1
//* Schleife läuft nur solage i größer 0 ist -> Also bei 1 hört sie auf

//* Aufgabe 3 - Fehler erkennen und vermeiden lernen

//* a) 
//* b) Ich bin mit Kommilitonen durchgegangen und haben uns die Fehler angeschaut und den Code überarbeitet ????

//* Aufgabe 4 - Global vs Lokal

let x: string = "Hallo"; //* Initialisierung String x mit dem Wert Hallo
console.log(x); //* Ausgabe Hallo
function1(x); //* Geht runter in die funktion1 
console.log(x);
func2();
func3();
console.log(x);

function function1(y: string): void { //* Deklaration
    y = "Bla"; //* 
    console.log(y);
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    x = "Test";
}

//* a)

//* b) Globale Variablen: sind von jeder beliebigen Stelle im gesamten Programm aus lesbar und überschreibar
//* Lokale Variablen: können nicht mehr verändert werden und man hat kein Zugriff auserhalb des Programms (erleichert die Fehlersuche)
//* Übergabeparametern: wird als Wert übergeben und als Kopie bereitgestellt z.B bei Methoden


//* Aufgabe 5 - Schleifen, Funktionen und andere Kontrollstrukturen

//* a)
//* b)
//* c)
//* d)
//* e)
//* f)

//* Aufgabe 6 - Mehr Schleifen und Funktionen

//* a)
//* b)
//* c)
//* d)
//* e)