import { PokeBall } from "../Pokeball/Pokeball";

export const PokemonSpriteSmall = props => {
  let evoImage = props.src ? (
    <img
      src={props.src}
      alt="pokemon"
      class="pokemon-sprite pokemon-sprite-small"
    />
  ) : (
    <PokeBall />
  );
  return (
    <div>
      <div class="flex-center">
        <div class="evo-num">{props.evo}</div>
      </div>
      {evoImage}
      <div class="screen evo-name">{props.name || "No Data"}</div>
    </div>
  );
};
