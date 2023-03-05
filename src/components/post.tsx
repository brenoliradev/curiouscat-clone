import { type post } from '@/schemas/curiousProfile'
import Image from 'next/image'
import { type z } from 'zod'
import { Adressee } from './adressee'
import { Message } from './message'
import { Sender } from './sender'

export const Post = ({
  postContent,
  verified
}: {
  postContent: NonNullable<z.infer<typeof post>>
  verified: boolean
}) => {
  return (
    <div className="w-full bg-dark p-2.5">
      <Message message={postContent.comment} />
      <Sender sender={postContent.senderData} />
      <Adressee
        addresseeData={postContent.addresseeData}
        seconds_elapsed={postContent.seconds_elapsed}
        verified={verified}
      />
      <Message message={postContent.reply} />
      {postContent.media && (
        <div className="mt-2.5 flex items-center justify-center">
          {postContent.media.img && !postContent.media.mp4 ? (
            <Image
              src={postContent.media.img || '/images/placeholder.png'}
              height={postContent.media.h}
              width={postContent.media.w}
              alt="media related to this post"
            />
          ) : (
            <video
              src={postContent.media.mp4}
              height={postContent.media.h}
              width={postContent.media.w}
              className="mt-2.5 flex items-center justify-center"
              controls={true}
              placeholder={'/images/placeholder.png'}
            />
          )}
        </div>
      )}
      <div className="mt-4 border-t-[1px] border-t-medium pt-2.5">
        <span className="flex gap-1.5">
          <Image
            src={'/images/like.svg'}
            width={20}
            height={20}
            alt="A hearth icon in grayscale"
          />
          <p className="text-gray">{postContent.likes}</p>
        </span>
      </div>
    </div>
  )
}
