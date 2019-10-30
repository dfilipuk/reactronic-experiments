export class Color {
  r: number;
  g: number;
  b: number;

  constructor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  add(r: number, g: number, b: number): Color {
    return new Color(this.r + r, this.g + g, this.b + b);
  }
}