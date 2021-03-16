import { INITIAL_PLAYER_TRACK, INITIAL_SHADOW_PLAYER_TRACK } from './Background'

export const INITAL_PLAYER = {
  y: INITIAL_PLAYER_TRACK.y - 30,
}

export const INITAL_SHADOW_PLAYER = {
  y: INITIAL_SHADOW_PLAYER_TRACK.y - 35,
}

export default class Player {
  boundingClientRect: DOMRect
  ctx: CanvasRenderingContext2D
  img: HTMLImageElement
  imgName: string
  name: string
  boundingWidth: number
  boundingHeight: number
  state: 'stand' | 'run' | 'jump'
  stateCount: number
  sourceWidth: number
  sourceHeight: number
  sourceX: number
  sourceY: number
  offsetX: number
  offsetY: number
  x: number
  y: number
  velX: number
  velY: number
  xMultiplier: number
  prevY: number

  constructor(
    ctx: CanvasRenderingContext2D,
    boundingClientRect: DOMRect,
    name: any,
    state: any,
    imgName: any,
  ) {
    this.ctx = ctx
    this.boundingClientRect = boundingClientRect
    this.img = window.document.createElement('img')
    this.name = name
    this.imgName = imgName
    this.img.src = this.imgName
    this.boundingWidth = this.img.width
    this.boundingHeight = this.img.height
    this.state = state
    this.stateCount = null
    this.sourceWidth = null
    this.sourceHeight = null
    this.sourceX = null
    this.sourceY = null
    this.x = 0
    this.y = 0
    this.offsetX = 0
    this.offsetY = 0
    this.velY = 0
    this.velX = 0
    this.xMultiplier = 0
    this.setSource()
    this.prevY = 0
  }

  setState = (state: any) => {
    this.state = state
  }

  setSource = () => {
    switch (this.name) {
      case 'lucas':
        this.sourceWidth = 40
        this.sourceHeight = 50
        this.sourceX = this.sourceWidth
        this.sourceY = 0
        this.y = INITAL_PLAYER.y
        this.xMultiplier = 3 * Math.random()
        break
      case 'shadow':
        this.sourceWidth = 40
        this.sourceHeight = 50
        this.sourceX = this.sourceWidth
        this.sourceY = 0
        this.y = INITAL_SHADOW_PLAYER.y
        this.xMultiplier = 3 * Math.random()
        break
    }
  }

  stand = () => {
    this.state = 'stand'
  }

  run = () => {
    this.state = 'run'
    if (this.x < (this.ctx.canvas.width - this.sourceWidth) / 3) {
      if (this.velX < 9) {
        this.velX += 3 + this.xMultiplier
      }
    } else if (this.x > ((this.ctx.canvas.width - this.sourceWidth) / 3) * 2) {
      if (this.velX > -9) {
        this.velX -= 3 + this.xMultiplier
      }
    }
    this.x += this.velX
  }

  jump = () => {
    this.state = 'jump'

    if (this.x < (this.ctx.canvas.width - this.sourceWidth) / 3) {
      if (this.velX < 8) {
        this.velX = 8
      }
    }

    if (this.velX < 0) this.velX = 8
    this.x += this.velX

    if (this.y > this.ctx.canvas.height / 3) {
      if (this.velY < 16) {
        this.velY -= 2
      }
      this.prevY = this.y
      this.y += this.velY
    } else {
      if (this.y < this.boundingHeight - this.sourceHeight) {
        this.velY += 2
      }
      this.prevY = this.y
      this.y += this.velY
    }

    if (this.y === INITAL_PLAYER.y && this.y !== this.prevY) {
      this.setState('run')
    }
  }

  checkSource = () => {
    switch (this.name) {
      case 'lucas':
        switch (this.state) {
          case 'stand':
            this.sourceY = 0
            this.stateCount = 3
            this.stand()
            break
          case 'run':
            this.xMultiplier = 3 * Math.random()
            this.sourceY = this.sourceHeight
            this.stateCount = 7
            this.run()
            break
          case 'jump':
            this.xMultiplier = 3 * Math.random()
            this.sourceY = this.sourceHeight
            this.stateCount = 7
            this.jump()
            //this.sourceY = this.sourceHeight * 2;
            //this.stateCount = 8;
            //this.jump();
            break
        }
        break
      case 'shadow':
        switch (this.state) {
          case 'stand':
            this.sourceY = 0
            this.stateCount = 3
            this.stand()
            break
          case 'run':
            this.xMultiplier = 3 * Math.random()
            this.sourceY = this.sourceHeight
            this.stateCount = 7
            this.run()
            break
          case 'jump':
            this.xMultiplier = 3 * Math.random()
            this.sourceY = this.sourceHeight
            this.stateCount = 7
            this.jump()
            //this.sourceY = this.sourceHeight * 2;
            //this.stateCount = 8;
            //this.jump();
            break
        }
        break
    }
  }

  draw = () => {
    this.checkSource()
    this.ctx.drawImage(
      this.img,
      this.sourceX,
      this.sourceY,
      this.sourceWidth,
      this.sourceHeight,
      this.x + this.offsetX,
      this.y + this.offsetY,
      this.sourceWidth,
      this.sourceHeight,
    )
    if (this.sourceX % (this.sourceWidth * this.stateCount) == 0) {
      this.sourceX = this.sourceWidth
    } else {
      this.sourceX += this.sourceWidth
    }
  }
}
