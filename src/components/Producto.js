import { Component } from "react";
import Button from "./Button";

const styles = {
  producto: {
    border: "solid 1px #ccc",
    boxShadow: "0 5px 5px rgb(0,0,0,0.1)",
    width: "30%",
    padding: "15px 10px",
    borderRadius: "5px",
  },
  img: {
    width: "100%",
    display: "block",
    objectFit: "cover",
  },
};

class Producto extends Component {
  render() {
    const { producto, agregarAlCarro } = this.props;
    return (
      <div style={styles.producto}>
        <img style={styles.img} src={producto.img} alt={producto.nombre} />
        <h3>{producto.nombre}</h3>
        <p>{producto.price}</p>
        <Button onClick={() => agregarAlCarro(producto)}>
          Agregar al carro
        </Button>
      </div>
    );
  }
}

export default Producto;
