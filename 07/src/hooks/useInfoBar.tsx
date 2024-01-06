import { useCallback } from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { DefaultRootState, useSelector } from 'react-redux'
import store from '../store/store'
import { updatePageAction } from '../store/actionCreators'

export const useInfoBar = () => {
  const page: DefaultRootState = useSelector((state) => state)

  const download = useCallback(() => {
    const data = JSON.stringify(page, null, 2)
    const link = document.createElement('a')
    const file = new Blob([data], { type: 'application/json' })
    link.href = URL.createObjectURL(file)
    link.download = page.title + '.json'
    link.click()
    link.remove()
  }, [page])

  const upload = useCallback(() => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'application/json'

    function listener(event: Event) {
      const selectedFile = (event.target as HTMLInputElement).files?.[0]

      if (selectedFile) {
        const reader = new FileReader()
        reader.onload = () => {
          const fileContent = JSON.parse(reader.result as string)
          store.dispatch(updatePageAction(fileContent))
        }
        reader.readAsText(selectedFile)
      }
    }

    input.addEventListener('change', (event) => listener(event))
    input.removeEventListener('change', (event) => listener(event))
    input.click()
    input.remove()
  }, [])

  return { download, upload }
}
