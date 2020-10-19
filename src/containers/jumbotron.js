import React from 'react';
import jumboData from '../fixtures/jumbo.json';
import { Jumbotron } from '../components';

const JumbotronContainer = () => {
    return (
        <Jumbotron.Container>
        { jumboData.map((element) => (
            <Jumbotron key={element.id} direction={element.direction}>
            <Jumbotron.Pane>
                <Jumbotron.Title>{element.title}</Jumbotron.Title>
                <Jumbotron.SubTitle>{element.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
                <Jumbotron.Image src={element.image} alt={element.alt} /> 
            </Jumbotron.Pane>
            </Jumbotron>
        ))}
        </Jumbotron.Container>
    );
}

export default JumbotronContainer;