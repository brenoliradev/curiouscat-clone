import { type status } from '@/schemas/curiousProfile'
import Image from 'next/image'
import { type z } from 'zod'
import { Message } from './message'

export const Status = ({
  statusContent,
  verified
}: {
  statusContent: NonNullable<z.infer<typeof status>>
  verified: boolean
}) => {
  return (
    <div className="w-full bg-dark p-2.5">
      <Message message={statusContent.status} />
      <div className="flex items-center gap-1">
        <p className="text-sm font-semibold text-primary">
          {statusContent.author.username}
        </p>{' '}
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
      </div>
      <div className="mt-4 border-t-[1px] border-t-medium pt-2.5">
        <span className="flex gap-1.5">
          <Image
            src={'/images/like.svg'}
            width={20}
            height={20}
            alt="A hearth icon in grayscale"
          />
          <p className="text-gray">{statusContent.likes}</p>
        </span>
      </div>
    </div>
  )
}
