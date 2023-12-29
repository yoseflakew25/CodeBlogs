import Image from "next/image"
import Link from "next/link"
import profileImg from "../../../public/logo.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light p-16">

        <span className="font-bold dark:font-semibold text-lg md:text-xl">Hi, I'm Yosef Lakew 👋</span>
    </Link>
  )
}

export default Logo
