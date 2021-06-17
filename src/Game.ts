import type Color from "./types/Color";
import Checker from "./Checker"
import Position from "./Position";

export default class Game {
  private _turn: Color;
  private _checkers: {[key in Color]: Checker[]};

  constructor() {
    this._turn = "BLACK";
    this._checkers = {
      "WHITE": [],
      "BLACK": []
    };
    this.loadGrid();
  }

  get currentColor(): Color {
    return this._turn;
  }

  get enemyColor(): Color {
    return this._turn === "BLACK" ? "WHITE" : "BLACK";
  }

  get turn(): Color {
    return this._turn;
  }

  get currentCheckers(): Checker[] {
    return this._checkers[this.currentColor];
  }

  get enemyCheckers(): Checker[] {
    return this._checkers[this.enemyColor];
  }

  get checkers(): Checker[] {
    return [...this.currentCheckers, ...this.enemyCheckers];
  }

  loadGrid() {
    this._checkers["BLACK"] = [];
    this._checkers["BLACK"].push(new Checker("BLACK", new Position(1, 0)));
    this._checkers["BLACK"].push(new Checker("BLACK", new Position(3, 0)));
    this._checkers["BLACK"].push(new Checker("BLACK", new Position(5, 0)));
    this._checkers["BLACK"].push(new Checker("BLACK", new Position(7, 0)));
    this._checkers["BLACK"].push(new Checker("BLACK", new Position(0, 1)));
    this._checkers["BLACK"].push(new Checker("BLACK", new Position(2, 1)));
    this._checkers["BLACK"].push(new Checker("BLACK", new Position(4, 1)));
    this._checkers["BLACK"].push(new Checker("BLACK", new Position(6, 1)));
    this._checkers["BLACK"].push(new Checker("BLACK", new Position(1, 2)));
    this._checkers["BLACK"].push(new Checker("BLACK", new Position(3, 2)));
    this._checkers["BLACK"].push(new Checker("BLACK", new Position(5, 2)));
    this._checkers["BLACK"].push(new Checker("BLACK", new Position(7, 2)));
    
    this._checkers["WHITE"] = [];
    this._checkers["WHITE"].push(new Checker("WHITE", new Position(0, 5)));
    this._checkers["WHITE"].push(new Checker("WHITE", new Position(2, 5)));
    this._checkers["WHITE"].push(new Checker("WHITE", new Position(4, 5)));
    this._checkers["WHITE"].push(new Checker("WHITE", new Position(6, 5)));
    this._checkers["WHITE"].push(new Checker("WHITE", new Position(1, 6)));
    this._checkers["WHITE"].push(new Checker("WHITE", new Position(3, 6)));
    this._checkers["WHITE"].push(new Checker("WHITE", new Position(5, 6)));
    this._checkers["WHITE"].push(new Checker("WHITE", new Position(7, 6)));
    this._checkers["WHITE"].push(new Checker("WHITE", new Position(0, 7)));
    this._checkers["WHITE"].push(new Checker("WHITE", new Position(2, 7)));
    this._checkers["WHITE"].push(new Checker("WHITE", new Position(4, 7)));
    this._checkers["WHITE"].push(new Checker("WHITE", new Position(6, 7)));
  }
}