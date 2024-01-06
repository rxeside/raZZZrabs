import { Page } from '../model/main'

const changeTitle = (page: Page, title: string) => {
  return {
    ...page,
    title: title,
  }
}

const updatePage = (newPage: any) => {
  return newPage
}

export { changeTitle, updatePage }
