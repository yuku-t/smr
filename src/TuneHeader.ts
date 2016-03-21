import Composer from './Composer';
import Title from './Title';

export default class TuneHeader {
    constructor(public title: Title, public composers: Composer[]) {
    }
}
