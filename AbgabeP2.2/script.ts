namespace P2_2 {
    // Aufgabe 1 - Mehr "langweilige" Konsolenausgaben
    // a)
    function min (...args: any[]): number { // args = Name arguments = Befehl. var = beliebiger Datentyp (z.B in // args = Name  arguments = Befehl. var =      beliebiger Datentyp (z.B in Situation wo ich nicht weiß was ich zurück bekomme) 
        return Math.min.apply(Math, args); // apply = Array zu übergeben anstatt einzelne Parameter, Math.min kann nur einzelne Parameter bekommen
    }
   // console.log(min(5, 3, 1, 8)); // Test
   // b)
    function isEven ( n: number ): void {
        if (n % 2 == 0)
            return;
        if (n + 1)
            return;
        else
            return;
        }
    

   // c)
    interface Student{
        nameStudent(): String;
        martikelnummer(): number;
        studiengang(): String;
    }
    // Aufgabe 2 - Arrays
    // a)
    // b)
    // c)



    // Aufgabe 3 - Endlich was visuelles!
    // a)
    // b)
    // c)
    // d)
    // e)
    // f)
    // g)

}