import Link from "next/link"

export default function Navbar() {
    
  return (
    <nav>
        <nav>
    <ul className="flex justify-between bg-red-600 text-white h-[50px] items-centre py-3 px-5">
        <Link href='/'>
        <li>Home</li>
        </Link>

        <Link href='/students'>
        <li>Students</li>
        </Link>
        <Link href='/instructors'>
        <li>Instructors</li>
        </Link>
        <Link href='/about'>
        <li>About</li>
        </Link>
    </ul>      
        </nav>
    </nav>
    
  )
}
