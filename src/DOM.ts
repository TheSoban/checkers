import Game from "./Game";

export default class DOM {
  private _HTMLgrid: HTMLDivElement[][];
  private _HTMLgridHeader: HTMLDivElement;
  private _HTMLgridParent: HTMLDivElement;
  private _game: Game;

  constructor() {
    this._HTMLgridParent = document.querySelector(".grid");
    this._HTMLgridHeader = document.querySelector('.info.row');
    this._HTMLgrid = Array.from(document.querySelectorAll('.game.row')).map(row => Array.from(row.children).map(child => <HTMLDivElement>child.children[0]));
    this._game = new Game();
    this.displayGrid();
  }

  displayGrid() {
    for (const row of this._HTMLgrid) {
      for (const cell of row) {
        cell.classList.remove("white", "black", "king");
      }
    }
    
    for (const checker of this._game.checkers) {
      const cell = this._HTMLgrid[checker.position.y][checker.position.x];
      cell.classList.add(checker.color.toLowerCase());
      if (checker.king) cell.classList.add("king");
    }
  }
}