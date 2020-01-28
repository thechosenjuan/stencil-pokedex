export const PokemonName = props => {
  return (
    <div class="pokemon-name screen">
      {props.name}
      <span class="name-no">no. {props.no}</span>
    </div>
  );
};
