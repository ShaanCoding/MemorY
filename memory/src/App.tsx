import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ThemeWrap from "./Components/ThemeWrap";
import { CardData } from "./Components/Card";
import AddCardBox from "./Components/AddCardBox";
import CardList from "./Components/CardList";
import { AppBar, Container, Toolbar } from "@material-ui/core";

function App() {
  // We now need a hook for cards, and track when they are updated, by default they will be an empty object
  const [cards, setCards] = useState<CardData[]>([]);
  console.log(cards);

  return (
    <ThemeWrap>
      {/* Simple navbar for menu */}
      <AppBar position="static">
        <Toolbar>
          <h1>MemorY</h1>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        <AddCardBox
          onAdd={(card) => {
            // Spread operator
            setCards([...cards, card]);
          }}
        />

        <CardList
          cards={cards}
          onCardDelete={(id) => {
            //We filter for all cards that aren't the we want, and we overwrite the array
            setCards(cards.filter((c) => c.id != id));
          }}
        />
      </Container>
    </ThemeWrap>
  );
}

export default App;
