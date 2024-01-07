import jsPDF from 'jspdf'
import { Slide, ShapeBlock, ImageBlock, TextBlock } from '../model/main'
import { ISlideObject } from '../model/types/presentationTypes/slideObjects/ISlideObject'
import store from '../store/store'
import CanvasTextWrapper from 'canvas-text-wrapper'
import shapeBlock from '../components/common/ShapeBlock/ShapeBlock'

function isText(selectedObject: TextBlock | ImageBlock | ShapeBlock | null) {
  if (selectedObject?.elementType === 'text' && selectedObject != null) {
    return true
  }
  return false
}

function isImage(selectedObject: TextBlock | ImageBlock | ShapeBlock | null) {
  if (selectedObject?.elementType === 'image' && selectedObject != null) {
    return true
  }
  return false
}

function isShape(selectedObject: TextBlock | ImageBlock | ShapeBlock | null) {
  if (selectedObject?.elementType === 'shape' && selectedObject != null) {
    return true
  }
  return false
}

function setBackgroundImage(doc: jsPDF, image: string) {
  doc.addImage(image, 'jpg', 0, 0, 1200, 674)
}

function setBackgroundColor(doc: jsPDF, color: string) {
  doc.setFillColor(color)
  doc.rect(0, 0, 1200, 674, 'FD')
}

function addTextBox(doc: jsPDF, object: TextBlock) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (ctx) {
    const text = object.data.value
    const width = object.data.size.width
    const height = object.data.size.height
    canvas.width = width
    canvas.height = height
    ctx.fillStyle = object.data.color.hex
    ctx.strokeStyle = ctx.fillStyle
    ctx.lineWidth = 4
    CanvasTextWrapper.CanvasTextWrapper(canvas, text, {
      font: `${object.size.height}px ${object.size.height}px ${object.data.fontFamily}`,
      textAlign: object.data.horizontalAlign,
    })
    const base64 = canvas.toDataURL()
    doc.addImage(base64, 'PNG', object.x, object.y, width, height)
  }
}

function addRect(doc: jsPDF, object: ShapeBlock, mode: string) {
  doc.rect(object.x, object.y, object.width, object.height, mode)
}

function addTriangle(doc: jsPDF, object: ShapeBlock, mode: string) {
  doc.triangle(
    object.x + object.width / 2,
    object.y,
    object.x,
    object.y + object.height,
    object.x + object.width,
    object.y + object.height,
    mode,
  )
}

function addEllipse(doc: jsPDF, object: ShapeBlock, mode: string) {
  doc.ellipse(
    object.x + object.width / 2,
    object.y + object.height / 2,
    object.width / 2,
    object.height / 2,
    mode,
  )
}

function addFigure(doc: jsPDF, object: ShapeBlock) {
  // doc.setDrawColor(object.strokeColor)
  doc.setFillColor(object.data.color.hex)
  const drawingMode = 'FD' //DrawFill

  if (object.data.primitiveType === 'rectangle') {
    addRect(doc, object, drawingMode)
  } else if (object.data.primitiveType === 'triangle') {
    addTriangle(doc, object, drawingMode)
  } else if (object.data.primitiveType === 'circle') {
    addEllipse(doc, object, drawingMode)
  }
}

async function addObjectOnPage(doc: jsPDF, object: ISlideObject) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    if (isText(object)) {
      addTextBox(doc, object)
    }
    if (isShape(object)) {
      addFigure(doc, object)
    } else if (isImage(object)) {
      const base64 = object.src
      addImage(doc, object, base64)
    }

    resolve({})
  })
}

function addImage(doc: jsPDF, object: Image, base64: string) {
  doc.addImage(base64, 'PNG', object.x, object.y, object.width, object.height)
}

async function addObjectsOnPage(doc: jsPDF, objects: Array<ISlideObject>) {
  const promises = objects.map(async (slideObject) => {
    return addObjectOnPage(doc, slideObject)
  })
  await Promise.all(promises)
}

async function addSlides(doc: jsPDF, slides: Array<Slide>) {
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i]
    if (typeof slide.background === 'string') {
      setBackgroundColor(doc, slide.background)
    } else {
      await setBackgroundImage(doc, slide.background.src)
    }
    await addObjectsOnPage(doc, slide.objects)
    doc.addPage()
  }
}

export async function exportPDF() {
  const slideSize = [1200, 674]
  const doc = new jsPDF({
    unit: 'px',
    orientation: 'l',
    format: slideSize,
  })
  await addSlides(doc, store.getState().presentation.slides)
  doc.deletePage(doc.getNumberOfPages())
  doc.save(`${store.getState().presentation.name}.pdf`)
}
