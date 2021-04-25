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
function c3(): void {
    console.log( c + " Gute!" c + " Klar?" c + " Logo!");
}
function c1(): void {
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

let x: string = "Hallo"; //* Initialisierung String x mit dem Wert Hallo (Globale V)
console.log(x); //* Ausgabe Hallo
function1(x); //* Geht runter in die funktion1 (Übergangsvariable)
console.log(x); //* Ausgabe Hallo
func2(); //* springt runter in die func2 x wird überschrieben von Hallo auf Blubb. Es wird "Blubb" ausgegeben
func3(); //* öffnet die func3 und x wird wieder überschrieben von Blubb auf Test. Es wird "Test" ausgegeben
console.log(x); //* Test wird ausgegeben

function function1(y: string): void { //* Deklaration
    y = "Bla"; //* y ist eine lokale Variable die nur innerhalb der Funktion exisitiert
    console.log(y);
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    x = "Test";
}

//* a) Als erstes wird String x mit dem Wert Hallo initialisiert. In Zeile 63 wird "Hallo" ausgegeben. Danach geht er in  die function1
//* diese wird aber übersprungen. Hier wird nämlich y mit dem Wert "Bla" initialisiert aber nicht ausgegeben. Die function1 verlangt nach einem x
//* aber das "Bla" wurde mit einem y initialisiert. In Zeile 65 wird nochmal "Hallo" ausgegeben. In Zeile 66 springt er runter in func2 in der String
//* x mit dem Wert "Blubb" neu überschrieben wird (Erst Hallo jetzt Blubb). Zeile 67 wird x überschrieben zu "Test"
//* Zeile 68 wird "Test" ausgegeben.

//* b) Globale Variablen: sind von jeder beliebigen Stelle im gesamten Programm aus lesbar und überschreibar
//* Lokale Variablen: können nicht mehr verändert werden und man hat kein Zugriff auserhalb des Programms (erleichert die Fehlersuche)
//* Übergabeparametern: wird als Wert übergeben und als Kopie bereitgestellt z.B bei Methoden


//* Aufgabe 5 - Schleifen, Funktionen und andere Kontrollstrukturen

//* a)
function multiply(x, y): void {
    let x: number = "number";
    let y: number = "number";
    return
        console.log(x * y);
}
//* b)
function max(m, a): void {
    let m: number ="number";
    let a: number ="number";

}
//* c)
function count(): void {
    let s: number = 0;
    let h: number = 100;

    do{
        s= s + h;
        console.log(s);

    }

}
//* d)
//* e)
//* f)

//* Aufgabe 6 - Mehr Schleifen und Funktionen

//* a)
//* b)
//* c)
//* d)
//* e)