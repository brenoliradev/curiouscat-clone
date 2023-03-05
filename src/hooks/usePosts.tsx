import { curiousProfile, userData } from '@/schemas/curiousProfile'
import { fetchPosts } from '@/server/fetchPost'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
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
          return profileData.data.posts?.at(-1)?.post?.timestamp
        }

        return null
      }
    }
  )

  const page = data?.pages[0]?.data

  const user = useMemo(() => {
    const temp = curiousProfile.safeParse(page)

    return temp.success
      ? {
          ...userData.safeParse(temp?.data?.userData),
          followers_count: temp.data.followers_count,
          following_count: temp.data.following_count
        }
      : null
  }, [page])

  return { data, isLoading, isError, fetchNextPage, user }
}

export { usePosts }
