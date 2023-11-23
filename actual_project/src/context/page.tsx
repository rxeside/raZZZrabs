import { PropsWithChildren, createContext, useState } from 'react'
import { Page } from '../model/main'

type PageContextType = {
  page: Page
  setPage: (newPage: Page) => void
}

export const PageContext = createContext<PageContextType>({
  page: {
    selection: null,
    title: '',
    slides: [],
    slideHistory: null,
  },
  setPage: () => {},
})

function PageProvider({ children }: PropsWithChildren) {
  const [page, setPage] = useState<Page>({
    selection: null,
    title: 'New presentation',
    slideHistory: null,
    slides: [],
  })

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
