export const Repply = ({ repply }: { repply: string }) => {
  const repplyUrls = repply?.match(/(https?:\/\/[^\s]+)/g)

  const repplyLinks = repplyUrls
    ? repplyUrls?.reduce((acc, url) => {
        const link = `<a rel="noreferrer" target="_blank" class="text-primary" href="${url}">${url}</a>`

        return acc.replace(url, link).split('\n').join('<br/>')
      }, repply)
    : `<p>${repply}</p>`

  return (
    <span
      className="break-words text-gray"
      dangerouslySetInnerHTML={{ __html: repplyLinks || '' }}
    ></span>
  )
}
