import styles from './senior-project-canvas.module.css'

import { Grid } from '@material-ui/core'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import Canvas from '../../Canvas'
import Background from '../Background'
import Player from '../Player'

type SeniorProjectCanvas = {}

const SeniorProjectCanvas: React.FC<SeniorProjectCanvas> = (_: SeniorProjectCanvas) => {
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>(null)
  const [rect, setRect] = useState<DOMRect>(null)
  const [reDraw, setReDraw] = useState<boolean>(false)
  const [background] = useState<string>('#43B4FB')
  const [width] = useState<number>(920)
  const [height] = useState<number>(163)
  const [mountains, setMountains] = useState<Background>(null)
  const [stands, setStands] = useState<Background>(null)
  const [fans, setFans] = useState<Background>(null)
  const [grass, setGrass] = useState<Background>(null)
  const [shadowPlayerTrack, setShadowPlayerTrack] = useState<Background>(null)
  const [playerTrack, setPlayerTrack] = useState<Background>(null)
  const [player, setPlayer] = useState<Player>(null)
  const [shadowPlayer, setShadowPlayer] = useState<Player>(null)
  // const [canvas, setCanvas] = useState<HTMLCanvasElement>(null);

  const draw = (ctx: CanvasRenderingContext2D, boundingClientRect?: DOMRect) => {
    // Store the canvas context in state, so we can access it in event handlers
    if (ctx) {
      setCtx(ctx)
    }

    // Store the bounding rectagle of the canvas in state, so we can access it in event handlers
    if (boundingClientRect) {
      setRect(boundingClientRect)
    }

    if (ctx) {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = background
      ctx.fillRect(0, 0, width, height)
      mountains?.draw()
      mountains?.scroll()
      stands?.draw()
      stands?.scroll()
      fans?.draw()
      fans?.scroll()
      grass?.draw()
      grass?.scroll()
      shadowPlayerTrack?.draw()
      shadowPlayerTrack?.stretch()
      playerTrack?.draw()
      playerTrack?.stretch()

      shadowPlayer?.draw()
      player?.draw()
    }
  }

  const canvasOnClick = (_: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    player.setState('jump')
  }

  const addEventListeners = () => {
    window.addEventListener('keyup', (e) => {
      switch (e.code) {
        case 'Space':
          player?.setState('jump')
          break
        default:
          break
      }
    })
  }

  // // methods
  const initComponents = () => {
    setInterval(() => {
      setReDraw(true)
    }, 100)
  }

  useEffect(() => {
    // Only instantiate Background & Player classes when the canvas rendering context is available
    if (ctx) {
      setMountains(
        new Background(window.document, ctx, rect, 'mountains', 'scroll', width, height, {
          mountains: mountains,
          stands: stands,
          fans: fans,
          grass: grass,
          tracks: shadowPlayerTrack,
          trackp: playerTrack,
        }),
      )

      setStands(
        new Background(window.document, ctx, rect, 'stands', 'scroll', width, height, {
          mountains: mountains,
          stands: stands,
          fans: fans,
          grass: grass,
          tracks: shadowPlayerTrack,
          trackp: playerTrack,
        }),
      )

      setFans(
        new Background(window.document, ctx, rect, 'fans', 'scroll', width, height, {
          mountains: mountains,
          stands: stands,
          fans: fans,
          grass: grass,
          tracks: shadowPlayerTrack,
          trackp: playerTrack,
        }),
      )

      setGrass(
        new Background(window.document, ctx, rect, 'grass', 'scroll', width, height, {
          mountains: mountains,
          stands: stands,
          fans: fans,
          grass: grass,
          tracks: shadowPlayerTrack,
          trackp: playerTrack,
        }),
      )

      setShadowPlayerTrack(
        new Background(window.document, ctx, rect, 'tracks', 'scroll', width, height, {
          mountains: mountains,
          stands: stands,
          fans: fans,
          grass: grass,
          tracks: shadowPlayerTrack,
          trackp: playerTrack,
        }),
      )

      setPlayerTrack(
        new Background(window.document, ctx, rect, 'trackp', 'scroll', width, height, {
          mountains: mountains,
          stands: stands,
          fans: fans,
          grass: grass,
          tracks: shadowPlayerTrack,
          trackp: playerTrack,
        }),
      )

      setPlayer(new Player(ctx, rect, 'lucas', 'run', '/img/literacy-game/maleCharacter.png'))

      setShadowPlayer(
        new Player(ctx, rect, 'shadow', 'run', '/img/literacy-game/maleShadowCharacter.png'),
      )

      initComponents()
    }
  }, [ctx])

  useEffect(() => {
    player && addEventListeners()
  }, [player])

  return (
    <Grid className={styles['canvas-ontainer']}>
      <Canvas
        className={classNames(styles['canvas'])}
        draw={draw}
        reDraw={reDraw}
        setReDraw={setReDraw}
        onClick={canvasOnClick}
      />
    </Grid>
  )
}

export default SeniorProjectCanvas
