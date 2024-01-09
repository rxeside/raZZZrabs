import jsPDF from 'jspdf'
import { Slide, ShapeBlock, ImageBlock, TextBlock } from '../model/main'
import store from '../store/store'
import CanvasTextWrapper from 'canvas-text-wrapper'

function setBackgroundImage(doc: jsPDF, image: string) {
  doc.addImage(image, 'JPEG', 0, 0, 1200, 674)
}

function setBackgroundColor(doc: jsPDF, color: string, slide: Slide) {
  doc.setFillColor(slide.slideBackground.color.hex)
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
      font: `${object.data.outline.italic ? 'italic ' : ''}${
        object.data.outline.bold ? 'bold ' : ''
      }${object.data.fontSize}px ${object.data.fontFamily}`,
      textDecoration: object.data.outline.underline ? 'underline' : 'none',
      textAlign: object.data.horizontalAlign,
    })

    const base64 = canvas.toDataURL()

    doc.addImage(
      base64,
      'JPEG',
      object.startDot.x,
      object.startDot.y,
      width,
      height,
    )
  }
}

function addRect(doc: jsPDF, object: ShapeBlock, mode: string) {
  doc.rect(
    object.startDot.x,
    object.startDot.y,
    object.size.width,
    object.size.height,
    mode,
  )
}

function addTriangle(doc: jsPDF, object: ShapeBlock, mode: string) {
  doc.triangle(
    object.startDot.x + object.size.width / 2,
    object.startDot.y,
    object.startDot.x,
    object.startDot.y + object.size.height,
    object.startDot.x + object.size.width,
    object.startDot.y + object.size.height,
    mode,
  )
}

function addEllipse(doc: jsPDF, object: ShapeBlock, mode: string) {
  doc.ellipse(
    object.startDot.x + object.size.width / 2,
    object.startDot.y + object.size.height / 2,
    object.size.width / 2,
    object.size.height / 2,
    mode,
  )
}

function addShape(doc: jsPDF, object: ShapeBlock) {
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

async function addObjectOnPage(
  doc: jsPDF,
  object: TextBlock | ImageBlock | ShapeBlock,
) {
  return new Promise(async (resolve) => {
    if (object.elementType === 'text') {
      addTextBox(doc, object)
    }
    if (object.elementType === 'shape') {
      addShape(doc, object)
    } else if (object.elementType === 'image') {
      const base64 = object.data.image.data
      addImage(doc, object, base64)
    }

    resolve({})
  })
}

function addImage(doc: jsPDF, object: ImageBlock, base64: string) {
  doc.addImage(
    base64,
    'JPEG',
    object.startDot.x,
    object.startDot.y,
    object.size.width,
    object.size.height,
  )
}

async function addObjectsOnPage(
  doc: jsPDF,
  objects: Array<TextBlock | ImageBlock | ShapeBlock>,
) {
  const promises = objects.map(async (slideObject) => {
    return addObjectOnPage(doc, slideObject)
  })
  await Promise.all(promises)
}
async function addSlides(doc: jsPDF, slides: Array<Slide>) {
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i]

    if (typeof slide.slideBackground.color.hex === 'string') {
      setBackgroundColor(doc, slide.slideBackground.color.hex, slide)
    }
    if (typeof slide.slideBackground.url === 'string') {
      setBackgroundImage(doc, slide.slideBackground.url)
    }

    await addObjectsOnPage(doc, slide.slideObjects)
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
  await addSlides(doc, store.getState().slides)
  doc.deletePage(doc.getNumberOfPages())
  doc.save(`${store.getState().title}.pdf`)
}
