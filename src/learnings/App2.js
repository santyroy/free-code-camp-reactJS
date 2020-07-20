import React from "react";
import ContactCard from "./ContactCard";

function App() {
  return (
    // <div className="todo-list">
    //   <ToDoItem />
    //   <ToDoItem />
    //   <ToDoItem />
    //   <ToDoItem />
    // </div>
    <div className="contacts">
      <ContactCard
        contact={{
          name: "Mr. Wiskerson",
          imgUrl: "https://placekitten.com/300/200",
          phone: "1234567",
          email: "email@email.com",
        }}
      />
      <ContactCard
        contact={{
          name: "Mr. Fluffykins",
          imgUrl: "https://placekitten.com/400/200",
          phone: "1234567",
          email: "email@email.com",
        }}
      />
      <ContactCard
        contact={{
          name: "Mr. Destroyer",
          imgUrl: "https://placekitten.com/400/300",
          phone: "1234567",
          email: "email@email.com",
        }}
      />
      <ContactCard
        contact={{
          name: "Mr. Felix",
          imgUrl: "https://placekitten.com/200/100",
          phone: "1234567",
          email: "email@email.com",
        }}
      />
    </div>
  );
}

export default App;
