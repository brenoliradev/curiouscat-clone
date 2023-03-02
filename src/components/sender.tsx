import { type senderData, userData } from '@/schemas/curiousProfile'
import Link from 'next/link'
import { type z } from 'zod'

export const Sender = ({ sender }: { sender: z.infer<typeof senderData> }) => {
  const isVisible = userData.safeParse(sender)

  return isVisible.success ? (
    <p>
      <Link
        href={`/${isVisible.data.username}`}
        className="text-sm text-primary"
      >
        {isVisible.data.username}
      </Link>
    </p>
  ) : (
    <p className="text-sm text-primary">Anonymous</p>
  )
}
