import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  //cree la variable registrarUsuario
  registrarUsuario: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService,
    private toastr: ToastrService
    ) { 
    this.registrarUsuario = this.fb.group({
      // parametros
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  registrar () {
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;

    if (password !== repetirPassword) {
      this.toastr.warning('Las contraseñas no son iguales');

      return;
    }

    this.loading = true;
    this.afAuth.createUserWithEmailAndPassword(email, password).then(() => {
      this.loading = false;
      this.verificarCorreo();
    }).catch((error) => {
      this.loading = false;
      console.log(error);
      this.toastr.error(this.firebaseError.codeError(error.code))
    })
  }
  verificarCorreo () {
    this.afAuth.currentUser.then(user => user?.sendEmailVerification()
      .then(() => {
        this.toastr.info('Le enviamos un correo para verificar su email');
        this.router.navigate(['/login']);
      })
    );
  } 
}