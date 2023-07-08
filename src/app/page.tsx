'use client'
import Logo from '@/Components/Logo'
import { useRouter } from 'next/navigation'
import React from 'react'
import styled from 'styled-components'

const Home = () => {
    const router = useRouter()

    return (
        <>
            <HomeStyle>
                <Logo position='left' />
                <HeroStyle>
                    <section>
                        <div className='heroText'>
                            <h1>Be on  the<br /> samepage <br /> with everyone.</h1>
                            <p>send and receive documnts, manage receiveables and payables, and collaborate with your customers and vendors in one portal.</p>
                        </div>
                        <button onClick={() => router.push("./register")}>Book a demo</button>
                    </section>
                    <HeroImage></HeroImage>
                </HeroStyle>
            </HomeStyle>
        </>
    )
}

const HomeStyle = styled.div`
width: 80%;
margin: 0 auto;
`
const HeroStyle = styled.div`
 display: flex;
 margin-top: 4rem;
h1{
    font-size:  clamp(2rem, 10vw, 3rem);
    line-height: 1.25;
}
p{
    font-size: 0.8rem;
    color:rgb(107 114 128);
    margin: 1rem 0;
}
button{
    color: white;
    border: none;
    padding: 0.5rem;
        font-weight: 700;
    background-color: rgb(65 105 225);
    border-radius: 5px;
    cursor:pointer;
    :hover{
    background-color: rgb(65 105 225/50%);
    }
}
`
const HeroImage = styled.div`
width: 1000px;
box-shadow: 0 25px 50px -12px rgb(0 0 0/0.25);
@media (max-width: 800px){
    display: none;
}
`

export default Home