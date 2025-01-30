import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";
import clsx from "clsx";
import Footer from "@/components/Footer/Footer";
import StoreProvider from "@/app/StoreProvider";
import {QueryProvider} from "@/app/QueryProvider";
import AuthWrapper from "@/components/AuthWrapper/AuthWrapper";
import AuthProvider from "@/app/AuthProvider";
import {BottomMenu} from "@/components/BottomMenu/BottomMenu";
import {Toaster} from "react-hot-toast";

const daysOne = localFont({src: '../Fonts/DaysOne-Regular.ttf'});

export const metadata: Metadata = {
    title: "DodoDrop",
    description: "Brawl stars roulette",
    verification: {
        yandex: 'ef6387bcac7282a9'
    }
};

// favicon

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StoreProvider>
            <QueryProvider>
                <AuthProvider>
                    <html lang="en">
                    <body
                        className={clsx(daysOne.className, 'bg-brawl-purple-main h-full w-full overflow-x-hidden relative')}>
                    <Header/>
                    <main>
                        {children}
                        <AuthWrapper/>
                        <Toaster/>
                    </main>
                    <Footer/>
                    <BottomMenu/>
                    </body>
                    </html>
                </AuthProvider>
            </QueryProvider>
        </StoreProvider>
    );
}
