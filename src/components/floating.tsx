import Image from 'next/image'
import { useState } from 'react'

export const Floating = () => {
  const [isShown, setIsShown] = useState<boolean>(true)

  return isShown ? (
    <div className="fixed bottom-6 flex w-full items-center justify-center lg:bottom-10">
      {' '}
      <div className="flex w-11/12 max-w-[890px] items-center gap-2 rounded-sm bg-dark p-4 shadow-sm">
        <div className="flex w-[52px] items-center justify-center rounded-xl border-[1px] border-[rgb(69,69,69)] bg-medium p-2.5">
          <Image
            src={'/images/curiouscat-icon.svg'}
            height={32}
            width={32}
            alt="Curious write in gray and Cat write in orange"
          />
        </div>
        <div className="my-auto w-2/3">
          <p className="font-medium text-gray">CuriousCat</p>
          <p className="text-xs text-gray lg:text-sm">
            Made by{' '}
            <a
              className="text-primary"
              href="https://www.linkedin.com/in/lirbre/"
              target="_blank"
              rel="noreferrer"
            >
              brenoliradev
            </a>
            , see it on{' '}
            <a
              className="text-primary"
              href="https://github.com/lirbre/curiouscat-clone"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="ml-auto flex flex-col items-center justify-center gap-1">
          <a
            href="https://www.linkedin.com/in/lirbre/"
            target="_blank"
            rel="noreferrer"
            className="min-w-[85px] rounded-2xl bg-primary p-2.5 text-center text-[12px] font-medium lg:min-w-[115px]"
          >
            Contact me
          </a>
          <p
            onClick={() => setIsShown(false)}
            className="text-xs text-gray underline opacity-90 lg:text-sm"
          >
            Dismiss
          </p>
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}
