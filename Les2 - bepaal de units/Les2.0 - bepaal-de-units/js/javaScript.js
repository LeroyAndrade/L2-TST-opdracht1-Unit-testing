/* De opdracht:

Maak voor het object Voorraad een method waarmee je de voorraad met 1 stuks kunt verhogen           check
Maak voor het object Voorraad een method waarmee je de voorraad met meerdere stuks kunt verhogen    check    
Maak voor het object Voorraad een method waarmee je de voorraad met meerdere stuks kunt verlagen    check    

*/
class ToyotaGroen2020
{
    constructor(item, aantal){
        let VoorRaad = this;
        VoorRaad.artikel = item;
        VoorRaad.voorraad = parseFloat(aantal);
    }
        
        verhoogVoorraadMet1(){
            console.log(this.voorraad =1);
        }

        verlaagVoorraadMet(somAftrekken){
            let verlagenMulti = this;
            verlagenMulti.somAftrekken = parseFloat(somAftrekken);


            if((this.voorraad - verlagenMulti.somAftrekken >=1)){
                console.log(this.voorraad -= verlagenMulti.somAftrekken);
            }
            
            else {
                console.log("Geen voorraad beschikbaar voor dit artikel, verlaging kan niet plaatsvinden. Er zijn", this.voorraad, " op deze locatie beschikbaar. Wilt u nieuwe modellen bestellen ?    :    ");
            } 
        }

        verhoogVoorraadMet(optellenMulti){
        let verhogerMulti = this;
            verhogerMulti.optellenMulti = parseFloat(optellenMulti);
            console.log((this.voorraad += verhogerMulti.optellenMulti));
        }
}
let ToyotaGroen2020Variabel = new ToyotaGroen2020("Toyota", 5);
ToyotaGroen2020Variabel.showVoorraad();
//volgende zijn uitvoerbaar, bekijk de console.log

//voorraad met 1 stuks kunt verhogen         ToyotaGroen2020Variabel.verhoogVoorraadMet1();
//         met meerdere stuks kunt verlagen  ToyotaGroen2020Variabel.verlaagVoorraadMet(2)
//                                 verhogen  ToyotaGroen2020Variabel.verhoogVoorraadMet(5)




