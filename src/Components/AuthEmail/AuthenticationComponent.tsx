import React from 'react'
import Logo from '../Logo'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'
import Link from 'next/link'

const AuthenticationComponent = () => {
    const currentRoute = usePathname()

    return (
        <>
            <AuthStyle>
                <div className='logo'>
                    <Logo position="center" />
                </div>
                <LoginBody>
                    <div>
                        <h4>Create your account</h4>
                    </div>
                    <div>
                        <div>Work email</div>
                        <input type="text" />
                    </div>
                    {currentRoute === "/register" ?
                        <div>
                            <div>Full Name</div>
                            <input type="text" />
                        </div> : ""}
                    {currentRoute === "/register" ? <div>
                        <div>Password</div>
                        <input type="password" />
                    </div> : ""}
                    <div className='button'>{currentRoute === "/register" ? 'Create your account' : "Continue"}</div>
                    {currentRoute === "/register" ? <p>By clicking the "Create your account" button, you agree to Trabalance's <Link href={""}>Terms of Service</Link> and <Link href={""}>Privacy Policy</Link></p> : ""}
                </LoginBody>
                <footer>
                    {currentRoute === "/register" ? <div>Have an account? <Link href={"/login"}>Sign in</Link></div> : <div>Don't have an account? <Link href={"/register"}>Sign up</Link></div>}
                    <nav>
                        <div>Trabalance</div> <div>Privacy</div> <div>Terms</div> <div>Contact</div>
                    </nav>
                </footer>
            </AuthStyle>
        </>
    )
}



const AuthStyle = styled.form`
width: 350px;
margin: 1rem auto;
text-align:center;
font-size: 0.8rem;
.logo{
    margin: 3rem 0;
}
footer{
        font-size: 0.7rem; 
> div{
    margin: 20px;
}
nav{
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    >div{
        cursor:pointer;
    }
}
}
a{
    color: rgb(65 105 225);
}
`

const LoginBody = styled.div`
padding: 20px 30px;
box-shadow:5px 7px 18px 2px #00000054;
> div{
    margin: 3rem 0;
    text-align:left;
    input{
        width: 100%;
        padding: 9px 12px;
        border-radius: 5px;
        margin: 5px 0;
        border-width: 1px;
    }
 
}
p{
   font-size: 0.6rem;
   padding-bottom: 2rem; 
}
.button{
    background-color: blue;
    color: white;
    text-align: center; 
    background-color: rgb(65 105 225/50%);
    padding: 7px;
    border-radius: 2px;
    user-select:none;
    margin: 1rem 0;

}
`

export default AuthenticationComponent