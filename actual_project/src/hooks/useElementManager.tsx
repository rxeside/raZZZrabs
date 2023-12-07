import { useContext } from 'react'
import { PageContext } from '../context/page'

type useElementManagementReturnType = {
  selectElement: (elementID: string) => void
}

const useElementManagement = (): useElementManagementReturnType => {
  const { page, setPage } = useContext(PageContext)

  const selectElement = (elementID: string) => {
    console.log(elementID)
    setPage({
      ...page,
      selection: {
        ...page.selection,
        elementID: elementID,
      },
    })
  }

  return {
    selectElement,
  }
}

export default useElementManagement
