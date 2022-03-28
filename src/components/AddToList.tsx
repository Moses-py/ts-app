import React, { useState } from "react";
import { IState as IProps } from "../App";

interface Props {
  people: IProps["people"];
  setPeople: React.Dispatch<React.SetStateAction<IProps["people"]>>;
}

const AddToList: React.FC<Props> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note,
      },
    ]);
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        value={input.name}
        placeholder="Name"
        className="AddToList-input"
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        value={input.age}
        placeholder="Age"
        className="AddToList-input"
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        value={input.url}
        placeholder="Image URL"
        className="AddToList-input"
        name="url"
        onChange={handleChange}
      />
      <textarea
        placeholder="Note"
        value={input.note}
        rows={10}
        className="AddToList-input"
        name="note"
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add To List
      </button>
    </div>
  );
};

export default AddToList;
