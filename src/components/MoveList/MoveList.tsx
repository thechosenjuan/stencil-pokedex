import { Component, Prop, State, Watch } from "@stencil/core";
import { MovesLoading } from "../MovesLoading/MovesLoading";
import { MoveEntry } from "../MoveEntry/MoveEntry";
@Component({
  tag: "move-list"
})
export class MoveList {
  @State() index = 0;
  @State() currentMove = {};
  @State() loading = false;

  @Prop() moves: [];
  @Watch("moves")
  loadMoves() {
    this.loading = true;
    // @ts-ignore
    fetch(this.moves[this.index].move.url)
      .then(response => response.json())
      .then(data => {
        this.currentMove = data;
        this.loading = false;
      });
  }
  componentWillLoad() {
    this.loadMoves();
  }
  componentDidUpdate() {}
  nextMove = () => {
    const nextIndex = Math.min(this.index + 1, this.moves.length - 1);
    this.index = nextIndex;
    this.loadMoves();
  };

  prevMove = () => {
    const nextIndex = Math.max(this.index - 1, 0);
    this.index = nextIndex;
    this.loadMoves();
  };
  render() {
    let moves;
    // let cur_move = this.props.moves[this.state.index];
    if (this.loading || Object.keys(this.currentMove).length === 0) {
      moves = <MovesLoading />;
    } else {
      // @ts-ignore
      const lvl = this.moves[this.index].version_group_details[0]
        .level_learned_at;
      moves = <MoveEntry move={this.currentMove} lvl={lvl} />;
    }

    return (
      <div class="move-list">
        {moves}
        <div class="move-controls">
          <div class="move-arrow" onClick={this.prevMove}>
            <i class="fas fa-caret-up" />
          </div>
          <div class="move-arrow" onClick={this.nextMove}>
            <i class="fas fa-caret-down" />
          </div>
        </div>
      </div>
    );
  }
}
