type StylingSlides = {
    samples: 'graphic';
    colors: string,
    styles: string,
    images: 'image',
}

type CreatingObj = {
    pasteText: 'text',
    pasteFugire: 'graphic',
    pasteImage: 'image',
}

type WorkWithText = {
    changingFont: 'text',
    changingStyle: 'text',
    changingSize: BigInt,
    changingColor: string,
    changingAlignment: string,
}

type Exporting = {
    exportFile: File,
}

type Importing = {
    importFile: File,
}

type Editor = Array<StylingSlides|CreatingObj|WorkWithText|Exporting|Importing>

type PopUpWindow = {
    deletingObj: что тут?,
}