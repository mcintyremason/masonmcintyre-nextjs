import React, { useState } from "react";
import Canvas from "./DrawCanvas";
import Shape from "./Shape";

type DrawProps = {};
const Draw: React.FC<DrawProps> = (_: DrawProps) => {
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const [outlineColor, setOutlineColor] = useState<string>("#000000");
  const [fillColor, setFillColor] = useState<string>("#58b2fd");
  const [selectedShapeType, setSelectedShapeType] = useState<string>(
    "rectangle",
  );
  const [outline, setOutline] = useState<boolean>(true);
  const [fill, setFill] = useState<boolean>(true);
  const [shapes, setShapes] = useState<Array<Shape>>([]);
  const [reShapes] = useState<Array<Shape>>([]);
  const [currentShape, setCurrentShape] = useState<Shape>(null);
  const [isForwardDisabled, setIsForwardDisabled] = useState<boolean>(true);
  const [isBackwardDisabled, setIsBackwardDisabled] = useState<boolean>(true);
  const [isUndoDisabled, setIsUndoDisabled] = useState<boolean>(true);
  const [isRedoDisabled, setIsRedoDisabled] = useState<boolean>(true);
  const [reDraw, setReDraw] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const moveShapeForward = () => {
    if (currentShape) {
      if (shapes.indexOf(currentShape) + 1 < shapes.length) {
        const temp = shapes[shapes.indexOf(currentShape) + 1];
        shapes[shapes.indexOf(currentShape) + 1] = currentShape;
        shapes[shapes.indexOf(currentShape)] = temp;
      }
    }
    if (shapes.indexOf(currentShape) == shapes.length - 1) {
      setIsForwardDisabled(true);
    }
    if (shapes.indexOf(currentShape) - 1 > -1) {
      setIsBackwardDisabled(false);
    }
    setReDraw(true);
  };

  const moveShapeBackward = () => {
    if (currentShape != null) {
      var i = shapes.indexOf(currentShape);
      if (i - 1 > -1) {
        var t = shapes[i - 1];
        shapes[i - 1] = currentShape;
        shapes[i] = t;
      }
      if (i - 1 == 0) {
        setIsBackwardDisabled(true);
      }
      if (shapes.indexOf(currentShape) < shapes.length - 1) {
        setIsForwardDisabled(false);
      }
    }
    setReDraw(true);
  };

  const undo = () => {
    reShapes.push(shapes[shapes.length - 1]);
    shapes[shapes.length - 1] = null;
    if (shapes.length) {
      shapes.length--;
    }
    setCurrentShape(null);
    setIsForwardDisabled(true);
    setIsBackwardDisabled(true);
    setReDraw(true);
  };

  const redo = () => {
    shapes.push(reShapes[reShapes.length - 1]);
    reShapes[reShapes.length - 1] = null;
    if (reShapes.length) {
      reShapes.length--;
    }
    setIsForwardDisabled(true);
    setIsBackwardDisabled(true);
    setReDraw(true);
  };

  // const save = () => {
  //   var saveName = prompt(
  //     "Please enter the name of the file you wish to save.",
  //     "default",
  //   );
  //   let saveString = "";
  //   const shapeProps = new Array();
  //   for (var i = 0; i < shapes.length; i++) {
  //     shapes[i].properties =
  //       shapes[i].firstX +
  //       shapes[i].delim +
  //       shapes[i].firstY +
  //       shapes[i].delim +
  //       shapes[i].x +
  //       shapes[i].delim +
  //       shapes[i].y +
  //       shapes[i].delim +
  //       shapes[i].outlineColor +
  //       shapes[i].delim +
  //       shapes[i].fillColor +
  //       shapes[i].delim +
  //       shapes[i].outline +
  //       shapes[i].delim +
  //       shapes[i].fill +
  //       shapes[i].delim +
  //       shapes[i].shapeType +
  //       shapes[i].delim +
  //       shapes[i].centerX +
  //       shapes[i].delim +
  //       shapes[i].centerY +
  //       shapes[i].delim +
  //       shapes[i].text;
  //     shapeProps.push(shapes[i].properties);
  //   }
  //   for (var i = 0; i < shapeProps.length; i++) {
  //     saveString += "!" + shapeProps[i];
  //   }

  //   localStorage.setItem(saveName, saveString);
  // };

  // const load = () => {
  //   setIsLoading(true);
  //   setReDraw(true);
  // };

  return (
    <div className="drawContainer">
      <div className="drawDiv">
        <div className="drawMenuContainer">
          <h1 className="drawTitle">Draw</h1>
          <div>
            <select
              name="shapes"
              value={selectedShapeType}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                setSelectedShapeType(event.target.value);
              }}
            >
              <option value="rectangle">Rectangle</option>
              <option value="line">Line</option>
              <option value="ellipse">Ellipse</option>
              {/* <option value="text">Text</option> */}
            </select>
            <button
              type="button"
              id="undo"
              disabled={isUndoDisabled}
              onClick={undo}
            >
              Undo
            </button>
            <button
              type="button"
              id="redo"
              disabled={isRedoDisabled}
              onClick={redo}
            >
              Redo
            </button>
            {/* <button
              type="button"
              id="save"
              disabled={shapes.length === 0}
              onClick={save}
            >
              Save
            </button>
            <button type="button" id="load" onClick={load}>
              Load
            </button> */}
          </div>
          <div>
            Outline
            <input
              type="checkbox"
              name="outline"
              checked={outline}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setOutline(event.target.checked);
              }}
            />
            Fill
            <input
              type="checkbox"
              name="fill"
              checked={fill}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFill(event.target.checked);
              }}
            />
            <button
              type="button"
              id="forward"
              disabled={
                isForwardDisabled ||
                !shapes.find((shape) => shape === currentShape)
              }
              onClick={moveShapeForward}
            >
              Forward
            </button>
            <button
              type="button"
              id="backward"
              disabled={isBackwardDisabled}
              onClick={moveShapeBackward}
            >
              Backward
            </button>
          </div>
          <div>
            Background
            <input
              type="color"
              name="backgroundColor"
              value={backgroundColor}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setBackgroundColor(event.target.value);
              }}
            />
            Outline
            <input
              type="color"
              name="outlineColor"
              value={outlineColor}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setOutlineColor(event.target.value);
              }}
            />
            Fill
            <input
              type="color"
              name="fillColor"
              value={fillColor}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFillColor(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="drawCavasContainer">
          <Canvas
            width={600}
            height={600}
            backgroundColor={backgroundColor}
            outlineColor={outlineColor}
            fillColor={fillColor}
            outline={outline}
            fill={fill}
            selectedShapeType={selectedShapeType}
            shapes={shapes}
            setShapes={setShapes}
            currentShape={currentShape}
            setCurrentShape={setCurrentShape}
            reDraw={reDraw}
            setReDraw={setReDraw}
            reShapes={reShapes}
            isLoading={isLoading}
            setIsForwardDisabled={setIsForwardDisabled}
            setIsBackwardDisabled={setIsBackwardDisabled}
            setIsUndoDisabled={setIsUndoDisabled}
            setIsRedoDisabled={setIsRedoDisabled}
            setIsLoading={setIsLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Draw;
