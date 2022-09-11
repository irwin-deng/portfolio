import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  experienceItems: { title: string, place: string, location: string, dateRange: string }[] = [
    {
      place: 'University of Pennsylvania',
      title: 'B.S.E. Computer Science & Economics',
      location: 'Philadelphia, PA',
      dateRange: '2020-2024',
    },
    {
      place: 'MRI Software',
      title: 'Software Engineering Intern',
      location: 'Cleveland, OH',
      dateRange: 'Summer 2022',
    },
    {
      place: 'Eastern Union Funding',
      title: 'Data Analytics Intern',
      location: 'New York, NY',
      dateRange: 'Summer 2021',
    },
    {
      place: 'Case Western Reserve University',
      title: 'Research Assistant',
      location: 'Cleveland, OH',
      dateRange: 'Summer 2019',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
