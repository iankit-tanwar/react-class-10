import React from 'react'
import Aside from './Layouts/Aside'
import Footer from './Layouts/Footer'
import Header from './Layouts/Header'


export default function Layout(props) {
  return (
    <>
    <Header />

    <main>

        <div className='container  a_cont h-100'>
            <div className='row h-100'>
                <Aside cls="a_leftaside">Leftaside</Aside>
                {props.children}
                <Aside cls="a_rightaside">Rightaside</Aside>
            </div>

        </div>

    </main>
    <Footer />
</>
  )
}
