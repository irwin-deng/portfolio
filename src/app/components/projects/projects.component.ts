import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
    id: 'mysongsql',
    isDeployed: true,
    isPrivate: true,
    hasReport: false,
    name: 'MySongsQL',
    summary: 'Song recommendation engine implemented with JavaScript (React + NodeJS) and MySQL',
    previewImage: 'mysongsql-image.png',
    colorHue: 0,
    description: 
        `This is a song recommendation engine that makes use of the Spotify API. Implemented with JavaScript (React + NodeJS) and MySQL.
        
        Features
        ●	Look up songs based on album, name, or artist
        ●	Display song statistics such as charts it appeared on, streams, tempo, time signature, etc.
        ●	Display similar songs based on those statistics
        ●	Search for albums, and see all the songs in that album as well as similar albums
        ●	Search for artists, and see collaborators, as well as trending news articles about them
        ●	Look up historical top charts and display songs that were on that chart
        ●	Leaderboard of artists who have had the most streams, as well as time on a top chart
        ●	Account Creation/Login: Allow users to favorite songs to come back to later
        `,
    deployLink: 'https://mysongsql.netlify.app/',
    githubLink: undefined,
    demoImage: 'mysongsql-demo.gif'
    },
    {
    id: 'latex',
    isDeployed: false,
    isPrivate: true,
    hasReport: true,
    name: "Handwriting translation with ML",
    summary:
        'Applying neural networks to translate handwriting into LaTeX code',
    previewImage: 'latex-image.png',
    colorHue: 120,
    description: 
        "For this project, I and two other students in my machine learning course studied the problem of OCR, " +
        "specifically the recognition of LaTeX formulae. " +
        "First, we synthesized a training dataset of over 100 thousand simulated handwritten equations. " +
        "Then, we trained and tested 3 different machine learning models on that dataset, " +
        "finding that a capsule neural network was best able to come up with the original LaTeX commands.",
    deployLink: undefined,
    githubLink: undefined,
    reportPath: 'latex-report.pdf',
    demoImage: undefined
    },
    {
    id: 'compiler',
    isDeployed: true,
    isPrivate: false,
    hasReport: false,
    name: 'J to Assembly Compiler',
    summary:
        'Compiler written in C to compile code from the J language to LC4 Assembly',
    previewImage: 'compiler-image.png',
    colorHue: 20,
    description:
        `This is a compiler that will compile code written in J, a stack-oriented language, into assembly code for LC4, an ISA created by Penn. This compiler uses the same calling convention as lcc, so J programs compiled with this can call subroutines compiled by lcc and vice versa.
        
        Implemented functionality
        ●	Decimal and hexadecimal literals
        ●	Arithmetic operations (+, -, *, /, %)
        ●	Comparisons (<, <=, ==, >=, >)
        ●	Logical operations (and, not, or)
        ●	Stack operations (drop, dup, swap, rot, argN)
        ●	If statements (supports nesting)
        ●	Comments
        ●	Functions
        `,
    deployLink: undefined,
    githubLink: 'https://github.com/Judecx14/flutter-peliculas-app',
    demoImage: 'compiler-image.png'
    },
    {
    id: 'airport',
    isDeployed: false,
    isPrivate: false,
    hasReport: false,
    name: 'Airport GUI',
    summary:
        'Java application to find the shortest path between airports, taking into account the Earth\'s spherical geometry',
    previewImage: 'airport-image.png',
    colorHue: 240,
    description: 'Java application to find the shortest path between airports, taking into account the Earth\'s spherical geometry.',
    deployLink: undefined,
    githubLink: 'https://github.com/irwin-deng/Airport-GUI',
    demoImage: 'airport-demo.gif'
    },
    {
    id: 'dotbook',
    isDeployed: false,
    isPrivate: false,
    hasReport: false,
    name: 'Dotbook Generator',
    summary:
        'Java application to automate the creation of dot books for my high school marching band.',
    previewImage: 'dotbook-image.png',
    colorHue: 0,
    description: 'This is an application I wrote for my high school marching band to automate the creation of dot books, which we used to learn formations on the field.',
    deployLink: undefined,
    githubLink: 'https://github.com/irwin-deng/Dotbook-Generator',
    demoImage: 'dotbook-image.png'
    },
    {
    id: 'portfolio',
    isDeployed: true,
    isPrivate: false,
    hasReport: false,
    name: 'My Portfolio Website',
    summary:
        'This is the second iteration of my portfolio website, written in TypeScript + Angular.',
    previewImage: 'portfolio-image.png',
    colorHue: 210,
    description: 'This is the second iteration of my portfolio website, written in TypeScript + Angular.',
    deployLink: undefined,
    githubLink: 'https://github.com/irwin-deng/portfolio/tree/v2-angular',
    demoImage: 'portfolio-demo.gif'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
