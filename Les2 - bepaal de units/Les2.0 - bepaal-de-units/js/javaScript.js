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
            console.log(this.voorraad +=1);
        }

        verlaagVoorraadMet(somAftrekken){
            let verlagenMulti = this;
            verlagenMulti.somAftrekken = parseFloat(somAftrekken);

            if((this.voorraad === parseFloat(0) || this.voorraad < parseFloat(0) || this.voorraad <= parseFloat(0) || this.voorraad - verlagenMulti.somAftrekken <= parseFloat(-1))){
                console.log("Geen voorraad beschikbaar voor dit artikel, verlaging kan niet plaatsvinden. Er zijn", this.voorraad, " op deze locatie beschikbaar. Wilt u nieuwe modellen bestellen ?    :    ");
                
                console.log("sec0");
            }
            
            else if((this.voorraad <=parseFloat-1)){
                console.log("Geen voorraad beschikbaar voor dit artikel, verlaging kan niet plaatsvinden. Er zijn", this.voorraad, " op deze locatie beschikbaar. Wilt u nieuwe modellen bestellen ?    :    ");
                console.log("sec1");
            } 

            else if(this.voorraad >=1 ){
                console.log((this.voorraad -= verlagenMulti.somAftrekken));
                console.log("sec2");
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




