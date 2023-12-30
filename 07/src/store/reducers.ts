import useAddImage from '../hooks/useAddImage'
import {useDraggableElement} from '../hooks/useDraggableElement'
import {useDraggableList} from '../hooks/useDraggableList'
import useElementManager from '../hooks/useElementManager'
import {useInfoBar} from '../hooks/useInfoBar'
import useSlideBackground from '../hooks/useSlideBackground'
import useSlideManager from '../hooks/useSlideManager'
import useTextElementManager from '../hooks/useTextElementManager'
import { combineReducers } from 'redux'
import pageProvider from '../context/page'

import {
    IMPORT_PRESENTATION,
    CHANGE_PRESENTATION_TITLE,
    ADD_SLIDE,
    CREATE_SLIDE,
    SELECT_SLIDE,
    SET_BACKGROUND_SLIDE,
    MOVE_SLIDE,
    DELETE_SLIDE,
    SELECT_OBJECT,
    DELETE_OBJECT,
    RESIZE_OBJECT,
    MOVE_OBJECT,
    SET_COLOR_PRIMITIVE,
    CREATE_PRIMITIVE,
    SET_STROKECOLOR_FIGURE,
    CREATE_IMAGE,
    CREATE_TEXTBOX,
    SET_TEXT,
    CHANGE_TEXT_COLOR,
    CHANGE_TEXT_SIZE,
    CHANGE_FONT,
    CHANGE_TEXT_STYLE,
} from './actions'

import {
    ImageTypeVariation,
    PrimitiveType,
    VerticalAlignType,
    HorizontalAlignType,
    ElementType,
    BorderStyleType,
    Page,
    Slide,
    BackgroundType,
    ImageBlock,
    ImageType,
    ShapeBlock,
    TextBlock,
    OutlineType,
    BorderType,
    ColorType,
    Size,
    ApplicationState
} from '../model/main'
import { setBackgroundSlide } from './actionCreators'
import { generateId } from '../IdGenerator'


// const defaultApplication: ApplicationState = pageProvider()
//
// const applicationReducers = (state = defaultApplication, action: any) => {
//     switch (action.type) {
//         case IMPORT_PRESENTATION:
//             return action.app
//         case SET_BACKGROUND_SLIDE:
//             return setBackgroundSlide(state, action.background)
//         case MOVE_SLIDE:
//             return moveSlides(state, action.delta)
//         case DELETE_SLIDE:
//             return deleteSlides(state, action.slideId)
//         case MOVE_OBJECT:
//             return moveObject(state, action.payload)
//         case RESIZE_OBJECT:
//             return resizeObject(state, action.payload)
//         case DELETE_OBJECT:
//             return removeObject(state)
//         case CREATE_PRIMITIVE:
//             return addFigure(state, action.figureType)
//         case SET_COLOR_PRIMITIVE:
//             return setFigureColor(state, action.color)
//         case SET_STROKECOLOR_FIGURE:
//             return setStrokeFigureColor(state, action.color)
//         case CREATE_IMAGE:
//             return addImage(state, action.src)
//         case CREATE_TEXTBOX:
//             return addTextbox(state)
//         case SET_TEXT:
//             return setText(state, action.payload)
//         case CHANGE_TEXT_COLOR:
//             return changeTextColor(state, action.color)
//         case CHANGE_TEXT_SIZE:
//             return changeTextSize(state, action.size)
//         case CHANGE_FONT:
//             return changeFont(state, action.font)
//         case CHANGE_TEXT_STYLE:
//             return changeTextStyle(state, action.styles)
//         default:
//             if((action.type !== SELECT_OBJECT) && (action.type !== SELECT_SLIDE) && (action.type !== UNSELECT_OBJECT) && (action.type !== UNSELECT_SLIDE)) {
//
//             }
//             return {
//                 presentation: presentationReducers(state.presentation, action),
//                 selection: selectionReducers(state.selection, action),
//             }
//     }
// }
//
// const selectionReducers = (state = createSelection(), action: any) => {
//     return {
//         slideId: selectedSlide(state.slideId, action),
//         objectIds: selectedObjects(state.objectIds, action),
//     }
// }
//
// const selectedSlide = (state = "", action: any) => {
//     switch (action.type) {
//         case SELECT_SLIDE:
//             return action.slideId
//         default:
//             return state
//     }
// }
//
// const selectedObjects = (state: Array<string> = [], action: any) => {
//     switch (action.type) {
//         case SELECT_OBJECT:
//             return state.concat(action.objectId)
//         default:
//             return state
//     }
// }
//
// const presentationReducers = (state = defaultApplication.presentation, action: any) => {
//     return {
//         name: title(state.title, action),
//         slides: slides(state.slides, action),
//     }
// }
//
// const slides = (state: Array<Slide> = [], action: any) => {
//     switch (action.type) {
//         case ADD_SLIDE:
//             return state.concat(action.slide)
//         case CREATE_SLIDE:
//             return state.concat({id: generateId(), objects: [], background: '#FFF'})
//         default:
//             return state
//     }
// }
//
// const title = (state = 'New Presentaton', action: any) => {
//     if (action.type === CHANGE_PRESENTATION_TITLE) {
//         return action.title
//     } else {
//         return state
//     }
// }
//
// export {
//     applicationReducers,
// }


