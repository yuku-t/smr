import MelodyElement from './interfaces/MelodyElement';
import Note from './Note';

/**
 * Encapsulate a chord, a.k.a. "和音" in Japanese.
 */
export default class Chord implements MelodyElement {
    constructor(public notes: Note[]) {
    }
}
