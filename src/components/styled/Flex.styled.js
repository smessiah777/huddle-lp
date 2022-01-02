import styled from 'styled-components';



export const Flex = styled.div`
    display:Flex;
    

    // & > div {
    //     flex: 1;
    // }

    @media(max-width: 480px){
          flex-direction: column;  
          align-content: center;
          

    }

`