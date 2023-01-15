export class NumberFuctions {
  static isNumber(value: unknown): value is number {
    if (value !== null && value !== undefined && typeof value === 'number') {
      return true;
    }
    return false;
  }
}
