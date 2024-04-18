import "./App.css";
import CardList from "./Components/CardsList";
import FramerList from "./Components/FramerList";

const cards = [
  {
    title: "stp1",
    description: "lorem ipsum",
  },
  {
    title: "stp2",
    description: "lorem ipsum",
  },
  {
    title: "stp3",
    description: "lorem ipsum",
  },
  {
    title: "stp4",
    description: "lorem ipsum",
  },
  {
    title: "stp5",
    description: "lorem ipsum",
  },
  {
    title: "stp6",
    description: "lorem ipsum",
  },
  {
    title: "stp7",
    description: "lorem ipsum",
  },
];
function App() {
  return (
    <div className="App">
      <h2>Custom component</h2>
      <code style={{ paddingBottom: "20px" }}>Support every direction</code>
      <CardList cards={cards} />
      <h2>Framer Motion</h2>
      <code>Most libraries dont support both x and y axises</code>
      <FramerList cards={cards} />
    </div>
  );
}

export default App;