const initialState: ApplicationState = {
    presentation: {
        slides: [],
        slideHistory: null,
        selection: { slideID: null, elementID: null },
        title: 'Untitled Presentation',
    },
    selection: { slideID: null, elementID: null },
};

// Редуктор для управления состоянием приложения
function presentationReducer(state: ApplicationState = initialState, action: any): ApplicationState {
    switch (action.type) {
        case IMPORT_PRESENTATION:
            // Импорт данных презентации
            return { ...action.app };

        case CHANGE_PRESENTATION_TITLE:
            // Изменение заголовка презентации
            return { ...state, presentation: { ...state.presentation, title: action.title } };

        case ADD_SLIDE:
            // Добавление слайдa
            return { ...state, presentation: { ...state.presentation, slides: [...state.presentation.slides, action.slide] } };

        case CREATE_SLIDE:
            // Логика создания нового слайда
            const newSlide: Slide = {
                slideObjects: [],
                slideID: `slide_${state.presentation.slides.length + 1}`,
                slideBackground: { color: { hex: '#ffffff', opacity: 1 } },
            };
            return { ...state, presentation: { ...state.presentation, slides: [...state.presentation.slides, newSlide], selection: { slideID: newSlide.slideID, elementID: null } } } as ApplicationState;

        case SELECT_SLIDE:
            // Выбор слайда
            return { ...state, presentation: { ...state.presentation, selection: { slideID: action.slideId, elementID: null } } };

        case SET_BACKGROUND_SLIDE:
            // Установка фона слайда
            return {
                ...state,
                presentation: {
                    ...state.presentation,
                    slides: state.presentation.slides.map(slide =>
                        slide.slideID === state.presentation.selection.slideID
                            ? { ...slide, slideBackground: action.background }
                            : slide
                    ),
                },
            };

        case MOVE_SLIDE:
            // Логика перемещения слайда
            const selectedIndex = state.presentation.slides.findIndex(slide => slide.slideID === state.presentation.selection.slideID);
            if (selectedIndex !== -1 && selectedIndex + action.delta >= 0 && selectedIndex + action.delta < state.presentation.slides.length) {
                const newSlidesOrder = [...state.presentation.slides];
                [newSlidesOrder[selectedIndex], newSlidesOrder[selectedIndex + action.delta]] = [
                    newSlidesOrder[selectedIndex + action.delta],
                    newSlidesOrder[selectedIndex],
                ];
                return { ...state, presentation: { ...state.presentation, slides: newSlidesOrder } };
            }
            return state;

        case DELETE_SLIDE:
            // Логика удаления слайда
            const updatedSlides = state.presentation.slides.filter(slide => slide.slideID !== action.slideId);
            const newSelectedSlideId = updatedSlides.length > 0 ? updatedSlides[0].slideID : null;
            return {
                ...state,
                presentation: { ...state.presentation, slides: updatedSlides, selection: { slideID: newSelectedSlideId, elementID: null } },
            };

        case SELECT_OBJECT:
            // Выбор объекта
            return { ...state, presentation: { ...state.presentation, selection: { ...state.presentation.selection, elementID: action.objectId } } };

        case DELETE_OBJECT:
            // Логика удаления объекта
            if (state.presentation.selection.slideID && state.presentation.selection.elementID) {
                const updatedSlide = state.presentation.slides.find(slide => slide.slideID === state.presentation.selection.slideID);
                if (updatedSlide) {
                    const updatedObjects = updatedSlide.slideObjects.filter(
                        obj => obj.id !== state.presentation.selection.elementID
                    );
                    return {
                        ...state,
                        presentation: {
                            ...state.presentation,
                            slides: state.presentation.slides.map(slide =>
                                slide.slideID === state.presentation.selection.slideID
                                    ? { ...slide, slideObjects: updatedObjects }
                                    : slide
                            ),
                            selection: { ...state.presentation.selection, elementID: null },
                        },
                    };
                }
            }
            return state;

        case RESIZE_OBJECT:
            // Логика изменения размера объекта
            if (state.presentation.selection.slideID && state.presentation.selection.elementID) {
                const updatedSlide = state.presentation.slides.find(
                    slide => slide.slideID === state.presentation.selection.slideID
                );
                if (updatedSlide) {
                    const updatedObjects = updatedSlide.slideObjects.map(obj =>
                        obj.id === state.presentation.selection.elementID ? { ...obj, size: action.payload } : obj
                    );
                    return {
                        ...state,
                        presentation: {
                            ...state.presentation,
                            slides: state.presentation.slides.map(slide =>
                                slide.slideID === state.presentation.selection.slideID
                                    ? { ...slide, slideObjects: updatedObjects }
                                    : slide
                            ),
                        },
                    };
                }
            }
            return state;

        case MOVE_OBJECT:
            // Логика перемещения объекта
            if (state.presentation.selection.slideID && state.presentation.selection.elementID) {
                const updatedSlide = state.presentation.slides.find(
                    slide => slide.slideID === state.presentation.selection.slideID
                );
                if (updatedSlide) {
                    const updatedObjects = updatedSlide.slideObjects.map(obj =>
                        obj.id === state.presentation.selection.elementID
                            ? { ...obj, startDot: { x: action.payload.x, y: action.payload.y } }
                            : obj
                    );
                    return {
                        ...state,
                        presentation: {
                            ...state.presentation,
                            slides: state.presentation.slides.map(slide =>
                                slide.slideID === state.presentation.selection.slideID
                                    ? { ...slide, slideObjects: updatedObjects }
                                    : slide
                            ),
                        },
                    };
                }
            }
            return state;

        case CREATE_PRIMITIVE:
            // Создание примитива
            if (state.presentation.selection.slideID) {
                const updatedSlide = state.presentation.slides.find(
                    slide => slide.slideID === state.presentation.selection.slideID
                );
                if (updatedSlide) {
                    const newPrimitive: ShapeBlock = {
                        elementType: ElementType.SHAPE,
                        id: `primitive_${updatedSlide.slideObjects.length + 1}`,
                        startDot: { x: 0, y: 0 },
                        size: { height: 50, width: 50 },
                        data: {
                            primitiveType: action.primitiveType,
                            color: {hex: '#FF0000', opacity: 1},
                            size: {
                                height: 100,
                                width: 100
                            }
                        },
                    };
                    return {
                        ...state,
                        presentation: {
                            ...state.presentation,
                            slides: state.presentation.slides.map(slide =>
                                slide.slideID === state.presentation.selection.slideID
                                    ? { ...slide, slideObjects: [...slide.slideObjects, newPrimitive] }
                                    : slide
                            ),
                            selection: { ...state.presentation.selection, elementID: newPrimitive.id },
                        },
                    };
                }
            }
            return state;

        // case SET_COLOR_PRIMITIVE:
        //     // Установка цвета для фигуры
        //     if (state.presentation.selection.slideID && state.presentation.selection.elementID) {
        //         const updatedSlide = state.presentation.slides.find(
        //             slide => slide.slideID === state.presentation.selection.slideID
        //         );
        //
        //         if (updatedSlide) {
        //             const updatedObjects = updatedSlide.slideObjects.map(obj =>
        //                 obj.id === state.presentation.selection.elementID ? { ...obj, data: { ...obj.data, color: action.color } } : obj
        //             );
        //             return {
        //                 ...state,
        //                 presentation: {
        //                     ...state.presentation,
        //                     slides: state.presentation.slides.map(slide =>
        //                         slide.slideID === state.presentation.selection.slideID
        //                             ? { ...slide, slideObjects: updatedObjects }
        //                             : slide
        //                     ),
        //                 },
        //             };
        //         }
        //     }
        //     return state;

        default:
            return state;
    }
}

export default presentationReducer;