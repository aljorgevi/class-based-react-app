import { Component } from "react";
import Producto from "./Producto";

const styles = {
  productos: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
};

class Productos extends Component {
  render() {
    const { items, agregarAlCarro } = this.props;

    return (
      <div style={styles.productos}>
        {items.map((item) => {
          return (
            <Producto
              key={item.nombre}
              agregarAlCarro={agregarAlCarro}
              producto={item}
            />
          );
        })}
      </div>
    );
  }
}

export default Productos;
