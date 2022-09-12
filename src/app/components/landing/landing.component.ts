import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {

  websiteWord: string = `
  Hi, <br>
  My name is <span 
  style="background: -webkit-linear-gradient(45deg, var(--blue), var(--aqua));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;"
  >
    Irwin Deng.
  </span><br>
  Welcome to my
  <span 
    style="background: -webkit-linear-gradient(45deg, var(--green), var(--lime));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;"
  >
    website!
  </span>
  `;

  portfolioWord: string = `
  <span 
    style="background: -webkit-linear-gradient(45deg, var(--purple), var(--magenta));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;"
  >
    portfolio!
  </span>
  `;

  constructor() {}

  ngOnInit(): void {
    const elementWelcomeMessage = document.querySelector('#welcome-message');
    var typewriter = new Typewriter(elementWelcomeMessage, {
      loop: true,
      delay: 25,
    });
    typewriter
      .typeString(this.websiteWord)
      .pauseFor(300)
      .deleteChars(14)
      .typeString(this.portfolioWord)
      .pauseFor(300)
      .start();
  }
}
