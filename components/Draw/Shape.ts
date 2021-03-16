export default class Shape {
  rect: DOMRect;
  ctx: CanvasRenderingContext2D;
  firstX: number;
  firstY: number;
  x: number;
  y: number;
  outlineColor: string;
  fillColor: string;
  outline: boolean;
  fill: boolean;
  shapeType: string;
  centerX: number;
  centerY: number;
  text: string;
  delim: string;
  toPush: boolean;
  selected: boolean;
  properties: string;

  constructor(
    // canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    boundingClientRect: DOMRect,
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
    outline: boolean,
    fill: boolean,
    outlineColor: string = "#000000",
    fillColor: string = "#ffffff",
    shapeType: string,
    firstX?: number,
    firstY?: number,
    x?: number,
    y?: number,
    centerX?: number,
    centerY?: number,
    text?: string,
    delim?: string,
    toPush?: boolean,
  ) {
    this.ctx = ctx;
    this.rect = boundingClientRect;
    this.firstX = firstX ? firstX : e ? e.pageX - this.rect.left : 0;
    this.firstY = firstY ? firstY : e ? e.pageY - this.rect.top : 0;
    this.x = x ? x : e ? e.pageX - this.rect.left : 0;
    this.y = y ? y : e ? e.pageY - this.rect.top : 0;
    this.outlineColor = outlineColor;
    this.fillColor = fillColor;
    this.outline = outline;
    this.fill = fill;
    this.shapeType = shapeType;
    this.centerX = centerX ? centerX : this.firstX + (this.x - this.firstX) / 2;
    this.centerY = centerY ? centerY : this.firstY + (this.y - this.firstY) / 2;
    this.text = text ? text : "";
    this.delim = delim ? "," : "";
    this.toPush = toPush ? toPush : true;
    this.selected = false;

    this.properties =
      this.firstX +
      this.delim +
      this.firstY +
      this.delim +
      this.x +
      this.delim +
      this.y +
      this.delim +
      this.outlineColor +
      this.delim +
      this.fillColor +
      this.delim +
      this.outline +
      this.delim +
      this.fill +
      this.delim +
      this.shapeType +
      this.delim +
      this.centerX +
      this.delim +
      this.centerY +
      this.delim +
      this.text;
  }

  draw = () => {
    if (this.ctx) {
      if (
        this.shapeType === "rectangle" &&
        this.outline === true &&
        this.fill === false
      ) {
        this.ctx.strokeStyle = this.outlineColor;
        this.ctx.strokeRect(
          this.firstX,
          this.firstY,
          this.x - this.firstX,
          this.y - this.firstY,
        );
      }

      if (
        this.shapeType === "rectangle" &&
        this.outline === true &&
        this.fill === true
      ) {
        this.ctx.strokeStyle = this.outlineColor;
        this.ctx.fillStyle = this.fillColor;
        this.ctx.fillRect(
          this.firstX,
          this.firstY,
          this.x - this.firstX,
          this.y - this.firstY,
        );
        this.ctx.strokeRect(
          this.firstX,
          this.firstY,
          this.x - this.firstX,
          this.y - this.firstY,
        );
      }

      if (
        this.shapeType === "rectangle" &&
        this.outline === false &&
        this.fill === true
      ) {
        this.ctx.fillStyle = this.fillColor;
        this.ctx.fillRect(
          this.firstX,
          this.firstY,
          this.x - this.firstX,
          this.y - this.firstY,
        );
      }

      if (this.shapeType === "line" && this.outline === true) {
        this.ctx.strokeStyle = this.outlineColor;
        this.ctx.beginPath();
        this.ctx.moveTo(this.firstX, this.firstY);
        this.ctx.lineTo(this.x, this.y);
        this.ctx.stroke();
      }

      if (
        this.shapeType === "ellipse" &&
        this.outline === true &&
        this.fill === false
      ) {
        this.ctx.strokeStyle = this.outlineColor;
        this.ctx.fillStyle = this.fillColor;
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.centerY);
        let t = 0;
        let x = null;
        let y = null;
        for (let i = 0; i <= 1; i += 0.01) {
          t = (i * 2 * Math.PI) / 1;
          x = this.centerX + (this.x - this.centerX) * Math.cos(t);
          y = this.centerY + (this.y - this.centerY) * Math.sin(t);
          this.ctx.lineTo(x, y);
          this.ctx.stroke();
        }
        this.ctx.lineTo(this.x, this.centerY);
        this.ctx.stroke();
      }

      if (
        this.shapeType === "ellipse" &&
        this.outline === true &&
        this.fill === true
      ) {
        this.ctx.strokeStyle = this.outlineColor;
        this.ctx.fillStyle = this.fillColor;
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.centerY);
        let t = 0;
        let x = null;
        let y = null;
        for (let i = 0; i <= 1; i += 0.01) {
          t = (i * 2 * Math.PI) / 1;
          x = this.centerX + (this.x - this.centerX) * Math.cos(t);
          y = this.centerY + (this.y - this.centerY) * Math.sin(t);
          this.ctx.lineTo(x, y);
          this.ctx.stroke();
        }
        this.ctx.lineTo(this.x, this.centerY);
        this.ctx.stroke();
        this.ctx.fill();
      }

      if (
        this.shapeType === "ellipse" &&
        this.outline === false &&
        this.fill === true
      ) {
        this.ctx.strokeStyle = this.outlineColor;
        this.ctx.fillStyle = this.fillColor;
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.centerY);
        let t = 0;
        let x = null;
        let y = null;
        for (let i = 0; i <= 1; i += 0.01) {
          t = (i * 2 * Math.PI) / 1;
          x = this.centerX + (this.x - this.centerX) * Math.cos(t);
          y = this.centerY + (this.y - this.centerY) * Math.sin(t);
          this.ctx.lineTo(x, y);
        }
        this.ctx.lineTo(this.x, this.centerY);
        this.ctx.fill();
      }

      if (
        this.shapeType === "text" &&
        this.outline === true &&
        this.fill === true
      ) {
        this.ctx.strokeStyle = this.outlineColor;
        this.ctx.fillStyle = this.fillColor;
        this.ctx.font = "20px Georgia";
        this.ctx.fillText(this.text, this.x, this.y);
        this.ctx.strokeText(this.text, this.x, this.y);
      }

      if (
        this.shapeType === "text" &&
        this.outline === false &&
        this.fill === true
      ) {
        this.ctx.strokeStyle = this.outlineColor;
        this.ctx.fillStyle = this.fillColor;
        this.ctx.font = "20px Georgia";
        this.ctx.fillText(this.text, this.x, this.y);
      }

      if (
        this.shapeType === "text" &&
        this.outline === true &&
        this.fill === false
      ) {
        this.ctx.strokeStyle = this.outlineColor;
        this.ctx.fillStyle = this.fillColor;
        this.ctx.font = "20px Georgia";
        this.ctx.strokeText(this.text, this.x, this.y);
      }
    }
  };
}
