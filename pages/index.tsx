import type {NextPage} from 'next'
import {MainLayout} from "../components/layouts/MainLayout";

const Index: NextPage = () => {
    console.log(process.env.NODE_ENV)
    return (
        <MainLayout>
            <div>
                <h1>Home Update</h1>
            </div>
        </MainLayout>
    )
}

export default Index
