import { type userData } from '@/schemas/curiousProfile'
import { readableElapsed } from '@/utils/readableElapsed'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { type z } from 'zod'

export const Adressee = ({
  addresseeData,
  seconds_elapsed,
  verified
}: {
  addresseeData: z.infer<typeof userData>
  seconds_elapsed: number
  verified: boolean
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
      <div className="flex flex-col items-start">
        <Link
          href={`/${addresseeData.username}`}
          className="flex justify-center gap-0.5 text-sm font-semibold text-gray"
        >
          {addresseeData.username}{' '}
          {verified ? (
            <Image
              width={16}
              height={16}
              src="/images/verified.svg"
              alt="a icon with an verified error in orange"
            />
          ) : (
            <></>
          )}{' '}
        </Link>
        <p className="text-sm text-light">{readableElapsed(seconds_elapsed)}</p>
      </div>
    </div>
  )
}
