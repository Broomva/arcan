import { LogOut } from "@/app/auth/logout";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsFillBarChartFill, BsPersonFillLock } from "react-icons/bs";
import { GiAcid } from "react-icons/gi";
import { MdCategory, MdShoppingCart } from "react-icons/md";
import { RiDashboardFill } from "react-icons/ri";

export default function SideNav() { 
     const router = useRouter()
     return (
          <div className='w-[15%] md:block hidden'>
               <nav className='w-[15%] fixed flex flex-col left-0 h-[100vh] bg-[#160F3F] p-4 space-y-8'>
                    <Link href="/" className='hover:text-white mt-4 mb-8 font-bold text-xl text-gray-300'>arcan</Link>
                    <div className="w-full flex items-center">
                         <RiDashboardFill className="text-[#9AA8BD] hover:text-white mr-2"/>
                         <Link href="/admin_pane/dashboard" className="text-[#9AA8BD] hover:text-white">Dashboard</Link>
                    </div>
               
                    <div className="w-full flex items-center">
                         <BsFillBarChartFill className="text-[#9AA8BD] hover:text-white mr-2"/>
                         <Link href="/admin_pane/sales" className="text-[#9AA8BD] hover:text-white">Sales</Link>
                    </div>
                    
                    <div className="w-full flex items-center">
                         <MdShoppingCart className="text-[#9AA8BD] hover:text-white mr-2"/>
                         <Link href="/admin_pane/products" className="text-[#9AA8BD] hover:text-white">Products</Link>
                    </div>

                    <div className="w-full flex items-center">
                         <MdCategory className="text-[#9AA8BD] hover:text-white mr-2"/>
                         <Link href="/admin_pane/categories" className="text-[#9AA8BD] hover:text-white">Categories</Link>
                    </div>

                    <div className="w-full flex items-center">
                         <GiAcid className="text-[#9AA8BD] hover:text-white mr-2"/>
                         <Link href="/spells_studio" className="text-[#9AA8BD] hover:text-white">Spells Studio</Link>
                    </div>

                    <div className="w-full flex items-center">
                         <BsPersonFillLock className="text-[#9AA8BD] hover:text-white mr-2"/>
                         <Link href="/" className="text-[#9AA8BD] hover:text-white" onClick={() => LogOut(router)}>Log out</Link>
                    </div>
                    
               </nav>
               </div>
     )
}