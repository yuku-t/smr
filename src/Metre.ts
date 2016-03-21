import StaffElement from './interfaces/StaffElement';

/**
 * Encapsulate a metre, a.k.a. "拍子" in Japanese.
 */
export default class Metre implements StaffElement {
    constructor(public value: string) {
    }
}
