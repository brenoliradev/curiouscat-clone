import { curiousProfile } from '@/schemas/curiousProfile'
import { fetchPosts } from '@/server/fetchPost'
import { useInfiniteQuery } from '@tanstack/react-query'
import { z } from 'zod'

const usePosts = (username: string) => {
  const { data, isLoading, isError, fetchNextPage } = useInfiniteQuery(
    ['curiouscat-posts', { username }],
    ({ pageParam }) => {
      const timestamp = z.number().safeParse(pageParam)

      if (timestamp.success) {
        return fetchPosts({ username, pageParams: timestamp.data })
      }

      return fetchPosts({ username })
    },
    {
      getNextPageParam: (lastPage) => {
        const profileData = curiousProfile.safeParse(lastPage?.data)

        if (profileData && profileData.success) {
          return profileData.data.posts?.at(-1)?.post.timestamp
        }

        return null
      }
    }
  )

  const userData = curiousProfile.safeParse(data?.pages[0]?.data)

  return { data, isLoading, isError, fetchNextPage, userData }
}

export { usePosts }
