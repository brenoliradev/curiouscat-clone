import { usePosts } from '@/hooks/usePosts'
import Image from 'next/image'
import { useState } from 'react'

export const Profile = ({ username }: { username: string }) => {
  const { data, isLoading } = usePosts(username)

  const [error, setError] = useState<boolean>(false)

  if (!data) return <></>

  return (
    <>
      <div>
        <div
          className="flex h-[200px] w-full items-center justify-center break-normal bg-center"
          style={{ backgroundImage: `url(${data?.banner})` }}
        >
          {error || isLoading ? (
            <div className="relative top-[80px] h-[120px] w-[120px] rounded-full border-[11px] border-dark bg-medium" />
          ) : (
            <Image
              src={data?.avatar || '/images/placeholder.png'}
              height={120}
              width={120}
              className="relative top-[80px] rounded-full border-[11px] border-dark"
              onError={() => setError(true)}
              alt={`${data?.username || 'temp.png'} avatar image`}
            />
          )}
        </div>
        <div className="flex h-[180px] w-full flex-col items-center break-normal bg-dark pt-10 text-gray">
          <span className="text-3xl font-semibold">{data?.username}</span>
          <div className="mt-2.5 mb-5 flex w-full justify-between px-5">
            <span className="text-center">
              <p className="text-2xl">{data?.followers_count}</p>
              <p className="text-sm">Followers</p>
            </span>
            <span className="text-center">
              <p className="text-2xl">{data?.userData?.answers}</p>
              <p className="text-sm">Answers</p>
            </span>
            <span className="text-center">
              <p className="text-2xl">{data?.following_count}</p>
              <p className="text-sm">Following</p>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
