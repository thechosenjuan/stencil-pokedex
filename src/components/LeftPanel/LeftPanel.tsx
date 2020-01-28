import { Loading } from "../Loading/Loading";
import {PokemonName} from "../PokemonName/PokemonName";

export const LeftPanel = props => {
  const pData = props.pData;

  if (typeof pData === "object" && Object.keys(pData).length !== 0) {
    return (
      <div class="panel left-panel">
        <PokemonName name={pData.name} no={props.no} />
        <pokemon-sprite src={pData.sprites} />
        <div class="pokemon-description screen">{props.description}</div>
      </div>
    );
  } else {
    return Loading();
  }
};
