import Image from 'next/image'
import { useState } from 'react'

export const ProfileAvatar = ({
  avatar,
  username
}: {
  avatar: string
  username: string
}) => {
  const [error, setError] = useState<boolean>(false)

  return error ? (
    <div className="relative top-[80px] h-[120px] w-[120px] rounded-full border-[11px] border-dark bg-medium" />
  ) : (
    <Image
      src={avatar || '/images/placeholder.png'}
      height={120}
      width={120}
      className="relative top-[80px] rounded-full border-[11px] border-dark"
      onError={() => setError(true)}
      alt={`${username || 'placeholder'} avatar image`}
    />
  )
}
