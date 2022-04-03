import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {Preloader} from "../components/Preloader/Preloader";

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    // routeChangeStart(url, { shallow })
    // routeChangeComplete(url, { shallow })
    // routeChangeError(err, url, { shallow })

    useEffect(() => {
        const handleStart = (url: string) => {
            console.log("start");
            setLoading(true);
        }
        const handleStop = () => {
            console.log("stop")
            setLoading(false);
        }

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleStop)
        router.events.on('routeChangeError', handleStop)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleStop)
            router.events.off('routeChangeError', handleStop)
        }
    }, [router])

    if (loading) {
        return (
            <Preloader/>
        )
    }


    return (
        <Component {...pageProps} />
    )
}

export default MyApp
