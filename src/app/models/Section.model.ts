import { Row } from './Row.model';

export class Section {

    public title: string = '';
    public rows: Row[] = [];

    constructor() {

    }

    addRows(numRows: number, numSeats: number) {
        for(let i = 0; i < numRows; i ++) {
            let row = new Row(numSeats);

            this.rows.push(row);
        }
    }
}
