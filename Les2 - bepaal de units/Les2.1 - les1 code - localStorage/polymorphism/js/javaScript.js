//Maak een klasse aan
class Persoon
{
//een custom initializatie die uitgevoerd moet worden vóór ieder ander stuk code / methodes, opgeroepen mogen worden
  constructor(student_naam, student_nr, student_klasnaam){
    let student = this;
    student.student_naam = student_naam;
    student.student_nr = student_nr;
    student.student_klasnaam = student_klasnaam;
  }

  studentRegistreren(){
    console.log(`Hallo, ${this.student_naam}, ${this.student_nr}, ${this.student_klasnaam}`);
  }
}

class ToonData extends Persoon{
      studentRegistreren(){
        console.table(this.student_naam);
      }
    }
//Registreren lid
  //INSERT INTO leden (student_naam,student_nr,student_klasnaam) VALUES("Pietje Puk",3,"MD2B")

//Maak een nieuw instantie aan
  let xyz0 = new Persoon("Andrade Leroy",30168,"MD2A");
  let xyz1 = new Persoon("Pietje Puk",3,"MD2A");
//pas xyz1 class   Persoon aan naar    ToonData voor een ander resultaat
  console.table(xyz1);
  xyz1.studentRegistreren();


  //xyz0.studentRegistreren(); xyz1.studentRegistreren();
  //console.log(xyz0.studentRegistreren());
