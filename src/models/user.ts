import {Deserializable} from  './deserializable.model'

export class User implements Deserializable{
  constructor(){}
  firstname: string;
  lastname: string;
  email: string;
  _id: string;

  deserialize(input:any){
    Object.assign(input,this);
    return this;
  }
}
