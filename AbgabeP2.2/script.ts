namespace P2_2 {
    // Aufgabe 1 - Mehr "langweilige" Konsolenausgaben
    // a)
    function min(...args: number[]): number { // args = Name arguments = Befehl.  
    return Math.min.apply(Math, args); // apply = Array zu übergeben anstatt einzelne Parameter, Math.min kann nur einzelne Parameter bekommen
    }
    //console.log(min(5, 3, 1, 8); // Test
    // b)
    function isEven ( n: number ): boolean {
    if (n == 0) 
        return true;
    if (n == 1)
        return false;
    if (n < 0)
        return isEven (-n);
    else
        return isEven(n - 2);
    }
    //Test
    //console.log(isEven(50)); true     Ergebnis = 0
    //console.log(isEven(75)); false    Ergebnis = 1
    //console.log(isEven(-1)); false    Ergebnis = -5
    // Bsp: mit 5 : 5 ist nicht 0 u. 1, 5-2 = 3, 3 ist nicht 0 u. 1, 3-2 = 1 -> 1 ist nicht 0, aber 1 -> false

    // c)
    interface Student {
        nameStudent: String;
        martikelnummer: number;
        studiengang: String;
    }
    let st1: Student = { 
        nameStudent: "Maja",
        martikelnummer: 21372,
        studiengang: "OMB"
    };
    let st2: Student = { 
        nameStudent: "Helena",
        martikelnummer: 21373,
        studiengang: "MIB"
    };
    let st3: Student = { 
        nameStudent: "Thomas",
        martikelnummer: 21374,
        studiengang: "MKB"
    };

    let stA: Array<Student>[];
    
    const stA = { nameStudent: "", martikelnummer: , studiengang: "" };

    console.log(stA);    

    // Aufgabe 2 - Arrays
    // a)
    // b)
    // c)



    // Aufgabe 3 - Endlich was visuelles!
    // a)
    function backwards(){
        
    }
    // b)
    // c)
    // d)
    // e)
    // f)
    // g)

}