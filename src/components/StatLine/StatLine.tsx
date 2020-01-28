export const StatLine = props => {
  function padStats(stat, val, sep, len) {
    val = val || "xx";
    let output = `
    ${stat.toString()}${sep.repeat(
      len - (val.toString().length + stat.toString().length)
    )}${val.toString()}`;
    return output;
  }
  return (
    <div class="stat-line">
      {padStats(props.name, props.value, ".", 20)}
      {/* <span>{props.name}</span>
      {".".repeat(20 - props.name.length)}
      <span>{props.value}</span> */}
    </div>
  );
};
