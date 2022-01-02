import styled from 'styled-components';


export const Art = styled.img`
    width:650px;
    height:410px;

     @media(max-width: 480px){
      
         width:245px;
         height:165px;
         margin-bottom:40px;
     }


`

export const HeroText = styled.div`

    padding-left: 20px;

    h1 {
        font-size: 40px;
        color: #fff;
        line-height: 1.5;
        padding-bottom: 30px;
    }

    p {
        font-size: 18px;
        font-weight: 300;
        color: #fff;
        text-align: left;
        line-height: 1.5;

    }

     @media(max-width: 480px){
         h1{
             font-size: 18px;
             text-align: center;
         }

         p{
             font-size: 14px;
             text-align: center;
         }
     }


`


