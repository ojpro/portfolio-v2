import SplashScreen from "@/components/SplashScreen";

import {useEffect, useState} from "react";

export default function BlankLayout({children}: { children: React.ReactNode }) {
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setTimeout(()=>{
                setIsPageLoaded(true);
            },1000);
        }
    }, [isPageLoaded]);

    if (!isPageLoaded) {
        return <SplashScreen></SplashScreen>
    } else {
        return (
            <main className="dark:bg-gray-900 dark:text-white min-h-screen">
                {children}
            </main>
        )
    }
}
