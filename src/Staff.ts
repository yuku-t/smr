import StaffElement from './interfaces/StaffElement';

/**
 * Encapsulate a staff, a.k.a. "五線譜" in Japanese.
 */
export default class Staff {
    constructor(public elements: StaffElement[]) {
    }
}
