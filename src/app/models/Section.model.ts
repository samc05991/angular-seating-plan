import { Row } from './Row.model';

export class Section {

    public title: string = '';
    public rows: Row[] = [];

    public width?: number = undefined;
    public height?: number = undefined;

    constructor() {

    }

    public get available():number {
        let availableSeats = 0;

        for(let i = 0; i < this.rows.length; i++) {
            for(let j = 0; j < this.rows[i].seats.length; j++) {
                availableSeats += this.rows[i].seats[j].taken || this.rows[i].seats[j].inactive ? 0 : 1;
            }
        }

        return availableSeats;
    }

    addRows(numRows: number, numSeats: number) {
        for(let i = 0; i < numRows; i ++) {
            let row = new Row(numSeats);

            this.rows.push(row);
        }
    }
}
