import React from 'react'
import mobilebg from '../images/image-hero-mobile.png';
import desktopbg from '../images/image-hero-desktop.png';
import { Container, Content, Button, Featured } from './Main.style';
import databiz from '../images/client-databiz.svg';
import audiophile from '../images/client-audiophile.svg';
import meet from '../images/client-meet.svg';
import maker from '../images/client-maker.svg';

export default function Main({navopen}) {
    return (
        <Container arai-label ="main" navopen = {navopen}>
            <img className="mobile-bg" src={mobilebg} alt="mobile background" />
            <img className='desktop-bg' src={desktopbg} alt="desktop backgound" />
            <Content navopen = {navopen}>
                <h1>Make <span>remote work</span></h1>
                <p>Get your team in sync, no matter your location, Streamline processes, create team rituals, and watch productivity soar.</p>
                <Button backgroundColor = "hsl(0, 0%, 8%);" color = "hsl(0, 0%, 98%);">Learn more</Button>
            </Content>
            <Featured>
                <img src={databiz} alt="databiz"/>
                <img  className='audiophile' src={audiophile} alt="audiophile"/>
                <img src={meet} alt="meet"/>
                <img src={maker} alt="maker"/>
            </Featured>
        </Container>
    )
}
