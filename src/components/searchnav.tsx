import { useRouter } from 'next/router'
import {
  type MouseEventHandler,
  useCallback,
  type FormEvent,
  useState
} from 'react'
import { z } from 'zod'

export const SearchNav = ({
  isSearching,
  stopSearching
}: {
  isSearching: boolean
  stopSearching: MouseEventHandler<HTMLDivElement>
}) => {
  const [inputValue, setInputValue] = useState<string>('')
  const { push } = useRouter()

  const callbackRef = useCallback(
    (node: HTMLInputElement | null) => node && node.focus(),
    []
  )

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const user = z.string().safeParse(inputValue)

    if (user.success && user.data !== '') {
      void push(user.data)
    }
  }

  return isSearching ? (
    <>
      {' '}
      <div
        onClick={stopSearching}
        className="fixed left-0 min-h-screen w-full cursor-pointer backdrop-blur-sm"
      />
      <div className="fixed left-0 flex h-12 w-full items-center justify-center border-b-[1px] border-b-medium bg-dark px-2.5">
        <form onSubmit={handleSubmit} className="w-full max-w-[890px]">
          <input
            className="w-full max-w-[890px] bg-transparent px-3 py-0.5 text-gray focus-visible:border-0 focus-visible:outline-1 focus-visible:outline-light"
            placeholder="Search by username"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            ref={callbackRef}
          />
        </form>
      </div>
    </>
  ) : (
    <></>
  )
}
