import type Color from "./types/Color";
import Position from "./Position";

export default class Checker {
  private _color: Color;
  private _position: Position
  private _king: boolean;

  constructor(color: Color, position: Position, king: boolean = false) {
    this._color = color;
    this._position = position;
    this._king = king;
  }

  get color(): Color {
    return this._color;
  }

  set color(newColor: Color) {
    this._color = newColor;
  }

  get position(): Position {
    return this._position;
  }

  set position(newPosition: Position) {
    this._position = newPosition;
  }

  get king(): boolean {
    return this._king;
  }

  set king(newKing: boolean) {
    this._king = newKing;
  }
}