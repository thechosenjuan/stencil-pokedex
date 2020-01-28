import { Component, State, Prop } from "@stencil/core";
import { SpriteControls } from "../SpriteControls/SpriteControls";

@Component({
  tag: "pokemon-sprite"
})
export class PokemonSprite {
  @Prop() src: any;
  @State() front = true;
  @State() shiny = false;
  @State() female = false;

  buildImage() {
    const dir = this.front ? "front" : "back";
    const gender = this.female ? "_female" : "";
    const shiny = this.shiny ? "_shiny" : "_default";
    // console.log(dir + shiny + gender);
    return dir + shiny + gender;
  }
  toggleGender = () => {
    // console.log("toggling gender");
    this.female = !this.female;
    // if (this.src[this.buildImage()]) {
    //   return;
    // } else {
    //   this.female = false
    // }
  };

  toggleShiny = () => {
    // console.log("toggling shiny");
    this.shiny = !this.shiny;
    // if (this.src[this.buildImage()]) {
    //   return;
    // } else {
    //   this.shiny = false
    // }
  };

  toggleFront = () => {
    this.front = !this.front;
    // if (this.src[this.buildImage()]) {
    //   return;
    // } else {
    //   this.front = false
    // }
  };
  render() {
    const imgSrc = this.src[this.buildImage()] || this.src["front_default"];
    const funcs = {
      gender: this.toggleGender,
      front: this.toggleFront,
      shiny: this.toggleShiny
    };
    return (
      <div>
        <img src={imgSrc} alt="pokemon" class="pokemon-sprite" />
        <SpriteControls
          funcs={funcs}
          gender={this.female}
          shiny={this.shiny}
          front={this.front}
        />
      </div>
    );
  }
}
