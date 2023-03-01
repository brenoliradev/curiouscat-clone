export const Comment = ({ comment }: { comment: string }) => {
  const commentUrls = comment?.match(/(https?:\/\/[^\s]+)/g)

  const commentLinks = commentUrls
    ? commentUrls?.reduce((acc, url) => {
        const link = `<a rel="noreferrer" target="_blank" class="text-primary" href="${url}">${url}</a>`

        return acc.replace(url, link).split('\n').join('<br/>')
      }, comment)
    : `<p>${comment}</p>`

  return (
    <span
      className="break-words text-gray"
      dangerouslySetInnerHTML={{ __html: commentLinks || '' }}
    ></span>
  )
}
