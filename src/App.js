import { useState} from "react"
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
import {gifHandler,ColorPicker,capitalize} from './utils/utils';

const App = () => {
  //pokemon in state
  const [pokemon, setPokemon] = useState(null);
  const [search, setSearch] = useState("")
  const [playSound, setPlaySound] = useState(false)

  const fetchPokemon = async (search) => {
    const fetchURL = `https://pokeapi.co/api/v2/pokemon/${search}/`;
    try {
      if (pokemon?.id != search) {
        const response = (await fetch(fetchURL));
        const data = await response.json();

        setPokemon(data);
      }

    } catch (error) {
      console.log({error})
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPokemon(search);
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase())
  }

  const handleScrollClick = (e) => {
    //if nothing has been searched yet stop the scroll buttons.
    if (pokemon?.id === ""){
      return
    }
    // //if on lower bound, go to the last pokemon
    if (pokemon?.id === 1 && e.target.value === "-") {
        fetchPokemon("809");//
    //if on upper bound. go to the first pokemon
    } else if(pokemon?.id === 809 && e.target.value === "+") {
       fetchPokemon("1");//
    } else if (e.target.value === "-") {
      const searchVal = pokemon?.id - 1 || "";
       fetchPokemon(searchVal.toString());//

    } else {
       const searchVal = pokemon?.id + 1 || "";
       fetchPokemon(searchVal.toString());//
    }
  }

  //Ditto button functionality
  const randomizePokemon = async (e) => {
     let randomNum = Math.floor(Math.random() * 809) + 1
    fetchPokemon(randomNum.toString());//
  }

  //play/pause function
 const handlePlaySound = () => {
    setPlaySound(!playSound)
  }

  return (
    <AppWrapper>
      <GlobalStyle />
      <Sound
        url={LittleRoot}
        playStatus={
          playSound ? Sound.status.PLAYING : Sound.status.STOPPED
        }
        loop={true}
        volume={10}
      />
      <h1>Pokédex</h1>
      <ContainerWrapper>
        <SearchBarWrapper>
          <SearchBar
            type="text"
            aria-label="Pokémon name or number"
            placeholder="Enter a Poké name or #."
            value={search}
            onChange={handleSearchChange}
          />
          <SearchButton
            aria-label="Search"
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
                {!pokemon?.id ? (
                  <PokemonLogo src={pokemonLogo} alt="pokemon logo" />
                ) : (
                  <div>
                    <PokemonNameNo><span>no.</span>{pokemon?.id}<br/>{capitalize(pokemon?.name)}</PokemonNameNo>
                    <PokemonContainer>
                      <PokemonSprite src={gifHandler(pokemon?.name)} alt={`${pokemon?.name} sprite`} />
                      <PokeInfo>
                        <p><b>Height:</b> {pokemon?.height/10} m</p>
                        <p><b>Weight:</b> {pokemon?.weight/10} kg</p>
                        <p>
                          {pokemon.types.map((value, index) => {
                            return (
                              <TypeBlock
                                key={index}
                                type={ColorPicker(value)}
                              >
                                {value.type.name}
                              </TypeBlock>)
                            })
                          }
                        </p>
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
      <MusicButton onClick={handlePlaySound}>
        {!playSound ? 'Play Music' : 'Stop Music'}
      </MusicButton>
      <Disclaimer>
        <p>Disclaimer: Best viewed on a computer. Pokémon not loading? Open an issue <a href="https://github.com/bndiep/pokedex/issues" target="_blank" rel="noreferrer">here.</a></p>
      </Disclaimer>
      <footer style={{
        position: "absolute",
        bottom: "0"
      }}>Developed by <a href="https://bndiep.github.io/portfolio/" target="_blank" rel="noreferrer">Bach</a> and <a href="https://github.com/rmdpalo" target="_blank" rel="noreferrer">Miguel</a>.</footer>
    </AppWrapper>
  )
}

export default App
