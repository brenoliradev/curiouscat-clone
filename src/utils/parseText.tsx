export const parseText = (text: string) => {
  const escapedText = text
    .replaceAll(/</g, '&lt;')
    .replaceAll(/<[/]/g, '&lt;&#47;')
    .replaceAll(/>/g, '&gt;')
  const textUrls = text?.match(/(https?:\/\/[^\s]+)/g)

  const textLinks = textUrls
    ? textUrls?.reduce((acc, url) => {
        const link = `<a rel="noreferrer" target="_blank" class="text-primary" href="${url}">${url}</a>`

        return acc.replace(url, link).split('\n').join('<br/>')
      }, escapedText)
    : escapedText

  return textLinks
}
