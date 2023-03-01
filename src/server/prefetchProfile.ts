import { dehydrate, QueryClient } from '@tanstack/react-query'
import { fetchPosts } from './fetchPost'

export const PrefetchProfile = async (username: string) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchInfiniteQuery(
    ['curiouscat-posts', { username }],
    () => fetchPosts({ username, pageParams: null }),
    {
      getNextPageParam: (lastPage, pages) => {
        if (pages.length === 1) {
          return Date.now()
        }

        return null
      }
    }
  )

  const _dehydrate = dehydrate(queryClient)

  if (
    (_dehydrate?.queries[0]?.state?.data as { pageParams: unknown })?.pageParams
  ) {
    (
      _dehydrate?.queries[0]?.state?.data as { pageParams: unknown }
    ).pageParams = [null]
  }

  return _dehydrate
}
