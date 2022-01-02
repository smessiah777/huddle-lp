import React from 'react';
import mockup from '../images/illustration-mockups.svg';
import { Container  } from './styled/Container.styled';
import { Flex } from './styled/Flex.styled';
import { Art, HeroText} from './styled/Hero.styled';
import { Button } from './styled/Button.styled';



export default function Hero() {
    return (
        <Container>
        <Flex>
            
            <Art src={mockup}  alt="Mock up illustration"/>

            <HeroText>
                <h1>Build The Community <br/> Your Fans Will Love</h1>

                <p> Huddle re-imagines the way we build communities. You have <br/> 
                a voice, but so does your audience. Create connections with 
                your users as you engage in genuine discussion.
                </p>

                <Button>
                    Register
                </Button>
            </HeroText>
        </Flex>
        </Container> 
    )
}
