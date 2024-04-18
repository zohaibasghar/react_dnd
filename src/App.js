import "./App.css";
import CardList from "./Components/CardsList";
import DNDList from "./Components/DNDList";

const cards = [
  {
    title: "me",
    description: "lorem ipsum",
  },
  {
    title: "lun",
    description: "lorem ipsum",
  },
  {
    title: "ki",
    description: "lorem ipsum",
  },
  {
    title: "maa",
    description: "lorem ipsum",
  },
  {
    title: "sami",
    description: "lorem ipsum",
  },
  {
    title: "ki",
    description: "lorem ipsum",
  },
  {
    title: "chut",
    description: "lorem ipsum",
  },
];
function App() {
  return (
    <div className="App">
      {/* <CardList cards={cards} /> */}
      <DNDList />
    </div>
  );
}

export default App;
