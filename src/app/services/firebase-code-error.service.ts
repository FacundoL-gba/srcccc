import { Injectable } from '@angular/core';
import { firebaseCodeerrorEnum } from '../componentes/utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }
  codeError(code: string) {
    //casos de posibles errores
    switch(code) {
      //ya se registro anteriormente
      case firebaseCodeerrorEnum.EmailAlreadyInUse:
        return 'El email ya esta registrado';
        //contraseña debil
      case firebaseCodeerrorEnum.WeakPassword:
        return 'La contraseña es muy debil';
        //no es valido el correo
      case firebaseCodeerrorEnum.InvalidEmail:
        return 'Correo no valido';
       //la contraseña no existe
      case  firebaseCodeerrorEnum.WrongPassword:
        return 'La contraseña es incorrecta';
        //el usuario no existe
      case firebaseCodeerrorEnum.UserNotFound:
        return 'El usuario no esta registrado';
      default:
        //en caso de que el error no este devuelve un mensaje estandar
        return 'Error desconocido'
    }
  }
}