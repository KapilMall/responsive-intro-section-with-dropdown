import styled from "styled-components";

export const Container = styled.div`
    background-color: hsl(0, 0%, 98%);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    img{
        width: 100%;
        height: 35%;
    }

    .desktop-bg{
        display: none;
    }

    @media (min-width: 680px) and (max-width: 768px){
        img{
            height: 40%;
        }
    }

    @media(min-width: 768px){
        width: 80%;
        height: 80%;
        margin: 3rem auto;
        display: grid;
        grid-template-columns: 60% 40%;
        grid-template-rows: 80% 5%;
        column-gap: 30px;
        .desktop-bg{
            height: 100%;
            display: block; 
            grid-column: 2;
            /* grid-row-start: 1;
            grid-row-end: 3; */
            grid-row: 1 / span 2;
        }

        .mobile-bg{
            display: none;
        }
    }

    @media (min-width: 1000px) {
        
    }
`

export const Content = styled.div`
    width: 100%;
    height: 35%;
    background-color: hsl(0, 0%, 98%);
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    h1,p{
        margin: 0;
        padding: 0;
    }

    h1{
        color: hsl(0, 0%, 8%);
        font-weight: 700;
        font-size: 35px;
    }

    p{
        color: hsl(0, 0%, 41%);
        line-height: 1.5;
        text-align: center;
    }

    @media (max-width: 375px){
        h1{
            font-size: 33px;
        }
    }

    @media (min-width: 680px) and (max-width: 768px){
        h1{
            font-size: 50px;
        }
    }

    @media (min-width: 768px){
       height: 80%;
       width: 100%;
       justify-content: space-around;
       align-self: center;

       h1{
        font-size: 3.1rem;
        align-self: flex-start;
       }

       h1 > span{
        display: block;
       }

       p{
        text-align: start;
        font-size: 18px;
        align-self: flex-start;
       }
    }

    @media (min-width: 1000px){
        p{
            width: 70%;
            align-self: flex-start;
        }
        
        h1{
            font-size: 4rem;
        }
    }

    @media (min-width: 1200px){

        h1{
            font-size: 5rem;
        }
    }
` 

export const Button = styled.button`
    width: 135px;
    border: none;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    font-size: 16px;
    padding: 16px 10px;
    border-radius: 18px;
    cursor: pointer;

    &:hover{
        background-color: hsl(0, 0%, 98%);
        border: 1px solid hsl(0, 0%, 8%);
        color: hsl(0, 0%, 8%);
        font-weight: 700;
    }
    
    @media (min-width: 768px){
        align-self: flex-start;
        width: 160px;
        padding: 20px 10px;
        font-size: 18px;
    }
`

export const Featured = styled.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    img{
        width: 22%;
        height: 8%;
    }
    .audiophile{
        width: 18%;
        height: 12%
    }

    @media (min-width: 680px) and (max-width: 768px){
        img{
            height: 15%;
        }

        .audiophile{
            height: 18%;
        }
    }

    @media (min-width: 768px){
        padding: 0;
        img,
        .audiophile{
            height: 100%;
        }
    }

    @media (min-width: 1400px) {
        width: 80%;
    }
`