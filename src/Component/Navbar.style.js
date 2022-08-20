import styled from 'styled-components';

export const Nav = styled.nav`
    width: 100%;
    padding: 25px 35px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: "hsl(0, 0%, 98%)";

    ul,li{
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .hamburger-menu{
        height: 21px;
        width: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        justify-self: end;
        z-index: 2;
    }

    .hamburger-menu .bar{
        height: 2px;
        width: 100%;
        border-radius: 10px;
        background-color: hsl(0, 0%, 8%);
    }

    .nav-menu a > span:hover{
        color: hsl(0, 0%, 8%);
        font-weight: 700;
    }

    .nav-menu a{
        text-decoration: none;
        color: hsl(0, 0%, 41%);
    }

    a > span > img{
        vertical-align: middle;
    }

    .login-reg button:first-child:hover{
        border: none;
    }

    .login-reg button:last-child:hover{
        border: 3px solid hsl(0, 0%, 8%);
    }

    .nav-menu .feat{
        height: ${({isFeatOpen}) => isFeatOpen ? '40%' : '0'};
        transition: height 0.5s ease-in;
    }

    .nav-menu .sub-features{
        display: grid;
        grid-template-columns: 8% 92%;
        column-gap: 1em;
        row-gap: 1em;
        margin-top: 1em;
        margin-bottom: 1em;
        margin-left: 1.5em;
        opacity: ${({isFeatOpen}) => isFeatOpen ? '1' : '0'};
        transform: ${({isFeatOpen}) => isFeatOpen ? 'scale(1,1)' : 'scale(0,0)'};
        transition:transform 0.5s ease-in, opacity 0.5s ease-in;
    }


    .nav-menu .sub-features .feat-img{
        align-self: center;
        width: 20px;
    }

    .nav-menu .sub-features li:last-child{
       padding-bottom: 0;
    }

    .nav-menu .company{
        height: ${({isCompanyOpen}) => isCompanyOpen ? '40%' : '0'};
        transition: height 0.5s ease-in;
    }

    .nav-menu .company-menu{
        margin: 1em 0 1em 1.5em;
        opacity: ${({isCompanyOpen}) => isCompanyOpen ? '1' : '0'};
        transform: ${({isCompanyOpen}) => isCompanyOpen ? 'scale(1,1)' : 'scale(0,0)'};
        transition:transform 0.5s ease-in, opacity 0.5s ease-in;
    }

    

    .nav-menu .company-menu li{
        padding: 0.8em 0;
        vertical-align: middle;
    }

    .nav-menu .company-menu li:last-child{
        padding-bottom: 0;
    }

    .collapsed{
        display: none;
    }

    @media (max-width: 767px){
        .close-menu{
            background-color: hsl(0, 0%, 98%);
            width: 100%;
            padding-top: 1.2em;
            padding-right: .4em;
            text-align: end;
            cursor: pointer;
            z-index: 2;
        }

        .close-menu > img{
            width: 30px;
            height: 30px;
        }

        .main-nav-container{
            background-color: hsl(0, 0%, 98%);
            height: 100vh;
            /* width: ${({open}) => open ? '60%' : '0'}; */
            width: 60%;
            position: absolute;
            padding: 0 2em;
            /* right: ${({open}) => open ? '0' : '-15%'}; */
            right:0;
            top: 0;
            /* top: ${({open}) => open ? '0' : '-100%'}; */
            display: flex;
            flex-direction: column;
            /* transition: width 0.5s ease-in, right 0.5s ease-in, top 0.5s ease-out; */
            transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
            transition: transform 0.5s ease-in;    
        }   

        .grey-background{
            background-color: ${({open}) => open ? 'rgba(0, 0, 0, .7)' : 'transparent'};
            width: 100%;
            height: 100vh;
            position: absolute;
            left: 0;
            top: 0;
            transition: background-color 0.6s ease-in;
        }

        .nav-menu{
            background-color: hsl(0, 0%, 98%);
            min-height: 40%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            z-index: 1;
            padding-top: 2em;
        }

        .nav-menu a{
            margin-bottom: 2em;
        }

        .nav-menu ul > img{
            align-self: center;
        }

        .nav-menu a, li{
            font-size: 18px;
        }

        .login-reg{
            background-color: hsl(0, 0%, 98%);
            padding-top: 2em;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-grow: 1;
        }

        .login-reg button{
            width: 80%;
        }

        .login-reg button:last-child{
            border: 2px solid hsl(0, 0%, 41%);
        }

    }

    @media (min-width: 768px) {

        grid-template-columns: 10% 90%;

        .grey-background,
        .close-menu,
        .hamburger-menu{
            display: none;
        }

        .main-nav-container{
            display: flex;
            justify-content: space-between;
        }

        .nav-menu{
            align-self: center;
            flex-grow: 1;
            display: flex;
        }

        .nav-menu a{
            margin-right: 2rem;
        }

        .logo{
            align-self: center;
        }

        .nav-menu a:last-child{
            margin-right: 0;
        }

        .nav-menu a:first-child{
            margin-left: 2em;
        }

        .nav-menu .sub-features{
            background-color: #fff;
            grid-template-columns: 15% 85%;
            position: absolute;
            left: 5%;
            padding: 20px 30px;
            border-radius: 15px;
            box-shadow: 0px 0px 35px 0px hsl(0, 0%, 65%);
        }

        .nav-menu .sub-features img{
            margin-right: 1em;
        }

        .nav-menu .company-menu{
            position: absolute;
            background-color: #fff;
            padding: 20px 30px;
            border-radius: 15px;
            box-shadow: 0px 0px 40px 0px hsl(0, 0%, 65%);
        }

        .nav-menu .company-menu{
            margin: 1em 0 1em 0;
        }

        .login-reg{
            justify-self: end;
        }

        .login-reg button:first-child{
            width: 100px;
        }

        .login-reg button:last-child{
            border: 2px solid hsl(0, 0%, 41%);
            width: 115px;
        }
    }

    @media (min-width: 1000px){
        a{
            font-size: 18px;
        }

        .login-reg button:last-child{
            width: 150px;
            margin-left: 1em;
        }
    }

 `
 