import { apiError, curiousProfile } from '@/schemas/curiousProfile'

const fetchPosts = ({
  username,
  pageParams
}: {
  username: string
  pageParams?: null | number
}) =>
  fetch(
    `https://curiouscat.live/api/v2.1/profile?username=${String(username)}${
      pageParams ? '&max_timestamp=' + String(pageParams) : ''
    }`
  )
    .then((res) => res.json())
    .then((r) => {
      const parsed = curiousProfile.safeParse(r)

      if (parsed.success) {
        const posts = JSON.parse(
          JSON.stringify(parsed.data.posts)
        ) as NonNullable<typeof parsed.data.posts>
        posts.shift()

        return pageParams
          ? { data: { ...parsed.data, posts: posts } }
          : { data: parsed.data }
      }

      const error = apiError.safeParse(r)

      if (error.success) {
        return { data: error.data }
      }
    })
    .catch((error) => console.log(error))

export { fetchPosts }
