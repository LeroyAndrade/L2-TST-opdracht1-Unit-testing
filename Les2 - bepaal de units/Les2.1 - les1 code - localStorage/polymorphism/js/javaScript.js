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

    localStorage.setItem('lokaalOpslagKey', array_Studenten.unshift(this));
    const lokaalOpslag = localStorage.getItem('lokaalOpslagKey');
    
  }

  studentRegistreren(){
   console.log(` ${this.student_naam} + ${this.student_nr} +${this.student_klasnaam}`);
  }
}

class ToonData extends Persoon{
      studentRegistreren(){
        console.table(this.student_naam);
      }
    }

  let xyz0 = new Persoon("Andrade Leroy",30168,"MD2A");
  let xyz1 = new Persoon("Pietje Puk",3,"MD2A");
  let xyz2 = new Persoon("Pietje Puk",3,"MD2A");
//pas xyz1 class   Persoon aan naar    ToonData voor een ander resultaat

//opdracht week #2
 console.log(array_Studenten);


  //xyz0.studentRegistreren(); xyz1.studentRegistreren();
  //console.log(xyz0.studentRegistreren());
