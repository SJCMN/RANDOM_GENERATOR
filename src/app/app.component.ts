import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //new property within the class

  // the equivalent code is:
  // constructor() {
  //   this.password = '';
  // }

  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password ='';


  // a method a to trigger a console log every time a user clicks on a button 
  onButtonClick() {
    this.password = 'MY PASSWORD!!!';
    console.log("Include letters:", this.includeLetters);
    console.log("Include numbers:", this.includeNumbers);
    console.log("Include symbols:", this.includeSymbols);
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = ! this.includeSymbols;
  }
  
}
