import { parseText } from '@/utils/parseText'

export const Message = ({ message }: { message: string }) => {
  const parsedMessage = parseText(message)

  return (
    <span
      className="break-words text-gray"
      dangerouslySetInnerHTML={{ __html: parsedMessage || '' }}
    />
  )
}
