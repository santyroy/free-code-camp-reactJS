import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemes: [],
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        const memes = response.data; // store the data into a local variable
        this.setState({ allMemes: memes }); // then set the value to the state
        console.log("Memes: ", this.state.allMemes.memes[0].url);
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    const rand = Math.random() * this.state.allMemes.memes.length;
    const randImgURL = this.state.allMemes.memes[Math.floor(rand)].url;
    const randTop = this.state.allMemes.memes[Math.floor(rand)].name;
    this.setState({
      randomImg: randImgURL,
      topText: randTop,
    });
    event.preventDefault(); // prevent to refresh our page on submit
  };

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            placeholder="Top Text"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            placeholder="Bottom Text"
            onChange={this.handleChange}
          />
          <button>Gen</button>
        </form>

        <section className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </section>
      </main>
    );
  }
}

export default MemeGenerator;
