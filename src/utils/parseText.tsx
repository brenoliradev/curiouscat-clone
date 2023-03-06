const urlRegex = /(?:https?:\/\/)(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,}(?::\d{1,5})?(?:\/[\w-./?=&#%]*)?/gi

export const parseText = (text: string) => {
  const escapedText = text
    .replaceAll(/</g, '&lt;')
    .replaceAll(/<[/]/g, '&lt;&#47;')
    .replaceAll(/>/g, '&gt;')
  const textUrls = text?.match(urlRegex)

  const textLinks = textUrls
    ? textUrls?.reduce((acc, url) => {
        const link = `<a rel="noreferrer" target="_blank" class="text-primary" href="${url}">${url}</a>`

        return acc.replace(url, link).split('\n').join('<br/>')
      }, escapedText)
    : escapedText

  return textLinks
}
