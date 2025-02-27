import { NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, FormsModule, NgSwitch],
})
export class HomePage {
  constructor() {}
  n1:number = 0
  n2:number = 0
  operacao = ''

  resultado:number = 0

  // public calcular(){
  //   switch(this.operacao){
  //     case '+':
  //       this.resultado = this.n1 + this.n2
  //       break
      
  //     case '-':
  //       this.resultado = this.n1 - this.n2
  //       break;

  //     case '*':
  //       this.resultado = this.n1 * this.n2
  //       break;

  //     case '/':
  //       this.resultado = this.n1 / this.n2
  //       break;
  //   }
    
  //   document.querySelector("h3")!.innerHTML = `${this.resultado}`
  // }

 public soma(){
    this.resultado = this.n1 + this.n2
    alert(this.operacao);
    
    document.querySelector("h3")!.innerHTML = `${this.resultado}`
  }

  public subtracao(){
    this.resultado = this.n1 - this.n2
  }

  public multiplicacao(){
    this.resultado = this.n1 * this.n2
  }

  public divisao(){
    this.resultado = this.n1 / this.n2
  }
}
