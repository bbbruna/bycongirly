import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailValidator, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Usuario } from 'src/app/model/usuario.model';
import {UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  public userForm!: FormGroup;
  public notificacao: any[] = [
    {
      id: 1,
      nome: "Estagiário",
      tipo: "Cargo",
      checked: false
    },
    {
      id: 2,
      nome: "Voluntário",
      tipo: "Cargo",
      checked: false
    }
  ]

  constructor(private usuarioService: UsuarioService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      nome: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(100)]
        )
      ],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email]
        )
      ],
      senha: ['', Validators.compose([
        Validators.required,
        Validators.minLength(7)]
        )
      ],
      idade: ['', Validators.compose([
        Validators.required,
        Validators.minLength(0)]
        )
      ],
      endereco: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2)]
        )
      ], 
      cidade: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2)]
        )
      ], 
      estado: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2)]
        )
      ],  
      numero: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1)]
        )
      ],   
      sexo: ['', Validators.required],
      notificacoes: this.formBuilder.array([], Validators.required)
    });

    this.carregarCheckbox();
  }


  public carregarCheckbox(){
    const notificacoesRef: FormArray = this.userForm.get('notificacoes') as FormArray;
    this.notificacao.forEach((item)=>{
      this.atualizarCheckbox(notificacoesRef, item);
    });
  }



  public mudarCheckbox(event: any, indice: number){

    const notificacoesRef: FormArray = this.userForm.get('notificacoes') as FormArray;
    this.notificacao[indice].checked = event.target.checked;
    this.atualizarCheckbox(notificacoesRef, event.target);
  }


  public atualizarCheckbox(notificacoesRef: FormArray, checkboxInput: any){

    if(checkboxInput.checked){
      notificacoesRef.push(new FormControl(checkboxInput.value));
    }else{
      notificacoesRef.controls.forEach((item, index)=>{
        if(item instanceof FormControl){
          if(item.value === checkboxInput.value){
            notificacoesRef.removeAt(index);
          }
        }
      });
    }

  }

  public submit(){

    if(!this.userForm.pending && this.userForm.valid){ 
      console.log("Formulário preenchido com sucesso.");
      this.usuarioService.adicionar(this.usuario).subscribe(  (resposta: any)=>{
        console.log(resposta); 
        this.router.navigate(['/login']);
      });
    }else{
      console.log("O formulário não foi preenchido corretamente.")
    }
   
    console.log(this.userForm.value);

  }

}
