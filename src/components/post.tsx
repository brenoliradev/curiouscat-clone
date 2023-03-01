import { type post } from '@/schemas/curiousProfile'
import Image from 'next/image'
import { type z } from 'zod'
import { Comment } from './comment'
import { Repply } from './repply'
import { Adressee } from './adressee'
import { Sender } from './sender'

export const Post = ({
  postContent
}: {
  postContent: z.infer<typeof post>
}) => {
  return (
    <div className="w-full bg-dark p-2.5">
      <Comment comment={postContent.comment} />
      <Sender sender={postContent.senderData} />
      <Adressee
        addresseeData={postContent.addresseeData}
        seconds_elapsed={postContent.seconds_elapsed}
      />
      <Repply repply={postContent.reply} />
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
