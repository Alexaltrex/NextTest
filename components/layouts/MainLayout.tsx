import {ReactNode} from "react";
import {Header} from "../Header/Header";
import Head from "next/head";

interface IMainLayout {
    children: ReactNode
    headTitle?: string
}

export const MainLayout = ({children, headTitle = 'Next 01'}: IMainLayout) => {
    return (
        <>
            <Head>
                <meta name="keywords" content="next,js,nextjs,react"/>
                <meta name="description" content="this is demo site"/>
                <meta charSet="utf-8"/>
                <title>
                    {headTitle}
                </title>
            </Head>
            <Header/>
            <main  style={{padding: 10}}>
                {children}
            </main>
        </>
    )
}