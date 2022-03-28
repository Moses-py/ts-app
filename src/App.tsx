import React, { useState } from "react";
import List from "./components/List";
import "./App.css";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      age: 36,
      url: "https://i.pinimg.com/originals/52/d2/96/52d296cbbcb6c2584724fbf91c7e79d0.jpg",
      note: "Allergic to staying on a single team",
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to our party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
