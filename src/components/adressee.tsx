import { type userData } from '@/schemas/curiousProfile'
import Image from 'next/image'
import { useState } from 'react'
import { type z } from 'zod'

// TODO: create a better solution for this
// idk if it's really need tbh
const readableElapsed = (sec: number) => {
  const minute = 60
  const hour = 60 * minute
  const day = 24 * hour
  const month = 30 * day
  const year = 365 * day

  if (sec < minute) {
    return String(sec) + ' seconds'
  } else if (sec < hour) {
    const minutes = Math.ceil(sec / minute)
    return String(minutes) + ' minute' + (minutes === 1 ? '' : 's') + ' ago'
  } else if (sec < day) {
    const hours = Math.ceil(sec / hour)
    return String(hours) + ' hour' + (hours === 1 ? '' : 's') + ' ago'
  } else if (sec < month) {
    const days = Math.ceil(sec / day)
    return String(days) + ' day' + (days === 1 ? '' : 's') + ' ago'
  } else if (sec < year) {
    const months = Math.ceil(sec / month)
    return String(months) + ' month' + (months === 1 ? '' : 's') + ' ago'
  } else {
    const years = Math.ceil(sec / year)
    return String(years) + ' year' + (years === 1 ? '' : 's') + ' ago'
  }
}

export const Adressee = ({
  addresseeData,
  seconds_elapsed
}: {
  addresseeData: z.infer<typeof userData>
  seconds_elapsed: number
}) => {
  const [error, setError] = useState<boolean>(false)

  return (
    <div className="my-2 flex gap-2.5">
      {error ? (
        <div className="h-11 w-11 rounded-full bg-medium" />
      ) : (
        <Image
          src={addresseeData.avatar}
          width={48}
          height={44}
          onError={() => setError(true)}
          alt={`Avatar of ${addresseeData.username}`}
          className="aspect-square rounded-full border-4"
        />
      )}
      <div>
        <p className="text-base text-gray">{addresseeData.username}</p>
        <p className="text-base text-light">
          {readableElapsed(seconds_elapsed)}
        </p>
      </div>
    </div>
  )
}
