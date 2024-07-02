import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  button1: string = "YES!";
  button2: string = "";
  shutdown: boolean = true;
  counter: number = -1;
  text: string = "Match the song to the albumn it's from";
  color1: string = "tertiary";
  color2: string = "danger";
  answer: number[] = [0, 0, 0, 1, 0, 1, 1];
  answers1: string[] = ["Speak Now", "Reputation", "Evermore", "1989", "Red", "Debut", "Folklore"]
  answers2: string[] = ["Red", "Folklore", "TTPD", "Fearless", "Evermore", "1989", "Lover"]
  buttonColor1: string[] = ["tertiary", "dark", "warning", "secondary", "danger", "primary", "light" ]
  buttonColor2: string[] = ["danger", "light", "medium", "warning", "warning", "secondary", "tertiary"]
  songNames: string[] = ["The Story of Us", "Call it what you want", "long story short","Mr. Perfectly Fine", "The Lucky One", "How you get the girl", "Miss Americana and the Heart Break Prince"]
  Score: number = 0;
  percent: number = 100;
  percentString: string = "Percent: "
  percentSign: string = "%"
  constructor() {}
  click1() {
    if (this.counter == -1) {
      this.shutdown = false;
      this.text = "The Story of Us";
      this.button1 = "Speak Now";
      this.button2 = "Red";
      this.counter++;
    }
    else {
      this.choice(0);
      this.nextOption();
      
    }
  }
  click2() {
    this.choice(1);
    this.nextOption();

  }
  choice(value: number){
    if (value == this.answer[this.counter]){
      console.log("correct");
      this.counter++;
      this.Score ++
      this.percent = (this.Score / this.counter) * 100
      this.percent = Math.round((this.percent + Number.EPSILON) * 100) / 100
    }
    else{
      console.log("incorrect");
      this.counter++;
      this.percent = ((this.Score / this.counter) * 100)
      this.percent = Math.round((this.percent + Number.EPSILON) * 100) / 100
    }

  }
  nextOption(){
    this.button1 = this.answers1[this.counter];
    this.button2 = this.answers2[this.counter];
    this.text = this.songNames[this.counter];
    this.color1 = this.buttonColor1[this.counter];
    this.color2 = this.buttonColor2[this.counter];
  }

}
