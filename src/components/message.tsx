import { parseText } from '@/utils/parseText'
import { useEffect, useState } from 'react'

export const Message = ({ message }: { message: string }) => {
  const parsedMessage = parseText(message)
  const [hydration, setHydration] = useState<boolean>(false)

  // workaround of hydration error
  // needed that because the parseText is different
  // from serverside text (initial hydration mismatch)
  useEffect(() => {
    setHydration(true)
  }, [])

  if (!hydration) return <></>

  return (
    <span
      className="break-words text-gray"
      dangerouslySetInnerHTML={{ __html: parsedMessage || '' }}
    />
  )
}
