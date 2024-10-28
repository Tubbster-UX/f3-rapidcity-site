import { MenuIcon } from "lucide-react";
import { useState } from "react";

export default function MobileNavigation() {
    const [showDrawer, setShowDrawer] = useState(false);

    return <>
        <button onClick={() => setShowDrawer(!showDrawer)}>
            <MenuIcon className="w-10 h-10" size={24} />
        </button>
        <aside className={`fixed top-0 transition-all duration-300 ${showDrawer ? "left-0" : "left-full"}`}>
            <div className="grid grid-cols-2 h-screen w-screen">
                <div onClick={() => setShowDrawer(false)}>
                    {/* blank area that triggers close */}
                </div>
                {/* menu */}
                <div className="flex flex-col border-l-2 border-secondary bg-secondary text-primary p-12">
                    <a href="/">Home</a>
                    {/* todo: add other pages */}
                </div>
            </div>
        </aside>
    </>
}