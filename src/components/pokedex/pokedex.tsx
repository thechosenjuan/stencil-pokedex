import { Component, State } from "@stencil/core";
import { LeftPanel } from "../LeftPanel/LeftPanel";
import { Divider } from "../Divider/Divider";
import { RightPanel } from "../RightPanel/RightPanel";
import '@fortawesome/fontawesome-free/js/all.js'

@Component({
  tag: "pokedex-class",
  styleUrl: "pokedex.css",
  // shadow: true
})
export class PokedexClass {
  @State() requestRoot = "https://pokeapi.co/api/v2/pokemon/";
  @State() pokemonIndex = 1;
  @State() pokemonData = {};
  @State() pokemonDescription = "";
  @State() speciesData = {};
  @State() evoSprites: any;
  @State() evoNames: any;
  @State() moves: any;
  @State() description = "";
  @State() loading = false;

  nextPokemon = () => {
    const next = Math.min(this.pokemonIndex + 1, 949);
    this.pokemonIndex = next;
    this.changePokemon()
    // addthis.changePokemon callback
  };

  previousPokemon = () => {
    const prev = Math.max(this.pokemonIndex - 1, 1);
    this.pokemonIndex = prev;
    this.changePokemon()
    // addthis.changePokemon callback
  };

  pickPokemon = no => {
    this.pokemonIndex = no;
    this.changePokemon()
    // addthis.changePokemon callback
  };

  changePokemon() {
    this.loading = true;
    const request = `${this.requestRoot}${this.pokemonIndex}/`;
    fetch(request, {
      cache: "force-cache"
    })
      .then(response => response.json())
      .then(data => {
        this.pokemonData = data;
        this.pokemonIndex = data.id;
        const speciesRequest = data.species.url;
        return fetch(speciesRequest);
      })
      .then(response => response.json())
      .then(data => {
        this.speciesData = data;
        this.description = pickRandom(
          data.flavor_text_entries
            .filter(e => e.language.name === "en")
            .map(e => e.flavor_text)
        );
        this.loading = false;

        const evo_chain = data.evolution_chain.url;
        fetch(evo_chain)
          .then(response => response.json())
          .then(data => {
            const api = "https://pokeapi.co/api/v2/pokemon/";
            const first = data.chain;
            let second;
            let third;
            let evos = [];
            if (first) {
              const e1 = fetch(`${api}${first.species.name}/`);
              evos.push(e1);
              second = first.evolves_to[0];
            }
            if (second) {
              const e2 = fetch(`${api}${second.species.name}/`);
              third = second.evolves_to[0];

              evos.push(e2);
            }
            if (third) {
              const e3 = fetch(`${api}${third.species.name}/`);
              evos.push(e3);
            }
            Promise.all(evos)
              .then(responses =>
                Promise.all(responses.map(value => value.json()))
              )
              .then(dataList => {
                const sprites = dataList.map(v => v.sprites.front_default);
                const names = dataList.map(n => n.name);
                this.evoSprites = sprites;
                this.evoNames = names;
              });
          });
      });
  }

  componentWillLoad() {
    this.changePokemon();
  }

  render() {
    const pData = this.pokemonData;
    const sData = this.speciesData;
    return (
      <div class="pokedex">
        <LeftPanel
          pData={pData}
          sData={sData}
          no={this.pokemonIndex}
          description={this.description}
        />
        <Divider />
        <RightPanel
          pData={pData}
          sData={sData}
          evoSprites={this.evoSprites}
          evoNames={this.evoNames}
          controls={{
            next: this.nextPokemon,
            prev: this.previousPokemon,
            pick: this.pickPokemon
          }}
          no={this.pokemonIndex}
        />
      </div>
    );
  }
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
