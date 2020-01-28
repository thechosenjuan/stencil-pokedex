export const MovesLoading = () => {
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
        <div class="move-name" style={{ textTransform: "none" }}>
          xxxxx xxxxx
        </div>
        <div class="move-stat">{padStats("Accuracy", "xx", ".", 16)}</div>
        <div class="move-stat">{padStats("Power", "xx", ".", 16)}</div>
        <div class="move-stat">{padStats("PP", "xx", ".", 16)}</div>
      </div>
      <div class="move-right">
        <div class="move-type">Type: xxxxx</div>
        {/* <div className="move-status">Status Effect: {status}</div> */}
        <div class="move-learn">Learn: Lvl xx</div>
      </div>
    </div>
  );
};
