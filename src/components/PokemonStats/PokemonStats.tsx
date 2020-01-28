import { StatLine } from "../StatLine/StatLine";

export const PokemonStats = props => {
  const stats = props.stats;
  return (
    <div class="screen stats">
      {stats.map(s => {
        const name = s.stat.name;
        const value = s.base_stat;

        return <StatLine name={name} value={value} key={name} />;
      })}
    </div>
  );
};
