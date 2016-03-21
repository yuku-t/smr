import Melody from './Melody';
import StaffElement from './interfaces/StaffElement';

/**
 * Encapsulate a measure, a.k.a. "小節".
 */
export default class Measure implements StaffElement {
    constructor(public melodies: Melody[]) {
    }
}
