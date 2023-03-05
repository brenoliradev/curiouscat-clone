import { usePosts } from '@/hooks/usePosts'
import { Anonymous } from './anonymous'
import { ProfileAvatar } from './profileavatar'
import { UserPanel } from './userpanel'

export const Profile = ({ username }: { username: string }) => {
  const { user } = usePosts(username)

  if (user && !user.success) return <Anonymous username={username} />

  return (
    <>
      <div>
        <div
          className="flex h-[200px] w-full items-center justify-center break-normal bg-center"
          style={{ backgroundImage: `url(${user?.data.banner || ''})` }}
        >
          <ProfileAvatar
            avatar={user?.data?.avatar || '/images/placeholder.png'}
            username={user?.data?.username || ''}
          />
        </div>
        <UserPanel
          answers={user?.data?.answers || 0}
          followers_count={123}
          following_count={123}
          username={user?.data?.username || ''}
          verified={user?.data?.verified || false}
        />
      </div>
    </>
  )
}
