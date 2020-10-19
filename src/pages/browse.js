import React from 'react';

import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter'; 

const Browse = () => {
    // We get series and films
    const { series } = useContent('series');
    const { films } = useContent('films');
    // we filter the data to slides
    const slides = selectionFilter({ series, films });
    console.log(slides);
    //then we pass slides to the browse container
    return (
        <p>Hello form browse</p>
    )
};

export default Browse;