export const PokemonType = props => {
  const types = props.types;
  return (
    <div class="type-list">
      <div class="panel-header">Types</div>
      <div class="type-box">
        {types.map(t => {
          const type = t.type.name;
          return <div class={"type " + type}>{type}</div>;
        })}
      </div>
      {/* <div className="panel-header">Evolutions</div> */}
    </div>
  );
};
