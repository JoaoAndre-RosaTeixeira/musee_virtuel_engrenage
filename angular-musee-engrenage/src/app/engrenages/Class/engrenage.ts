export class Engrenage {
  id: number;
  nom: string;
  img: string;
  advantages: Array<string>;
  disadvantages: Array<string>;
  addDate: string;
  adderName: string;

  constructor(id: number, nom: string, img: string, advantages: Array<string>, disadvantages: Array<string>, addDate: string, adderName: string ) {
    this.id = id;
    this.nom = nom;
    this.img = img;
    this.advantages = advantages;
    this.disadvantages = disadvantages;
    this.addDate = addDate;
    this.adderName = adderName;
  }
}
