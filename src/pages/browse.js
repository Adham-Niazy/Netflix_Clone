import React from 'react';

import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter'; 
import BrowseContainer from '../containers/browse';

const Browse = () => {
    // We get series and films
    const { series } = useContent('series');
    const { films } = useContent('films');
    // we filter the data to slides
    const slides = selectionFilter({ series, films });
    //then we pass slides to the browse container
    return (
        <BrowseContainer slides={slides}/>
    )
};

export default Browse;