//opdracht week #1
//Maak een klasse aan
let array_Studenten = [];
class Persoon
{
//een custom initializatie die uitgevoerd moet worden vóór ieder ander stuk code / methodes, opgeroepen mogen worden
  constructor(student_naam, student_nr, student_klasnaam){
    let student = this;
    student.student_naam = student_naam;
    student.student_nr = student_nr;
    student.student_klasnaam = student_klasnaam;

  //sla de data op in een array.   This is de eigenaar, oftewel de class.  Sla data op in:
    array_Studenten.unshift(this);
  }

  studentRegistreren(){
   console.log(` ${this.student_naam}, ${this.student_nr}, ${this.student_klasnaam}`);
  }
}

class ToonData extends Persoon{
      studentRegistreren(){
        console.table(this.student_naam);
      }
    }

//pas xyz1 class   Persoon aan naar    ToonData voor een ander resultaat

//opdracht week #2

//Het is mij gelukt!

//Maak nieuw instantie aan
let xyz0 = new Persoon("Andrade Leroy",30168,"MD2AB");
let xyz1 = new Persoon("Pietje Puk",3,"MD2A");
  
//bekijk alle studenten die zijn opgeslagen in array_Studenten 
//zolang i kleiner is als array_Studenten, dan i+=1
for(let i =0; i< array_Studenten.length; i++){
//voor ieder i roulering, plak je de i aan de Index van de lokaalOpslag 
array_Studenten.forEach(element => localStorage.setItem('lokaalOpslagKey'+[i], JSON.stringify(array_Studenten[i])));

//Toon alle LokaalOpslag data, die via dit document is opgeslagen
document.write("Key"+[i] + localStorage.getItem('lokaalOpslagKey'+[i])+`<br>`+`<br>`);

//Delete localStorage --> uncomment volgende regel
//localStorage.removeItem("lokaalOpslagKey"+[i]);
}

                        console.log(array_Studenten);
//localStorage.clear();

