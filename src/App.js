import "./App.css";
import { Component } from "react";
import Productos from "./components/Productos";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout.js";

class App extends Component {
  state = {
    productos: [
      { nombre: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
      { nombre: "Arbejas", price: 2500, img: "/productos/arbejas.jpg" },
      { nombre: "Lechuga", price: 500, img: "/productos/lechuga.jpg" },
    ],
    carro: [
      // { nombre: "Tomate", price: 1500, img: "/productos/tomate.jpg", cantidad: 1 },
    ],
  };

  agregarAlCarro = (producto) => {
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  };

  render() {
    console.log(this.state.carro);
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            items={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
