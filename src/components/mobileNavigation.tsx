import { useState } from "react";

export default function MobileNavigation() {
    const [showDrawer, setShowDrawer] = useState(false);

    return <>
        <button onClick={() => setShowDrawer(!showDrawer)}>
            <svg fill="white" viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
            </svg>
        </button>
        <aside className={`fixed top-0 transition-all duration-300 ${showDrawer ? "left-0" : "left-full"}`}>
            <div className="grid grid-cols-2 h-[100vh] w-[100vw]">
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