import React from 'react'
import './Style.css'

import Layout from './components/Layout'
import Section from './components/Layouts/Section'
import Page1 from './Page/Page1'
import Page2 from './Page/Page2'

export default function App() {
    return (
       <Layout>
        <Section>
            <Page1></Page1>
            <Page2></Page2>
        </Section>
       </Layout>
    )
}
