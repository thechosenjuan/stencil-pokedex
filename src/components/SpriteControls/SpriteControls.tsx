import {FunctionalComponent} from "@stencil/core";

interface SpriteControlsProps {
  gender: boolean;
  funcs: any;
  front: boolean;
  shiny: boolean;

}
export const SpriteControls: FunctionalComponent<SpriteControlsProps> = ({gender, funcs, front, shiny}) => {
  return (
    <div class="sprite-controls">
      <div
        class={
          "sprite-control sprite-controls-gender " +
          (gender ? "sprite-control-selected" : "")
        }
        onClick={funcs.gender}
      >
        <i class="fas fa-venus" />
      </div>
      <div
        class={
          "sprite-control sprite-controls-shiny " +
          (shiny ? "sprite-control-selected" : "")
        }
        onClick={funcs.shiny}
      >
        <span>shiny</span>
      </div>
      <div
        class={
          "sprite-control sprite-controls-rotate " +
          (!front ? "sprite-control-selected" : "")
        }
        onClick={funcs.front}
      >
        <i class="fas fa-undo" />
      </div>
    </div>
  );
} ;
