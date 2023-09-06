import Link from "next/link"

const Header = () => {
    return (
        <div className="flex justify-between items-center py-3 px-5">
            <div className="items-start"><Link href={"/"} className="font-bold text-2xl">Todo</Link></div>
            <div className="flex justify-between items-center">
                <Link href={"/"} className="mr-8 font-semibold hover:text-purple-600 transition-all duration-300">Home</Link>
                <Link href={"/todo-list"} className="mr-8 font-semibold hover:text-purple-600 transition-all duration-300">Todo List</Link>
                <Link href={"/about"} className="mr-8 font-semibold hover:text-purple-600 transition-all duration-300">About</Link>
                <Link href={"/profile"} className="bg-green-700 px-3 py-1 rounded-md text-white font-bold hover:bg-purple-600 transition-all duration-300 ease-in">Profile</Link>
            </div>

        </div>
    )
}

export default Header