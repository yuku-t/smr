import MelodyElement from './interfaces/MelodyElement';

/**
 * Encapsulate a melody, a.k.a. "旋律" in Japanese.
 */
export default class Melody {
    constructor(public elements: MelodyElement[]) {
    }
}
