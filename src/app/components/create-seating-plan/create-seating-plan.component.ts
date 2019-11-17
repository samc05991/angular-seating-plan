import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Section } from 'src/app/models/Section.model';
import { SeatingPlan } from 'src/app/models/SeatingPlan.model';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-create-seating-plan',
    templateUrl: './create-seating-plan.component.html',
    styleUrls: ['./create-seating-plan.component.scss']
})
export class CreateSeatingPlanComponent implements OnInit, OnChanges {

    public seatingPlan: SeatingPlan;
    public numberOfRowsToAdd: number = 0; 
    public numberOfSeatsToAdd: number = 0;
    public gridWidth: number = 5;
    public gridHeight: number = 3;

    public showGridControls: boolean = false;
    public showSectionControls: boolean = false;
    public showSectionCustomiseControls: boolean = false;

    public selectedSection: any = false;
    public selectedSectionIndex: number = 0;
    @Input() selectedSectionWidth: number = 0;
    @Input() selectedSectionHeight: number = 0;
    @Input() selectedSectionRotation: number = 0;

    constructor() {
        this.seatingPlan = new SeatingPlan();
    }

    ngOnInit() {
        // this.updateGrid();
    }

    ngOnChanges(changes: any) {
        this.updateSectionProperties();
    }

    updateGrid() {
        let element = document.getElementsByClassName('sections')[0];

        let columns = this.getGridText(this.gridWidth);
        let rows = this.getGridText(this.gridHeight);
        let style = "grid-template-columns:" + columns + "grid-template-rows:" + rows;

        element.setAttribute("style", style);
    }

    getGridText(val: number) {
        let text = '';

        for(let i = 0; i < val; i++) {
            text += 'auto ';
        }

        text += ';';

        return text;
    }

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } 
        else {
          transferArrayItem(event.previousContainer.data,
                            event.container.data,
                            event.previousIndex,
                            event.currentIndex);
        }
    }

    addSection() {
        let section = new Section();
        section.title = 'A';
        section.addRows(this.numberOfRowsToAdd, this.numberOfSeatsToAdd);

        this.seatingPlan.sections.push(section);
    }

    selectSection($event, i) {
        this.selectedSection = $event.srcElement;
        this.selectedSectionIndex = i;
    }

    updateSectionProperties() {
        let style = 'width: ' + this.selectedSectionWidth + 'px; height: ' + this.selectedSectionHeight + 'px;';
        style += 'transform: rotateZ(' + this.selectedSectionRotation + 'deg)';

        this.selectedSection.setAttribute("style", style);

        this.seatingPlan.sections[this.selectedSectionIndex].width = this.selectedSectionWidth;
        this.seatingPlan.sections[this.selectedSectionIndex].height = this.selectedSectionHeight;

        this.updateGrid();
    }
}
