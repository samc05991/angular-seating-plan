import { Seat } from './Seat.model';

export class Row {

    public title: string = '';
    public seats: Seat[] = [];

    constructor(numSeats?: number) {
        for(let i = 0; i < numSeats; i ++) {
            let seat = new Seat();

            this.seats.push(seat);
        }
    }
}
