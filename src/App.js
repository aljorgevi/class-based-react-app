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
    carro: [],
    esCarroVisible: false,
  };

  agregarAlCarro = (producto) => {
    const { carro } = this.state;

    if (carro.find((p) => p.nombre === producto.nombre)) {
      const newCarro = carro.map((p) =>
        p.nombre === producto.nombre ? { ...p, cantidad: p.cantidad + 1 } : p
      );
      return this.setState({ carro: newCarro });
    }

    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  };

  //

  mostrarCarro = () => {
    if (!this.state.carro.length) return;

    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  };

  render() {
    const { esCarroVisible } = this.state;
    return (
      <div>
        <Navbar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
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
