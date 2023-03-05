import { usePosts } from '@/hooks/usePosts'
import { curiousProfile } from '@/schemas/curiousProfile'

import InfiniteScroll from 'react-infinite-scroll-component'
import { Post } from './post'
import { Status } from './status'

export const Feed = ({ username }: { username: string }) => {
  const { data, isError, fetchNextPage, user } = usePosts(username)

  if (data?.pages && isError) return <></>
  if (!user?.success) return <></>

  const loadNextPage = () => {
    void fetchNextPage()
  }

  return (
    <InfiniteScroll
      next={loadNextPage}
      dataLength={(data?.pages.length || 1) * 29 + 1}
      hasMore={(data?.pages.length || 1) * 29 + 1 < user.data.answers}
      loader={<></>}
      className="flex flex-col gap-2.5 pt-12"
    >
      {data?.pages &&
        data.pages.map((page) => {
          const pageData = curiousProfile.safeParse(page?.data)

          if (pageData.success) {
            if (!pageData.data.answers) {
              return (
                <div key={pageData.data.id} className="pt-16">
                  <p className="text-center text-gray">Your profile is empty</p>
                  <p className="text-center text-gray">
                    The questions you answer will show up here...
                  </p>
                </div>
              )
            }

            return pageData?.data?.posts?.map((item) => {
              if (item.status)
                return (
                  <Status
                    verified={user.data?.verified}
                    key={item.status.id}
                    statusContent={item.status}
                  />
                )

              if (item.post)
                return (
                  <Post
                    key={item.post.id}
                    postContent={item.post}
                    verified={user.data?.verified}
                  />
                )
            })
          }

          return <></>
        })}
    </InfiniteScroll>
  )
}
