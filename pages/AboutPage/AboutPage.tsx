import React from 'react'
import Layout from 'ui/organisms/Layout/Layout'
const AboutPage = ():React.ReactElement => {
    return (
        <Layout>
            This is about page
        </Layout>
    )
}

export default AboutPage
interface MyName {
    id: number,
    city: string
}
const counter:number = 5;
const getName =():string => {
    return "hai";
}