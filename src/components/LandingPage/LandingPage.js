import React from 'react';
import Quotes from '../../images/icones/Quotes';
import Transportation from '../../images/Transportation';
import styled from "styled-components";
import Accordeon from './Accordeon';


const Box = styled.div`


`;



const LandingPage = () => {
    return ( 
<>
<Box>
<Quotes />
<h2>COMMANDEZ</h2>
<p>votre trajet multi-modal</p>
<Transportation />




</Box>

</>

     );
}


 
export default LandingPage;