import Game from "./Game";
import Position from "./Position";

export default class DOM {
  private _HTMLgrid: HTMLDivElement[][];
  private _HTMLgridHeader: HTMLDivElement;
  private _HTMLgridParent: HTMLDivElement;
  
  private _game: Game;
  
  private _dragging: boolean;
  private _dragStart: Position | null;
  private _dragEnd: Position | null;

  constructor() {
    this._HTMLgridParent = document.querySelector(".grid");
    this._HTMLgridHeader = document.querySelector('.info.row');
    this._HTMLgrid = Array.from(document.querySelectorAll('.game.row')).map(row => Array.from(row.children).map(child => <HTMLDivElement>child.children[0]));

    this._game = new Game();
    
    this._dragging = false;
    this._dragStart = null;
    this._dragEnd = null;

    this.displayGrid();
    this.addDragSupport();
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

  applyMove(from: Position, to: Position) {
    console.log({from, to});
  }

  addDragSupport() {
    const fromPixelsToGrid = (position: Position): Position => {
      const {top, left, height, width} = this._HTMLgrid[0][0].getBoundingClientRect();
      return new Position(
        Math.floor((position.x - left) / width), 
        Math.floor((position.y - top) / height)  
      );
    }

    for (const row of this._HTMLgrid) {
      for (const cell of row) {
        cell.onmousedown = (e) => {
          e.preventDefault();
          this._dragging = true;
          this._dragStart = new Position(e.clientX, e.clientY);
          cell.style.zIndex = "10";

          document.onmouseup = (e) => {
            this._dragEnd = new Position(e.clientX, e.clientY);
            this.applyMove(fromPixelsToGrid(this._dragStart), fromPixelsToGrid(this._dragEnd));
            this._dragging = false;
            this._dragStart = null;
            this._dragEnd = null;
            cell.style.zIndex = "auto";
            document.onmouseup = null;
            document.onmousemove = null;
          }

          document.onmousemove = (e) => {
            e.preventDefault();
            cell.style.left = `${e.clientX - this._dragStart.x}px`;
            cell.style.top = `${e.clientY - this._dragStart.y}px`;
          }
        };


      }
    }
  }
}