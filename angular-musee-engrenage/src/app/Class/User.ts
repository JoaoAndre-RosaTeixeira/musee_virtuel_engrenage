export class User {

  private _nom: string;
  private _password: string;

  constructor(nom: string, password: string) {

    this._nom = nom;
    this._password = password;
  }


  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  static nom() {
    return this.nom;
  }
}
