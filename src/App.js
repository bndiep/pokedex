import { useState, useEffect } from "react"
import {
  AppWrapper,
  AssetWrapper,
  ContainerWrapper,
  Disclaimer,
  Display,
  DittoButton,
  DittoImg,
  GlobalStyle,
  ScreenWrapper,
  SearchBar,
  SearchButton,
  SearchBarWrapper,
  ScrollUpButton,
  ScrollDownButton,
  ScrollDivot,
  ScrollIcon,
  ScrollWrapper,
  Slits,
  TypeBlock,
  MagnifyingGlass,
  MusicButton,
  OuterScreenWrapper,
  PokedexDecor,
  PokeInfo,
  PokemonContainer,
  PokemonLogo,
  PokemonNameNo,
  PokemonSprite,
  PowerButton,
  VolumeSlits,
} from './App.modulecss'
import Sound from 'react-sound'
import LittleRoot from './assets/littleroot.mp3'
import scrollDown from "./assets/scroll_down.svg"
import scrollUp from "./assets/scroll_up.svg"
import pokemonLogo from "./assets/Pokémon_logo.svg"
import ditto from "./assets/pixel-ditto.png"

const Colors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
}

const App = () => {
  //pokemon in state
  const [pokemon, setPokemon] = useState("")
  //pokemon id
  const [pokemonNum, setPokemonNum] = useState("")
  //user's input in searchbar
  const [search, setSearch] = useState("")
  //pokemon characteristic, endpoint is an array of objects
  const [types, setTypes] = useState([])
  //pokemon height
  const [height, setHeight] = useState("")
  //pokemon weight
  const [weight, setWeight] = useState("")
  //play/pause music hook
  const [isPlaying, setIsPlaying] = useState(false)

  
  useEffect (() => {
    //watching for changes in pokemonNum
    //if pokemonNum changes, run fetch call but use pokemonNum (instead of lowerCaseSearch)
    const fetchURL = `https://pokeapi.co/api/v2/pokemon/${pokemonNum}/`
    if (search === "" && pokemonNum === "") {
      return
    }
    //fetch data from api (hardcoded for now)
    fetch(fetchURL)
    //take the response and convert to JSON
    .then(response => response.json())
    //console log for now (eventually would set to state)
    .then(data => {
      setPokemon(data.name)
      setPokemonNum(data.id)
      setTypes(data.types)
      setHeight(data.height)
      setWeight(data.weight)
    })
    .catch(() => alert("Please enter a valid pokemon name or #"))
    
  }, [pokemonNum])

  //TODO: DRY the useEffect to cover both name and number changes
  const handleSubmit = (e) => {
    //to lowercase user input for it to work with API
    const lowerCaseSearch = search.toLowerCase()
    //API endpoint with interpolation for dynamic value.
    //once search button is clicked take the lowercased value of text input
    const fetchURL = `https://pokeapi.co/api/v2/pokemon/${lowerCaseSearch}/`

    //fetch data from api (hardcoded for now)
    fetch(fetchURL)
    //take the response and convert to JSON
    .then(response => response.json())
    //console log for now (eventually would set to state)
    .then(data => {
      setPokemon(data.name)
      setPokemonNum(data.id)
      setTypes(data.types)
      setHeight(data.height)
      setWeight(data.weight)
    })
    .catch(() => alert("Please enter a valid pokemon name or # from 1-809"))

    e.preventDefault()
  }

  const handleChange = (e) => {
    //keep track of what is in text input
    setSearch(e.target.value)
  }

  //NOTE: looping does not work unless setPokemonNum is set to type integer
  const handleScrollClick = (e) => {
    //if nothing has been searched yet stop the scroll buttons.
    if (pokemonNum === ""){
      return;
    }
    //if on lower bound, go to the last pokemon
    if (pokemonNum === 1 && e.target.value === "-") {
      setPokemonNum(809)
    //if on upper bound. go to the first pokemon
    } else if(pokemonNum === 809 && e.target.value === "+") {
      setPokemonNum(1)
    } else if (e.target.value === "-") {
      setPokemonNum(pokemonNum - 1)
    } else {
      setPokemonNum(pokemonNum + 1)
    }
  }

  //Ditto button functionality
  const randomizePokemon = () => {
    //generate a random number between 1-809
    let randomNum = Math.floor(Math.random() * 809) + 1
    setPokemonNum(randomNum)
  }

  //capitalize function
  const capitalize = (str) => {
    //take the first letter of string and toUpperCase it
    let firstChar = str.charAt(0).toUpperCase()
    //take the rest of the string and concatenate first char onto it
    let capitalizedStr = firstChar + str.slice(1, str.length)
    //return new str
    return capitalizedStr
  }

  //play/pause function
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const gifHandler = (str) => {
    //URL for gif
    //url for the sprite to display 
    const gifName = removeDash(str)
    const gifURL = `https://projectpokemon.org/images/normal-sprite/${gifName}.gif`
    return gifURL
  }

  //TODO: does not work with pokemon #772 "type-null"
  const removeDash = (str) => {
    if(str.includes("-")){
      return str.split("-").join("")
    } else {
      return str
    }
  }
  
  const ColorPicker = (type) => {
    // returns a hex code
    console.log("type", type)
    const colorType = Colors[type.type.name]
    console.log(colorType)
    return colorType
  }

  // const typesArray = types.map((value, index) => {
  //     <TypeBlock
  //       key={index}
  //       type={ColorPicker(value)}
  //     >
  //       { value }
  //     </TypeBlock>
  //   }
  // )
  
  return (
    <AppWrapper>
      <GlobalStyle />
      <Sound
        url={LittleRoot}
        playStatus={
          isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
        }
        loop={true}
        volume={10}
      />
      <h1>Pokédex</h1>
      <ContainerWrapper>
        <SearchBarWrapper>
          <SearchBar 
            type="text"
            placeholder="Enter a Poké name or #."
            value={search}
            onChange={handleChange}
          />
          <SearchButton 
            value="🔎"
            onClick={handleSubmit}
          >
            <MagnifyingGlass viewBox="0 0 417 417" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
              <path d="M286.6 340.204l61.912 61.912c13.008 13.009 34.131 13.009 47.14 0 13.009-13.008 13.009-34.131 0-47.14l-59.501-59.501c23.25-30.438 37.069-68.47 37.069-109.703 0-99.889-81.096-180.985-180.984-180.985S11.251 85.883 11.251 185.772c0 99.888 81.097 180.984 180.985 180.984 34.561 0 66.873-9.709 94.364-26.552zm-94.364-268.75c63.094 0 114.318 51.224 114.318 114.318 0 63.093-51.224 114.317-114.318 114.317S77.918 248.865 77.918 185.772c0-63.094 51.224-114.318 114.318-114.318z"/>
            </MagnifyingGlass>
          </SearchButton>
        </SearchBarWrapper>
        <AssetWrapper>
          <DittoButton
            onClick={randomizePokemon}
          >
            <DittoImg src={ditto} alt="pixel ditto pokemon" />
          </DittoButton>
          <OuterScreenWrapper>
            <ScreenWrapper>
              <Display>
                {pokemonNum === "" ? (
                  <PokemonLogo src={pokemonLogo} alt="pokemon logo" />
                ) : (
                  <div>
                    <PokemonNameNo><span>no.</span>{pokemonNum}<br/>{capitalize(pokemon)}</PokemonNameNo>
                    <PokemonContainer>
                      <PokemonSprite src={gifHandler(pokemon)} alt={`${pokemon} sprite`} />
                      <PokeInfo>
                        <p><b>Height:</b> {height/10} m</p>
                        <p><b>Weight:</b> {weight/10} kg</p>
                        {types.map((value, index) => {
                          return (
                            //TODO: turn TypeBlock into a span and wrap the map in p tag
                            <TypeBlock
                              key={index}
                              type={ColorPicker(value)}
                            >
                              {value.type.name}
                            </TypeBlock>)
                          })
                        }
                      </PokeInfo>
                    </PokemonContainer>
                  </div>
                )}
              </Display>
              <PokedexDecor>
                <PowerButton />
                <VolumeSlits>
                  <Slits />
                  <Slits />
                  <Slits />
                  <Slits />
                </VolumeSlits>
              </PokedexDecor>
            </ScreenWrapper>
          </OuterScreenWrapper>
          <ScrollWrapper>
            <ScrollIcon src={scrollUp} alt="" />
            <ScrollUpButton
              value="-"
              onClick={handleScrollClick}
            >
              <ScrollDivot />
              <ScrollDivot />
              <ScrollDivot />
              <ScrollDivot />
            </ScrollUpButton>
            <ScrollDownButton
              value="+"
              onClick={handleScrollClick}
            >
              <ScrollDivot />
              <ScrollDivot />
              <ScrollDivot />
              <ScrollDivot />
            </ScrollDownButton>
            <ScrollIcon src={scrollDown} alt=""/>
          </ScrollWrapper>
        </AssetWrapper>
      </ContainerWrapper>
      <MusicButton onClick={handlePlayPause}>
        {!isPlaying ? 'Play Music' : 'Stop Music'}
      </MusicButton>
      <Disclaimer>
        <p>Disclaimer: Best viewed on a computer. Pokémon not loading? Open an issue <a href="https://github.com/bndiep/pokedex/issues" target="_blank">here.</a></p>
      </Disclaimer>
      <footer style={{
        position: "absolute",
        bottom: "0"
      }}>Developed by <a href="https://bndiep.github.io/portfolio/" target="_blank">Bach</a> and <a href="https://github.com/rmdpalo" target="_blank">Miguel</a>.</footer>
    </AppWrapper>
  )
}

export default App;