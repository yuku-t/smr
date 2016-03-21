import Movement from './Movement';
import TuneHeader from './TuneHeader';

/**
 * Encapsulate a tune, a.k.a. "曲" in Japanese.
 */
export default class Tune {
    constructor(public header: TuneHeader, public movements: Movement[]) {
    }
}
