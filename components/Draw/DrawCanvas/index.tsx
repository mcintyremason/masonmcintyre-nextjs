import styles from './draw-canvas.module.css'

import React, { useEffect, useState } from 'react'
import Canvas from '../../Canvas'
import Shape from '../Shape'

type DrawCanvasProps = {
  width: number
  height: number
  backgroundColor?: string
  outlineColor: string
  fillColor: string
  outline: boolean
  fill: boolean
  selectedShapeType: string
  shapes: Array<Shape>
  currentShape: Shape
  reDraw: boolean
  reShapes: Array<Shape>
  isLoading: boolean
  setShapes: (value: Array<Shape>) => void
  setCurrentShape: (value: Shape) => void
  setReDraw: (value: boolean) => void
  setIsForwardDisabled: (value: boolean) => void
  setIsBackwardDisabled: (value: boolean) => void
  setIsUndoDisabled: (value: boolean) => void
  setIsRedoDisabled: (value: boolean) => void
  setIsLoading: (value: boolean) => void
}

const DrawCanvas: React.FC<DrawCanvasProps> = ({
  width = 600,
  height = 600,
  backgroundColor = '#ffffff',
  outlineColor = '#000000',
  fillColor = '#ffffff',
  outline = true,
  fill = false,
  selectedShapeType = 'rectangle',
  shapes = [],
  currentShape,
  reDraw,
  reShapes,
  isLoading,
  setShapes,
  setCurrentShape,
  setReDraw,
  setIsForwardDisabled,
  setIsBackwardDisabled,
  setIsUndoDisabled,
  setIsRedoDisabled,
  setIsLoading,
}) => {
  const [ctx, setCtx] = useState<CanvasRenderingContext2D>(null)
  const [rect, setRect] = useState<any>([])
  const [moving, setMoving] = useState<boolean>(false)
  const [oldX, setOldX] = useState<number>(0)
  const [oldY, setOldY] = useState<number>(0)
  const [newX, setNewX] = useState<number>(0)
  const [newY, setNewY] = useState<number>(0)
  const [dispX, setDispX] = useState<number>(0)
  const [dispY, setDispY] = useState<number>(0)

  const moveShape = (shape: Shape) => {
    if (moving) {
      setDispX(newX - oldX)
      setDispY(newY - oldY)
      shape.firstX += dispX
      shape.x += dispX
      shape.firstY += dispY
      shape.y += dispY
      shape.centerX = shape.firstX + (shape.x - shape.firstX) / 2
      shape.centerY = shape.firstY + (shape.y - shape.firstY) / 2
      setOldX(newX)
      setOldY(newY)
    }
  }

  // Effect when the currentShape changes
  useEffect(() => {
    // Set disabled prop for forward & backward buttons
    if (shapes.indexOf(currentShape) < shapes.length - 1) {
      setIsForwardDisabled(false)
    } else {
      setIsForwardDisabled(true)
    }
    if (shapes.indexOf(currentShape) > 0) {
      setIsBackwardDisabled(false)
    } else {
      setIsBackwardDisabled(true)
    }
  }, [currentShape])

  // Move the shape to their new X and Y coordinates, based on the mouse pointer position
  useEffect(() => {
    moveShape(currentShape)
  }, [newX, newY])

  // Load in saved shapes from local storage
  useEffect(() => {
    if (isLoading) {
      load()
      setIsLoading(false)
    }
  }, [isLoading])

  const onMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    setOldX(e.pageX - rect.left)
    setOldY(e.pageY - rect.top)

    if (isInShape(e) === false) {
      if (currentShape != null) currentShape.selected = false

      setCurrentShape(
        new Shape(ctx, rect, e, outline, fill, outlineColor, fillColor, selectedShapeType),
      )
    }

    setMoving(true)
    mouse(e)
  }

  const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (moving) {
      mouse(e)
    }

    requestAnimationFrame(() => {
      setReDraw(true)
    })
  }

  const onMouseUp = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    mouse(e)
    setMoving(false)
    // if (currentShape?.shapeType === "text") {
    //   let drawtext = prompt("Please enter the text you wish to draw.", "Text");
    //   if (drawtext != null) {
    //     currentShape.text = drawtext;
    //     currentShape.toPush = true;
    //   }
    // }
    if (currentShape?.toPush === true) {
      // check if the shape actually has a width before adding it to the array of shapes
      if (Math.abs(currentShape.x - currentShape.firstX) > 0) {
        setShapes([...shapes, currentShape])
      }
      currentShape.toPush = false
      currentShape.selected = false
    }
    setReDraw(true)
  }

  const onMouseLeave = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    mouse(e)
    setMoving(false)
    setReDraw(true)
  }

  const mouse = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (currentShape) {
      if (currentShape?.selected === false) {
        if (moving) {
          if (selectedShapeType != null) {
            currentShape.x = e.pageX - currentShape.rect.left
            currentShape.y = e.pageY - currentShape.rect.top
            currentShape.centerX = currentShape.firstX + (currentShape.x - currentShape.firstX) / 2
            currentShape.centerY = currentShape.firstY + (currentShape.y - currentShape.firstY) / 2
          }
        }

        currentShape.draw()
      } else {
        setNewX(e.pageX - rect.left)
        setNewY(e.pageY - rect.top)
      }
    }
  }

  const draw = (ctx: CanvasRenderingContext2D, boundingClientRect?: DOMRect) => {
    // Store the canvas context in state, so we can access it in event handlers
    if (ctx) {
      setCtx(ctx)
    }

    // Store the bounding rectagle of the canvas in state, so we can access it in event handlers
    if (boundingClientRect) {
      setRect(boundingClientRect)
    }

    // Ensure the ctx has been instantiated
    if (ctx) {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, width, height)

      for (let i = 0; i < shapes.length; i++) {
        shapes[i].draw()
        if (shapes[i].selected === true) {
          ctx.strokeStyle = outlineColor
          if (shapes[i].firstX < shapes[i].x && shapes[i].firstY > shapes[i].y)
            ctx.strokeRect(
              shapes[i].firstX - 5,
              shapes[i].firstY + 5,
              shapes[i].x - shapes[i].firstX + 10,
              shapes[i].y - shapes[i].firstY - 10,
            )
          else if (shapes[i].firstX > shapes[i].x && shapes[i].firstY > shapes[i].y)
            ctx.strokeRect(
              shapes[i].firstX + 5,
              shapes[i].firstY + 5,
              shapes[i].x - shapes[i].firstX - 10,
              shapes[i].y - shapes[i].firstY - 10,
            )
          else if (shapes[i].firstX < shapes[i].x && shapes[i].firstY < shapes[i].y)
            ctx.strokeRect(
              shapes[i].firstX - 5,
              shapes[i].firstY - 5,
              shapes[i].x - shapes[i].firstX + 10,
              shapes[i].y - shapes[i].firstY + 10,
            )
          else if (shapes[i].firstX > shapes[i].x && shapes[i].firstY < shapes[i].y)
            ctx.strokeRect(
              shapes[i].firstX + 5,
              shapes[i].firstY - 5,
              shapes[i].x - shapes[i].firstX - 10,
              shapes[i].y - shapes[i].firstY + 10,
            )
        }
      }

      // Enable/disable undo & redo buttons
      if (shapes.length === 0) {
        setIsUndoDisabled(true)
      } else {
        setIsUndoDisabled(false)
      }

      if (reShapes.length === 0) {
        setIsRedoDisabled(true)
      } else {
        setIsRedoDisabled(false)
      }
      if (currentShape != null && currentShape.selected === false) {
        currentShape.draw()
      }
    }
  }

  const isInShape = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    let x = e.pageX - rect.left
    let y = e.pageY - rect.top
    let inDomain = false
    let inRange = false
    let ret = false
    let found = false

    if (currentShape != null) currentShape.selected = false

    if (shapes.length > 0) {
      let i = shapes.length - 1

      while (found != true && i >= 0) {
        const shape = shapes[i]
        switch (shape.shapeType) {
          case 'rectangle':
            if (shape.fill === true) {
              if (x > shape.firstX && x < shape.x) inDomain = true
              else if (x < shape.firstX && x > shape.x) inDomain = true
              else inDomain = false
              if (y > shape.firstY && y < shape.y) inRange = true
              else if (y < shape.firstY && y > shape.y) inRange = true
              else inRange = false
              if (inDomain === true && inRange === true) {
                ret = true
                shapes[i].selected = true
                setCurrentShape(shapes[i])
                found = true
                break
              }
              inDomain = false
              inRange = false
            }
            break
          case 'ellipse':
            if (shape.fill === true) {
              if (x > shape.firstX && x < shape.x) inDomain = true
              else if (x < shape.firstX && x > shape.x) inDomain = true
              else inDomain = false
              if (y > shape.firstY && y < shape.y) inRange = true
              else if (y < shape.firstY && y > shape.y) inRange = true
              else inRange = false
              if (inDomain === true && inRange === true) {
                ret = true
                setCurrentShape(shape)
                currentShape.selected = true
                found = true
                break
              }
              inDomain = false
              inRange = false
            }
            break
        }
        i--
      }
    }
    return ret
  }

  const load = () => {
    // Set reDraw to true, so we can load the ctx into state
    setReDraw(true)
    var loadname = prompt('Please enter the name of the file wish to load.', 'default')
    var loadstring = localStorage.getItem(loadname)
    if (loadstring != null) {
      var loadarray = loadstring.split('!')

      for (var i = 1; i < loadarray.length; i++) {
        var shape = new Shape(
          ctx,
          rect,
          {} as any,
          outline,
          fill,
          outlineColor,
          fillColor,
          selectedShapeType,
        )
        var parseload = loadarray[i].split(',')
        shape.firstX = parseFloat(parseload[0])
        shape.firstY = parseFloat(parseload[1])
        shape.x = parseFloat(parseload[2])
        shape.y = parseFloat(parseload[3])
        shape.outlineColor = parseload[4]
        shape.fillColor = parseload[5]
        if (parseload[6] == 'true') shape.outline = true
        else shape.outline = false
        if (parseload[7] == 'true') shape.fill = true
        else shape.fill = false
        shape.shapeType = parseload[8]
        shape.centerX = parseFloat(parseload[9])
        shape.centerY = parseFloat(parseload[10])
        shape.text = parseload[11]
        shape.toPush = false
        shapes.push(shape)
      }

      shapes.map((shape) => shape.draw())
    }
  }

  return (
    <Canvas
      className={styles['draw-canvas']}
      width={width}
      height={height}
      draw={draw}
      reDraw={reDraw}
      setReDraw={setReDraw}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    />
  )
}

export default DrawCanvas
