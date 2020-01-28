import { Button } from "../Button/Button";

export const PokedexControls = props => {
  return (
    <div class="panel-row controls">
      <Button dir="left" onClick={props.controls.prev} />
      <num-input no={props.no} func={props.controls.pick}></num-input>
      <Button dir="right" onClick={props.controls.next} />
    </div>
  );
};
