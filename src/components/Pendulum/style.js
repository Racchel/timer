import styled from 'styled-components'

export const Container = styled.div`
   position: absolute;
   top: -10px;
   display: flex;
   flex-direction: column;
   align-items: center;
   animation-duration: 4s;
   animation-name: ${props => props.animation};
   animation-iteration-count: infinite;
   transition: 3s;

   @keyframes time {
      0% {
         transform: rotate(0deg);
      }

      25% {
         transform: rotate(-10deg);
      }

      50% {
         transform: rotate(0deg);
      }

      75% {
         transform: rotate(10deg);
      }

      100% {
         transform: rotate(0deg);
      }
   }
`
export const Line = styled.div`
   width: 2px;
   height: 550px;
   background-color: #fff;
   box-shadow: 0 0 1em #fff;
`

export const Circle = styled.div`
   width: 30px;
   height: 30px;
   border-radius: 50%;
   background-color: #fff;
   box-shadow: 0 0 1em #fff;
`

