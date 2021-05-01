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
    }; // Bei einer Variablendeklaration macht man ein Komma auch am Ende
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

    let stA: Array<Student> = [
        {"nameStudent": "Maja", "martikelnummer": 21372, "studiengang": "OMB"},
        {"nameStudent": "Helena", "martikelnummer": 21373, "studiengang": "MIB"},
        {"nameStudent": "Thomas", "martikelnummer": 21374, "studiengang": "MKB"}
    ];
    

    // Aufgabe 2 - Arrays
    // a)

    // b)
   

    // c)

    /*let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
    let arrBack: number[] = backwards(arr);
    console.log(arr);
    console.log(arrBack);
    console.log(join(arr, [15, 9001, -440] ));
    console.log(join([123, 666, -911], arr, [15, 9001, -440, 1024] )); // Bonus b)
    arr = split(arr, 0, 4);
    console.log(arr);
    console.log(split(arr, 1, 2));
    console.log(split(arr, 2, 0));     // Bonus c)
    console.log(split(arr, -1, 2));    // Bonus c)
    console.log(split(arr, 0, 7));     // Bonus c)
    */
   

    // Aufgabe 3 - Endlich was visuelles!
    // a)
    
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
    let context: CanvasRenderingContext2D = canvas.getContext("2d");
    context.fillStyle = "rgb(135,206,255)";  //Himmel
    context.fillRect(0, 0, 500, 400); //Position von Himmel x y 
    context.fillStyle = "rgb(155,205,155)";   //Wiese
    context.fillRect(0, 250, 500, 300);

    context.beginPath();   //Baumstamm
    context.lineWidth = 3;
    context.fillStyle = "rgb(139,69,19)";
    context.moveTo(370, 210);
    context.lineTo(350, 300);
    context.lineTo(410, 300);
    context.lineTo(390, 210);
    context.lineTo(370, 210);
    context.stroke();
    context.fill();

    context.beginPath();    //Blätter
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.fillStyle = "rgb(110,139,61)";
    context.arc(360, 210, 30, 0, Math.PI * 2);
    context.fill();
    context.stroke();

    context.beginPath();    //Blätter
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.fillStyle = "rgb(110,139,61)";
    context.arc(380, 180, 30, 0, Math.PI * 2);
    context.fill();
    context.stroke();

    context.beginPath();    //Blätter
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.fillStyle = "rgb(110,139,61)";
    context.arc(400, 210, 30, 0, Math.PI * 2);
    context.fill();
    context.stroke();


    context.lineWidth = 0.5; //Haus
    context.fillStyle = "rgb(238,213,183)";
    context.fillRect(75, 140, 150, 110);
    context.fillStyle = "rgb(240,128,128)";
    context.fillRect(130, 190, 40, 60);

    context.beginPath();    //Dach
    context.fillStyle = "rgb(240,128,128)";
    context.moveTo(50, 140);
    context.lineTo(150, 60);
    context.lineTo(250, 140);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();    //Wolke
    context.fillStyle = "white";
    context.arc(340, 60, 40, 0, Math.PI * 2);
    context.fill();

    context.beginPath();    //Wolke
    context.fillStyle = "white";
    context.arc(370, 35, 30, 0, Math.PI * 2);
    context.fill();

    context.beginPath();    //Wolke
    context.fillStyle = "white";
    context.arc(385, 60, 40, 0, Math.PI * 2);
    context.fill();

    context.beginPath();    //Wolke2
    context.fillStyle = "whitesmoke";
    context.arc(35, 60, 20, 0, Math.PI * 2);
    context.fill();

    context.beginPath();    //Wolke2
    context.fillStyle = "whitesmoke";
    context.arc(80, 44, 25, 0, Math.PI * 2);
    context.fill();

    context.beginPath();    //Wolke2
    context.fillStyle = "whitesmoke";
    context.arc(55, 60, 25, 0, Math.PI * 2);
    context.fill();

    console.log(canvas);
    


    // b)
    // c)
    // d)
    // e)
    // f)
    // g)
}
