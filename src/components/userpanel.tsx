import Image from 'next/image'

export const UserPanel = ({
  answers,
  followers_count,
  following_count,
  username,
  verified
}: {
  username: string
  followers_count?: number
  answers: number
  following_count?: number
  verified: boolean
}) => {
  return (
    <div className="flex h-[180px] w-full flex-col items-center break-normal bg-dark pt-10 text-gray">
      <span className="flex gap-1 text-3xl font-medium">
        {username}{' '}
        {verified ? (
          <Image
            width={29}
            height={29}
            src="/images/verified.svg"
            alt="a icon with an verified error in orange"
          />
        ) : (
          <></>
        )}
      </span>
      <div className="mt-2.5 mb-5 flex w-full justify-between px-5">
        {followers_count !== undefined && (
          <span className="text-center">
            <p className="mx-auto text-2xl">
              {Math.floor(followers_count / 100) / 10 > 1
                ? String(Math.floor(followers_count / 100) / 10) + 'K'
                : followers_count}
            </p>
            <p className="text-sm">Followers</p>
          </span>
        )}
        <span className="mx-auto text-center">
          <p className="text-2xl">
            {Math.floor(answers / 100) / 10 > 1
              ? String(Math.floor(answers / 100) / 10) + 'K'
              : answers}
          </p>
          <p className="text-sm">Answers</p>
        </span>
        {following_count !== undefined ? (
          <span className="text-center">
            <p className="mx-auto text-2xl">
              {Math.floor(following_count / 100) / 10 > 1
                ? String(Math.floor(following_count / 100) / 10) + 'K'
                : following_count}
            </p>
            <p className="text-sm">Following</p>
          </span>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
