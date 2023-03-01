export const UserPanel = ({
  answers,
  followers_count,
  following_count,
  username
}: {
  username: string
  followers_count?: number
  answers: number
  following_count?: number
}) => {
  return (
    <div className="flex h-[180px] w-full flex-col items-center break-normal bg-dark pt-10 text-gray">
      <span className="text-3xl font-semibold">{username}</span>
      <div className="mt-2.5 mb-5 flex w-full justify-between px-5">
        {followers_count !== undefined && (
          <span className="text-center">
            <p className="mx-auto text-2xl">{followers_count}</p>
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
            <p className="mx-auto text-2xl">{following_count}</p>
            <p className="text-sm">Following</p>
          </span>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
