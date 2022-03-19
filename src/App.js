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
  };

  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={() => console.log("No hace nada")}
            items={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
