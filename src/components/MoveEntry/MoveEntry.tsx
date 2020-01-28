export const MoveEntry = props => {
  const move = props.move;
  const name =
    move.name || move.names.filter(m => m.language.name === "en")[0].name;
  const acc = move.accuracy;
  const pow = move.power;
  const pp = move.pp;
  const type = move.type.name;
  //   const status = "" || "---";˝
  const lvl = props.lvl;
  // console.log("move ", move);
  function padStats(stat, val, sep, len) {
    val = val || "xx";
    let output = `
    ${stat.toString()}${sep.repeat(
      len - (val.toString().length + stat.toString().length)
    )}${val.toString()}`;
    return output;
  }
  return (
    <div class="move-body move-screen screen">
      <div class="move-left">
        <div class="move-name">{name}</div>
        <div class="move-stat">{padStats("Accuracy", acc, ".", 16)}</div>
        <div class="move-stat">{padStats("Power", pow, ".", 16)}</div>
        <div class="move-stat">{padStats("PP", pp, ".", 16)}</div>
      </div>
      <div class="move-right">
        <div class="move-type">Type: {type}</div>
        {/* <div className="move-status">Status Effect: {status}</div> */}
        <div class="move-learn">Learn: Lvl {lvl}</div>
      </div>
    </div>
  );
};
