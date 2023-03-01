import { usePosts } from '@/hooks/usePosts'
import { Post } from './post'
import { Profile } from './profile'

export const Feed = ({ username }: { username: string }) => {
  const { data } = usePosts(username)

  if (!data) return <></>

  return (
    <section className="mx-auto flex w-full max-w-[890px] flex-col pt-16">
      <Profile username={username} />
      <div className="flex flex-col gap-2.5 pt-12 pb-12">
        {data?.posts &&
          data.posts.map((item) => (
            <Post key={item.post.id} postContent={item.post} />
          ))}
      </div>
    </section>
  )
}
