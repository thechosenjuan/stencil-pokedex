import { PokemonSpriteSmall } from "../PokemonSpriteSmall/PokemonSpriteSmall";

export const PokemonEvolution = props => {
  const e1 = props.evoSprites ? props.evoSprites[0] : null ;
  const e2 = props.evoSprites ? props.evoSprites[1] : null ;
  const e3 = props.evoSprites ? props.evoSprites[2] : null ;
  const n1 = props.evoNames ? props.evoNames[0] : null ;
  const n2 = props.evoNames ? props.evoNames[1] : null;
  const n3 = props.evoNames? props.evoNames[2] : null;

  return (
    <div class="panel-row panel-evo">
      {/* <div className="panel-header evo-header">Evolutions</div> */}
      <PokemonSpriteSmall src={e1} evo="I" name={n1} />
      <PokemonSpriteSmall src={e2} evo="II" name={n2} />
      <PokemonSpriteSmall src={e3} evo="III" name={n3} />
    </div>
  );
};
