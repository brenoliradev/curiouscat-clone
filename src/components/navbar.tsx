import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav className="fixed h-16 w-full border-b-[1px] border-b-medium bg-dark px-2.5 z-10">
      <div className="mx-auto flex h-16 w-full max-w-[890px] items-center justify-between">
        <button className="min-w-[105px] rounded-2xl border-[1px] border-gray bg-transparent p-2.5 text-[12px] font-medium text-gray lg:min-w-[115px]">
          Search users
        </button>
        <Image
          src={'/images/curiouscat-text.svg'}
          height={28}
          width={168}
          alt="Curious write in gray and Cat write in orange"
          className="hidden lg:block"
        />
        <Image
          src={'/images/curiouscat-icon.svg'}
          height={30}
          width={30}
          alt="Curious write in gray and Cat write in orange"
          className="block lg:hidden"
        />
        <button className="min-w-[105px] rounded-2xl bg-primary p-2.5 text-[12px] font-medium lg:min-w-[115px]">
          Contact me
        </button>
      </div>
    </nav>
  )
}
