import Staff from './Staff';

/**
 * Encapsulate a movement, a.k.a. "楽章" in Japanese.
 *
 * It has only one staff in most cases.
 */
export default class Movement {
    constructor(public staffs: Staff[]) {
    }
}
