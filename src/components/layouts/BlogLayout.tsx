import React from "react";
import Navbar from "@/components/partials/Navbar";

export default function BlogLayout({children}: { children: React.ReactNode }) {

    return (
        <>
            <Navbar></Navbar>
            <main>
                {children}
            </main>
        </>
    );
}
