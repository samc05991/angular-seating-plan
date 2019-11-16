import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/models/Section.model';

@Component({
    selector: 'app-create-seating-plan',
    templateUrl: './create-seating-plan.component.html',
    styleUrls: ['./create-seating-plan.component.scss']
})
export class CreateSeatingPlanComponent implements OnInit {

    public sections: Section[] = [];

    constructor() { }

    ngOnInit() {
    }

    addSection() {
        let section = new Section();
        section.title = 'A';
        section.addRows(7, 7);

        this.sections.push(section);

        console.log(this.sections);
    }
}
