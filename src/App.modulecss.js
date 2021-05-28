import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import background from "./assets/pokemon_background.png"
import Silkscreen from "./fonts/silkscreen/slkscr.ttf"
import SilkscreenBold from "./fonts/silkscreen/slkscrb.ttf"
import wave from "./assets/wave.svg"

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Silkscreen';
    src: url(${Silkscreen}) format('truetype');
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'SilkscreenBold';
    src: url(${SilkscreenBold}) format('truetype');
    font-style: normal;
    font-display: auto;
  }
  
  * {
    font-family: 'Silkscreen';
    margin: 0;
    padding: 0;
  }

  h1, h2 {
    font-family: 'SilkscreenBold';
  }

  span {
    font-size: 16px;
  }
  `

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url(${background}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0;
`

export const ContainerWrapper = styled.div`
  min-width: 750px;
  min-height: 550px;
  background-color: #E74D55;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 10px solid black;
  border-radius: 10px;
`

export const OuterScreenWrapper = styled.div`
  min-width: 460px;
  min-height: 400px;
  background-color: #707070;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(100% 0, 100% 100%, 15% 100%, 0 85%, 0 0);
`

export const ScreenWrapper = styled.div`
  min-width: 440px;
  min-height: 380px;
  background-color: #E5E5E5;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  clip-path: polygon(100% 0, 100% 100%, 15% 100%, 0 85%, 0 0);
`

export const Display = styled.div`
  min-width: 400px;
  min-height: 240px;
  background: white url(${wave}) no-repeat;
  background-size: auto 175px;
  border: 8px solid #AFAFAF;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`

export const SearchBar = styled.input`
  border: 10px solid #707070;
  border-radius: 20px;
  background-color: #71e46e;
  color: #1d601c;
  width: 300px;
  height: 2rem;
  padding-left: 20px;
  margin-right: 15px;
  font-size: 16px;
`
export const SearchButton = styled.button`
  border: 10px solid #707070;
  border-radius: 50%;
  background-color: #81b3ff;
  color: #0d6eff;
  width: 65px;
  height: 65px;
  cursor: pointer;
`

export const SearchBarWrapper = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 30px;
`

export const AssetWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ScrollUpButton = styled.button`
  height: 120px;
  width: 60px;
  border: 10px solid #707070;
  border-bottom: none;
  border-radius: 40px 40px 0 0;
  background-color: #ffca62;
  cursor: pointer;
`

export const ScrollDownButton = styled.button`
  height: 120px;
  width: 60px;
  border: 10px solid #707070;
  border-top: none;
  border-radius: 0 0 40px 40px;
  background-color: #ffca62;
  cursor: pointer;
`

export const DittoButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  align-self: center;
`

export const DittoImg = styled.img`
  width: 70px;
  height: auto;
`

export const MagnifyingGlass = styled.svg`
  height: 20px;
  width: 20px;
  fill: #0D6EFF;
  margin-top: 5px;
`

export const PokedexDecor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 350px;
  padding: 30px;
`

export const PowerButton = styled.div`
  width: 30px;
  height: 30px;
  background-color: red;
  border-radius: 50%;
  border: 8px solid black;
  margin-left: 20px;
`

export const VolumeSlits = styled.div`
  padding-top: 4px;
`

export const Slits = styled.div`
  margin: 5px;
  width: 70px;
  height: 10px;
  background-color: #707070;
  border-radius: 10px;
`

export const ScrollIcon = styled.img`
  width: 20px;
  height: 20px;
  padding: 6px;
`

export const PokemonLogo = styled.img`
  min-width: 300px;
  min-height: auto;
`

export const ScrollDivot = styled.div`
  margin: 10px 5px;
  width: 30px;
  height: 8px;
  background-color: #BE933F;
  border-radius: 10px;
  pointer-events: none;
`

export const PokemonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 394px;
`

export const PokeInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  text-align: end;
  padding-top: 60px;
`

export const MusicButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px; 
  height: 1.5rem; 
  border: 10px solid black; 
  border-radius: 20px;
  padding: 5px;
  background-color: beige;
`

export const PokemonSprite = styled.img`
  width: 175px;
  max-height: 164px;
`

export const PokemonNameNo = styled.h2`
  text-align: right;
  padding-right: 20px;
`

export const Disclaimer = styled.div`
  width: 750px;
  padding-top: 5px;
  padding-bottom: 30px;
  font-size: 14px;
`

export const TypeBlock = styled.p`
  background-color: ${props => props.type};
`