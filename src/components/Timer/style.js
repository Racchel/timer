import styled from 'styled-components'

const paletteColor = {
   dark: {
      xs: '#fff',
      sm: '#ddd',
      md: '#363636',
      lg: '#1C1C1C',
      xl: '#000000',
      main: '#0f0f0f'
   },
   number: 'rgba(45,51,60,255)',       /* rgba(147,170,130,255); */
   screen: '#a6c620'

}

export const Container = styled.div`
   z-index: 2;
   display: flex;
   align-items: center;
   flex-direction: column;
`

export const BoxTimer = styled.div`
   width: 230px;
   padding: 20px;
   border-radius: 10px;
   background-color: ${paletteColor.dark.main};
   box-shadow:0 5px 0 ${paletteColor.dark.lg};
`


export const Content = styled.div`
   padding: 0 10px;
   font-size: 20px;
   border-radius: 5px;
   border: 2px solid ${paletteColor.dark.xs};
   box-shadow: 0 0 1em ${paletteColor.screen};
   background-color: ${paletteColor.screen};

   h1 {
      color: ${paletteColor.number};
   }
`

export const BoxButtons = styled.div`
   width: 100%;
   display: flex;
   margin-top: 15px;
   justify-content: space-between;
`

export const Button = styled.button`
   width: 48%;
   border: none;
   padding: 10px 0;
   cursor: pointer;
   font-weight: bold;
   text-transform: uppercase;
   color: ${paletteColor.dark.sm};
   background-color: ${paletteColor.dark.md};
   box-shadow:0 5px 0 ${paletteColor.dark.lg};

   :hover {
      background-color: ${paletteColor.dark.lg};
      box-shadow:0 5px 0 ${paletteColor.dark.xl};
   }
   
   :active{
      top:5px;
      position:relative;
      box-shadow:none;
   }
`
