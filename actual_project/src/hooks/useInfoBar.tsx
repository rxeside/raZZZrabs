import { Page } from '../model/main'

export const useInfoBar = (
  page: Page,
  setPage: (newPresentation: Page) => void,
) => {
  const download = () => {
    const data = JSON.stringify(page, null, 2)
    const link = document.createElement('a')
    const file = new Blob([data], { type: 'application/json' })
    link.href = URL.createObjectURL(file)
    link.download = page.title + '.json'
    link.click()
  }
  const upload = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'application/json'
    input.addEventListener('change', (event) => {
      const selectedFile = (event.target as HTMLInputElement).files?.[0]

      if (selectedFile) {
        const reader = new FileReader()
        reader.onload = () => {
          const fileContent = JSON.parse(reader.result as string)
          setPage(fileContent)
        }
        reader.readAsText(selectedFile)
      }
    })

    input.click()
  }

  return { download, upload }
}
