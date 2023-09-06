import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  educationItems: { title: string, place: string, location: string, dateRange: string }[] = [
    {
      place: 'University of Pennsylvania',
      title: 'M.S.E. Computer Science',
      location: 'Philadephia, PA',
      dateRange: '2023-2024',
    },
    {
      place: 'University of Pennsylvania',
      title: 'B.S.E. Computer Science & Economics',
      location: 'Philadelphia, PA',
      dateRange: '2020-2024',
    },
    {
      place: 'Avon Lake High School',
      title: '',
      location: 'Avon Lake, OH',
      dateRange: '2016-2020',
    },
  ];

  experienceItems: { title: string, place: string, location: string, dateRange: string }[] = [
    {
      place: 'University of Pennsylvania',
      title: 'Machine Learning Research Assistant',
      location: 'Philadelphia, PA',
      dateRange: '2022-Present',
    },
    {
      place: 'PlayStation / Sony Interactive Entertainment',
      title: 'Machine Learning Engineering Intern',
      location: 'San Diego, CA',
      dateRange: 'Summer 2023',
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
      title: 'Machine Learning Research Assistant',
      location: 'Cleveland, OH',
      dateRange: 'Summer 2019',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
