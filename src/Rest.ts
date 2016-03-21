import MelodyElement from './interfaces/MelodyElement';
import NoteLength from './NoteLength';

/**
 * Encapsulate a rest, a.k.a. "休符" in Japanese.
 */
export default class Rest implements MelodyElement {
    constructor(public length: NoteLength) {
    }
}
