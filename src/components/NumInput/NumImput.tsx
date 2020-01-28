import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: "num-input"
})
export class NumImput {
  @State() id = 1;
  @Prop() func: any;
  @Prop() no: number;

  handleChange = e => {
    console.log(e);
    e.preventDefault();
    this.id = e.target.value;
  };

  handleClick = e => {
    e.preventDefault();
    this.func(this.id);
  };
  render() {
    return (
      <div>
        <input
          type="number"
          class="screen num-input"
          max="807"
          placeholder={this.no.toString()}
          onChange={this.handleChange}
        />
        <div class="submit" onClick={this.handleClick} />
      </div>
    );
  }
}
