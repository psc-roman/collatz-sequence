export function collatzSequence(n: number): number[] {
  const array: number[] = [n];
  while (n > 1) {
    if (n & 1) {
      n *= 3;
      n += 1;
    } else {
      n /= 2;
    }
    array.push(n);
  }
  return array;
}
