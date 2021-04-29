namespace P2_2 {
    // Aufgabe 1 - Mehr "langweilige" Konsolenausgaben
    // a)
    function min(...args: any[]): number { // args = Name arguments = Befehl. var = beliebiger Datentyp (z.B in // args = Name  arguments = Befehl. var = beliebiger Datentyp (z.B in Situation wo ich nicht weiß was ich zurück bekomme) 
        return Math.min.apply(Math, args); // apply = Array zu übergeben anstatt einzelne Parameter, Math.min kann nur einzelne Parameter bekommen
    }
   // console.log(min(5, 3, 1, 8)); // Test

}