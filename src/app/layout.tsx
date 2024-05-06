import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";
import clsx from "clsx";
import Footer from "@/components/Footer/Footer";


const daysOne = localFont({src: '../Fonts/DaysOne-Regular.ttf'});

export const metadata: Metadata = {
    title: "Cases",
    description: "Brawl stars roulette",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={''}>
            <body className={clsx(daysOne.className, 'bg-brawl-purple-main h-full w-full max-w-[1920px] overflow-x-hidden mx-auto relative')}>
                <Header/>
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
