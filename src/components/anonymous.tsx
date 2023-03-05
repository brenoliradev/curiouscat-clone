export const Anonymous = ({ username }: { username: string }) => {
  return (
    <div>
      <div className="flex h-[200px] w-full items-center justify-center break-normal bg-center">
        <div className="relative top-[80px] h-[120px] w-[120px] rounded-full border-[11px] border-dark bg-medium" />
      </div>
      <div className="flex h-[180px] w-full flex-col items-center break-normal bg-dark pt-10 text-gray">
        <span className="text-3xl font-semibold">{username}</span>
        <div className="mt-2.5 mb-5 flex w-full justify-between px-5">
          <span className="text-center">
            <p className="text-2xl">...</p>
            <p className="text-sm">Followers</p>
          </span>
          <span className="text-center">
            <p className="text-2xl">...</p>
            <p className="text-sm">Answers</p>
          </span>
          <span className="text-center">
            <p className="text-2xl">...</p>
            <p className="text-sm">Following</p>
          </span>
        </div>
      </div>
      <div className="pt-16 px-5">
        <p className="text-center text-gray">
          Sorry, this profile doesn&apos;t exist!
        </p>
        <p className="text-center text-gray">
          It might have been deactivated, or maybe it never existed.
        </p>
      </div>
    </div>
  )
}
