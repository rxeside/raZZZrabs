type stylingSlides = {
    samples: 'graphic';
    colors: string,
    styles: string,
    images: 'image',
}

type creatingObj = {
    pasteText: 'text',
    pasteFugire: 'graphic',
    pasteImage: 'image',
}

type workWithText = {
    changingFont: 'text',
    changingStyle: 'text',
    changingSize: BigInt,
    changingColor: string,
    changingAlignment: string,
}

type export = {
    export: 'File',
}

type editor = Array<stylingSlides|creatingObj|workWithText>

