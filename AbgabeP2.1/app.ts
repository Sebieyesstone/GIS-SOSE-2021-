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
//*  c) 1. Möglichkeit mit einer Funktion (Schneller)
let c: string = "Alles";

function c3(): void {
    console.log(c + " Gute!" + c + " Klar?" + c + " Logo!");
}
function c1(): void {
    c3();
}
c1();

//* 2. Möglichkeit - jeweils eine Funktion (Aufgabenstellung)

function func0(): void {
    console.log("Alles ");
}
function func11(): void {
    console.log("Gute! ");
}
function func12(): void {
    console.log("Klar? ");
}
function func13(): void {
    console.log("Logo! ");
}
function a3(): void {
    func0();
    func11();
    func0();
    func12();
    func0();
    func13();
}
a3();

//* Aufgabe 2 - Kontinuierliche Variablenmanipulation

function a2(): void {
    let i: number = 9; //* Ini number i mit dem Wert 9

    do {
        console.log(i); //* Ausgabe i
        i = i - 1; //* neuer Wert = alter Wert - 1 -> i wird immer eins kleiner
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
//* Schleife läuft nur solage i größer 0 ist -> Also bei 1 hört sie auf (Zeile 62 1-1 = 0 )

//* Aufgabe 3 - Fehler erkennen und vermeiden lernen

//* a) Ich habe Zeichen weg gelassen ({}) und das war sehr hilfreich da ich sehen konnte das der Code nicht ausgeführt werden kann.
//* Sobald ich einen String anstatt number vertausche kommt wieder eine Fehlermeldung da Strings: Zeichenkette sind und number: Zahlen

//* b) Ich bin mit zwei Kommilitonen durchgegangen und wir haben uns die Fehler angeschaut und den Code überarbeitet

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

//* a) Als erstes wird String x mit dem Wert Hallo initialisiert. In Zeile 89 wird "Hallo" ausgegeben. Danach geht er in  die function1
//* diese wird aber übersprungen. Hier wird nämlich y mit dem Wert "Bla" zugewiesen. Die function1 verlangt nach einem string
//* aber das "Bla" wurde y zugewiesen. In Zeile 91 wird nochmal "Hallo" ausgegeben. In Zeile 92 springt er runter in func2 in der String
//* x mit dem Wert "Blubb" neu überschrieben wird (Erst Hallo jetzt Blubb). Zeile 93 wird x überschrieben zu "Test"
//* Zeile 94 wird "Test" ausgegeben.

//* b) Globale Variablen: sind von jeder beliebigen Stelle im gesamten Programm aus lesbar und überschreibar (z.B Funktionen)
//* Lokale Variablen: können nicht mehr verändert werden und man hat kein Zugriff auserhalb des Programms (erleichert die Fehlersuche, innerhalb geschweiften Klammern)
//* Übergabeparametern: wird als Wert übergeben und als Kopie bereitgestellt z.B bei Methoden
//* Variablen sind Werte die ich speichere und Funktionen die arbeiten mit dem Werten


//* Aufgabe 5 - Schleifen, Funktionen und andere Kontrollstrukturen

//* a)
function multiply(x: number, y: number): number { //* x und y gebe ich datentyp number -> number am Ende ist mein Rückgabewert und gibt mir eine Zahl zurück
    return (x * y); //* Multiplikation zwischen meinen zwei Nummern
}
//* b)
function max(m: number, a: number): number {
    if (m < a) {
        return (a); //* return = zurückgeben 1. Fall a größer m
    }
    if (a < m) {
        return (m); //* 2. Fall m größer a 
    }
    else {
        return (a); //* sind beide gleich
    }
}
//* c)
function count(): void {
    let i: number = 1;
    let ergebnis: number = 0;
    while (i < 101) {
        ergebnis = ergebnis + i; //* Ergebnis erhöht 
        i = i + 1; //* zählt bis 100 hoch 
    }
    console.log(ergebnis);
}
//* d)
function irgendeineZahl(min: number, max: number): void {
    for (let i: number = 0; i < 10; i++) {
        console.log(Math.random() * (max - min) + min);
    }
}

irgendeineZahl(0, 100);

//* e)
function factorial(n: number): void {
    let i: number = 1;
    let ergebnis: number = 1;
    while (i <= n) { //* 1*1 und so weiter
        ergebnis = ergebnis * i; //* wird immer eins mehr bis es n wird 
        i = i + 1;
    }
    console.log(ergebnis); //* ergebnis bleibt immer 1 wenn while Schleife nicht betreten wird
}

//* f)
function leapyears(): void {
    for (let i: number = 1900; i < 2021; i++) {

        if (i % 4 == 0) { //* Wenn i modulo 4 ohne Rest (0) ist dann gehts ins If (durch 4 teilbar)
            if (!(i % 100 == 0)) { //*  ! nicht durch 100 teilbar -> Schaltjahr
                console.log(i); //* Ausgabe nur Schaltjahre 
            } else if (i % 400 == 0) { //* Wenns teilbar ist durch 100 geht es ins else weil das möchten wir nicht und hier wird überprüft ob es durch 400 teilbar ist
                console.log(i); //* Ausgabe nur Schaltjahre
            }
        }
    }
}
leapyears();

//* Aufgabe 6 - Mehr Schleifen und Funktionen

//* a)

function hashtag(): void {
    let zeichenh: String = "#";//* Initialisierung String zeichenh mit dem Wert "#"
    for (let i: number = 0; i < 7; i++) { //* es wird gezählt von 0 bis 7 i kleiner 7 und immer +1 
        console.log(zeichenh); //* Ausgabe #
        zeichenh += "#";
    }
}
hashtag();

//* b)
function fizzbuzz(): void {
    for (let i: number = 1; i < 101; i++) {
        if (i % 3 == 0) {
            let f: String = "Fizz"; //* Initialisierung String f mit dem Wert Fizz
            console.log(f);
        } else if (!(i % 3 == 0) && i % 5 == 0) {
            let b: String = "Buzz"; //* Initialisierung String b mit dem Wert Buzz
            console.log(b);
        } else {
            console.log(i);
        }
    }
}
fizzbuzz();

//* c)

function fizzbuzz2(): void {
    for (let i: number = 1; i < 101; i++) {
        if (i % 15 == 0) {
            let fb: String = "FizzBuzz"; //* Initialisierung String fb mit dem Wert FizzBuzz
            console.log(fb);
        } else if (i % 3 == 0) {
            let f: String = "Fizz"; //* Initialisierung String f mit dem Wert Fizz
            console.log(f);
        } else if (!(i % 3 == 0) && i % 5 == 0) {
            let b: String = "Buzz";
            console.log(b);
        } else {
            console.log(i);
        }
    }
}
fizzbuzz2();

//* d) und e)

function schachbrett(b: number, h: number): void {
    let z: String = "";
    for (let s: number = 0; s < h; s++) { //* Höhe 
        if (s % 2 == 0)
            z += " ";
        for (let i: number = 0; i < b; i++) { //* Breite
            if (i % 2 == 0) {
                z += "#";
            } else {
                z += " ";
            }
        }
        z += "\n";
    }
    console.log(z);
}

schachbrett(8, 8);