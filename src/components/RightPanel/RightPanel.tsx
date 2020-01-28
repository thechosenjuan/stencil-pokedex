import { PokemonStats } from "../PokemonStats/PokemonStats";
import { PokemonType } from "../PokemonType/PokemonType";
import { PokemonEvolution } from "../PokemonEvolution/PokemonEvolution";
import { ButtonChrome } from "../ButtonChrome/ButtonChrome";
import { PokedexControls } from "../PokedexControls/PokedexControls";
import { Loading } from "../Loading/Loading";

export const RightPanel = props => {
  const types = props.pData.types;
  const stats = props.pData.stats;
  const moves = props.pData.moves;
  const controls = props.controls;
  const no = props.no;

  if (types) {
    return (
      <div class="panel right-panel">
        <div class="panel-row">
          <PokemonStats stats={stats} />
          <PokemonType types={types} />
        </div>

        <PokemonEvolution
          evoSprites={props.evoSprites}
          evoNames={props.evoNames}
        />
        <ButtonChrome />
        <move-list moves={moves} />
        <PokedexControls controls={controls} no={no} />
      </div>
    );
  } else {
    return Loading();
  }
};
