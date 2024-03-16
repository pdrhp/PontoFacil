import type {Metadata} from "next";
import "./globals.css";
import {cn} from "@/lib/utils";
import {Montserrat} from "next/font/google";
import ReactQueryClientProvider from "@/components/ReactQueryClientProvider/ReactQueryClientProvider";


const montSerrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
})


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ReactQueryClientProvider>
            <html lang="en">
                <body className={cn("min-h-screen bg-background antialiased font-montserrat", montSerrat.variable)}>
                    {children}
                </body>
            </html>
        </ReactQueryClientProvider>
    );
}
