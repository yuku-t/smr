import MelodyElement from './interfaces/MelodyElement';
import NoteLength from './NoteLength';
import Pitch from './Pitch';

/**
 * Encapsulate a note, a.k.a. "音符" in Japanese.
 */
export default class Note implements MelodyElement {
    constructor(public pitch: Pitch, public length: NoteLength) {
    }
}
