import React from "react";
import { IState as IProps } from "../App";

const List: React.FC<IProps> = ({ people }) => {
  const renderPeople = () => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img src={person.url} alt="missing_image" className="List-img" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age}</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };
  return <ul>{renderPeople()}</ul>;
};

export default List;
