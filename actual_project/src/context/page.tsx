import { PropsWithChildren, createContext, useState } from 'react'
import { Page, SlideSelection as TSelection } from '../model/main'
import { maxPage } from '../tests/maxTests'

type PageContextType = {
  page: Page
  setPage: (newPage: Page) => void
}

const newSelection: TSelection = {
  elementIDS: [],
  slideID: '',
}

export const PageContext = createContext<PageContextType>({
  page: {
    selection: newSelection,
    title: '',
    slides: [],
    slideHistory: null,
  },
  setPage: () => {},
})

function PageProvider({ children }: PropsWithChildren) {
  const [page, setPage] = useState<Page>(maxPage)

  const handleSetPage = (newPage: Page) => {
    setPage({ ...newPage })
  }

  return (
    <PageContext.Provider
      value={{
        page,
        setPage: handleSetPage,
      }}
      children={children}
    />
  )
}

export default PageProvider
