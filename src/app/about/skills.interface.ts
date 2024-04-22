import { Inject, Injectable } from "@angular/core";

export interface Skills {
    id: number;
    stack: string;
    skills: {
        id: number;
        skill: string;
    }[];
}

@Injectable({
    providedIn: 'root'
})
export class TechSkills {
    skills: Skills[] = [];

    constructor() {
        this.skills = [
            {
                'id': 1,
                'stack': 'Frontend (Web&Mobile)',
                'skills': [
                    { 'id': 1, 'skill': 'Flutter' },
                    { 'id': 2, 'skill': 'React' },
                    { 'id': 3, 'skill': 'Angular' },
                    { 'id': 4, 'skill': 'Typescript' },
                    { 'id': 5, 'skill': 'HTML5/CSS3' },
                    { 'id': 6, 'skill': 'Tailwind' },
                    { 'id': 7, 'skill': 'Bootstrap' },
                    { 'id': 8, 'skill': 'Android' },
                    { 'id': 9, 'skill': 'Material' },
                    { 'id': 10, 'skill': 'Figma' },
                    { 'id': 11, 'skill': 'Adobe XD' }
                ]
            },
            {
                'id': 2,
                'stack': 'Backend',
                'skills': [
                    { 'id': 1, 'skill': 'Java' },
                    { 'id': 2, 'skill': 'SpringBoot' },
                    { 'id': 4, 'skill': 'NestJS' },
                    { 'id': 5, 'skill': 'JavaScript' },
                    { 'id': 6, 'skill': 'Dart' },
                    { 'id': 7, 'skill': 'Python' },
                    { 'id': 8, 'skill': 'C#' },
                    { 'id': 9, 'skill': 'PHP' }
                ]
            },
            {
                'id': 3,
                'stack': 'Database',
                'skills': [
                    { 'id': 1, 'skill': 'Postgres SQL' },
                    { 'id': 2, 'skill': 'MySQL' },
                    { 'id': 3, 'skill': 'SQLite' },
                    { 'id': 4, 'skill': 'SQLServer' }
                ]
            },
            {
                'id': 4,
                'stack': 'Embedded systems',
                'skills': [
                    { 'id': 1, 'skill': 'C/C++' },
                    { 'id': 2, 'skill': 'Delphi' },
                    { 'id': 3, 'skill': 'Codesys' },
                    { 'id': 4, 'skill': 'Arduino' },
                    { 'id': 5, 'skill': 'VHDL' },
                    { 'id': 6, 'skill': 'uVision' },
                    { 'id': 8, 'skill': 'SDL' },
                    { 'id': 10, 'skill': 'OpenCV' }
                ]
            },
            {
                'id': 6,
                'stack': 'Env',
                'skills': [
                    { 'id': 1, 'skill': 'Windows' },
                    { 'id': 2, 'skill': 'Linux' },
                    { 'id': 3, 'skill': 'Mac' }
                ]
            },
            {
                'id': 7,
                'stack': 'Others',
                'skills': [
                    { 'id': 1, 'skill': 'Github' },
                    { 'id': 2, 'skill': 'PMP' },
                    { 'id': 4, 'skill': 'CI/CD' },
                    { 'id': 6, 'skill': 'AWS' },
                ]
            }
        ];
    }
}
