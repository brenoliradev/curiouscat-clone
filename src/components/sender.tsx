import { type senderData, userData } from '@/schemas/curiousProfile'
import { type z } from 'zod'

export const Sender = ({ sender }: { sender: z.infer<typeof senderData> }) => {
  const isVisible = userData.safeParse(sender)

  return (
    <p className="text-sm text-primary">
      {isVisible.success ? isVisible.data.username : 'Anonymous'}
    </p>
  )
}
