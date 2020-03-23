import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  randomText = lorem.paragraph(3);
  enteredText = '';
  wrongLetters = [];


  handleInputChange(value: string) {
    this.enteredText = value;
    this.wrongLetters = [];
    this.randomText.split("").forEach((char, index) => {
      if (char !== value[index]) {
        this.wrongLetters.push({ correct: char, typed: value[index] });
      }
    });
  }

  getClass(randomLetter: string, enteredLetter: string) {
    if (typeof enteredLetter === 'undefined') {
      return 'unset';
    }

    if (randomLetter === " " && randomLetter !== enteredLetter) {
      return 'danger-bg';
    }

    return randomLetter === enteredLetter ? 'correct' : 'wrong';
  }

  calculateAccuracy() {
    return ((this.randomText.length - this.wrongLetters.length) / this.randomText.length) * 100;
  }

  reload() {
    location.reload();
  }
}
