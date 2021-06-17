import type Color from "./types/Color";

export default class Checker {
  private _color: Color;
  private _king: boolean;

  constructor(color: Color, king: boolean) {
    this._color = color;
    this._king = king;
  }

  get color(): Color {
    return this._color;
  }

  set color(newColor: Color) {
    this._color = newColor;
  }

  get king(): boolean {
    return this._king;
  }

  set king(newKing: boolean) {
    this._king = newKing;
  }
}