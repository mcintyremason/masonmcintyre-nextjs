export const INITIAL_MOUNTAINS = {
  sourceWidh: 78,
  sourceHeight: 26,
  y: 13,
}

export const INITIAL_FANS = {
  sourceWidth: 25,
  sourceHeight: 22,
  y: INITIAL_MOUNTAINS.y + INITIAL_MOUNTAINS.sourceHeight,
}

export const INITIAL_STANDS = {
  sourceWidth: 23,
  sourceHeight: 27,
  y: INITIAL_FANS.y + INITIAL_FANS.sourceHeight,
}

export const INITIAL_GRASS = {
  sourceWidth: 245,
  sourceHeight: 24,
  y: INITIAL_STANDS.y + INITIAL_STANDS.sourceHeight,
}

export const INITIAL_SHADOW_PLAYER_TRACK = {
  sourceWidth: 28,
  sourceHeight: 24,
  y: INITIAL_GRASS.y + INITIAL_GRASS.sourceHeight,
}

export const INITIAL_PLAYER_TRACK = {
  sourceWidth: 28,
  sourceHeight: 24,
  y: INITIAL_SHADOW_PLAYER_TRACK.y + INITIAL_SHADOW_PLAYER_TRACK.sourceHeight - 10,
}

export default class Background {
  canvasWidth: number
  canvasHeight: number
  boundingClientRect: DOMRect
  ctx: CanvasRenderingContext2D
  img: HTMLImageElement
  imgName: string
  name: string
  boundingWidth: number
  boundingHeight: number
  state: any
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
  resizeWidth: number
  resizeHeight: number
  trackp: Background
  tracks: Background
  grass: Background
  stands: Background
  fans: Background
  mountains: Background

  constructor(
    document: Document,
    ctx: CanvasRenderingContext2D,
    boundingClientRect: DOMRect,
    name: string,
    state: any,
    canvasWidth: number,
    canvasHeight: number,
    canvasElements: {
      mountains: Background
      grass: Background
      fans: Background
      stands: Background
      tracks: Background
      trackp: Background
    },
  ) {
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.ctx = ctx
    this.boundingClientRect = boundingClientRect
    this.img = document.createElement('img')
    this.imgName = '/img/literacy-game/backgroundSprite.png'
    this.name = name
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
    this.resizeWidth = 0
    this.resizeHeight = 0
    this.trackp = canvasElements.trackp
    this.tracks = canvasElements.tracks
    this.grass = canvasElements.grass
    this.stands = canvasElements.stands
    this.fans = canvasElements.fans
    this.mountains = canvasElements.mountains
    this.setSource()
  }

  setSource = () => {
    switch (this.name) {
      case 'trackp':
        this.sourceWidth = INITIAL_PLAYER_TRACK.sourceWidth
        this.sourceHeight = INITIAL_PLAYER_TRACK.sourceHeight
        this.sourceX = 3
        this.sourceY = 17
        this.y = INITIAL_PLAYER_TRACK.y
        break
      case 'tracks':
        this.sourceWidth = INITIAL_SHADOW_PLAYER_TRACK.sourceWidth
        this.sourceHeight = INITIAL_SHADOW_PLAYER_TRACK.sourceHeight
        this.sourceX = 3
        this.sourceY = 17
        this.y = INITIAL_SHADOW_PLAYER_TRACK.y
        break
      case 'grass':
        this.sourceWidth = INITIAL_GRASS.sourceWidth
        this.sourceHeight = INITIAL_GRASS.sourceHeight
        this.sourceX = 4
        this.sourceY = 86
        this.x = this.canvasWidth - this.sourceWidth
        this.y = INITIAL_GRASS.y
        break
      case 'stands':
        this.sourceWidth = INITIAL_STANDS.sourceWidth
        this.sourceHeight = INITIAL_STANDS.sourceHeight
        this.sourceX = 91
        this.sourceY = 110
        this.x = this.canvasWidth - this.sourceWidth
        this.y = INITIAL_STANDS.y
        break
      case 'fans':
        this.sourceWidth = INITIAL_FANS.sourceWidth
        this.sourceHeight = INITIAL_FANS.sourceHeight
        this.sourceX = 120
        this.sourceY = 110
        this.x = this.canvasWidth - this.sourceWidth
        this.y = INITIAL_FANS.y
        break
      case 'mountains':
        this.sourceWidth = INITIAL_MOUNTAINS.sourceWidh
        this.sourceHeight = INITIAL_MOUNTAINS.sourceHeight
        this.sourceX = 114
        this.sourceY = 149
        this.x = this.canvasWidth - this.sourceWidth
        this.y = INITIAL_MOUNTAINS.y
        break
      // case "wcloudsg":
      //   this.sourceWidth = 60;
      //   this.sourceHeight = 45;
      //   this.sourceX = 60;
      //   this.sourceY = 392;
      //   this.resizeWidth = 20;
      //   this.resizeHeight = 20;
      //   this.x = this.canvasWidth - this.sourceWidth;
      //   this.y = this.canvas["wcloudsg"].y - this.sourceHeight;
    }
  }

  checkSource = () => {
    switch (this.name) {
      case 'track':
        switch (this.state) {
          case 'plain':
            this.sourceY = 17
            this.stateCount = 1
            break
        }
        break
      case 'grass':
        this.sourceY = 86
        this.stateCount = 1
        break
      case 'stands':
        this.sourceY = 110
        this.stateCount = 1
        break
      case 'fans':
        this.sourceY = 110
        this.stateCount = 1
        break
      case 'mountains':
        this.sourceY = 149
        this.stateCount = 1
        break
      case 'wcloudsg':
        this.sourceY = 392
        this.stateCount = 1
    }
  }

  stretch = () => {
    this.state = 'plain'
    while (this.x < this.canvasWidth) {
      this.x += this.sourceWidth
      this.draw()
    }
    this.x = 0
  }

  scroll = () => {
    this.state = 'scroll'
    switch (this.name) {
      case 'track':
        this.offsetX = 0
        break
      case 'grass':
        this.offsetX -= 4
        break
      case 'stands':
        this.offsetX -= 2
        break
      case 'fans':
        this.offsetX -= 2
        break
      case 'mountains':
        this.offsetX -= 1
        break
      case 'wcloudsg':
        this.offsetX -= 2
    }
    while (this.x + this.offsetX < this.canvasWidth) {
      this.x += this.sourceWidth
      this.draw()
    }
    this.x = 0
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
  }
}
