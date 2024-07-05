import Link from "next/link";

export default function NavBar() {
    return (
        <div className="flex justify-between items-center bg-gray-200">
            <Link href="#" className="px-10 text-3xl">≡</Link>
            <Link href="#"><h1 className="text-2xl py-4 font-medium">Find a Coach</h1></Link>
            <Link href="#" className="px-10 text-2xl">👤</Link>
        </div>
    );
}