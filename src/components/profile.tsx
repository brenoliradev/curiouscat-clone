import { usePosts } from '@/hooks/usePosts'
import { curiousProfile } from '@/schemas/curiousProfile'
import { Anonymous } from './anonymous'
import { ProfileAvatar } from './profileavatar'
import { UserPanel } from './userpanel'

export const Profile = ({ username }: { username: string }) => {
  const { data } = usePosts(username)

  const userData = curiousProfile.safeParse(data?.pages[0]?.data)

  if (!userData.success) return <Anonymous username={username} />

  return (
    <>
      <div>
        <div
          className="flex h-[200px] w-full items-center justify-center break-normal bg-center"
          style={{ backgroundImage: `url(${userData?.data.banner || ''})` }}
        >
          <ProfileAvatar
            avatar={userData?.data?.avatar}
            username={userData?.data?.username}
          />
        </div>
        <UserPanel
          answers={userData.data.answers}
          followers_count={userData.data.followers_count}
          following_count={userData.data.following_count}
          username={userData.data.username}
        />
      </div>
    </>
  )
}
