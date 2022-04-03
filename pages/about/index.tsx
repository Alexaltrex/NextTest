import {NextPage} from "next";
import Router from "next/router";
import {MainLayout} from "../../components/layouts/MainLayout";

const About: NextPage = () => {
    const onClickHandler = () => {
        Router.push('/');
    }

    return (
        <MainLayout headTitle="Next 01 - About">
            <h1>About</h1>
            <button onClick={onClickHandler}>
                Home
            </button>
        </MainLayout>
    )
}
export default About