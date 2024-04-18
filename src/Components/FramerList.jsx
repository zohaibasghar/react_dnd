import { Reorder } from "framer-motion";
import { useState } from "react";

export default function FramerList({ cards }) {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  return (
    <Reorder.Group
      values={items}
      onReorder={setItems}
      style={{ padding: "20px", border: "1px solid black" }}
    >
      {items.map((item) => (
        <Reorder.Item key={item} value={item}>
          <h2>Lorem.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
            similique?
          </p>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
