import "./people.css";

type PeopleType = {
  name: string;
  age: string;
};

export const People: React.FC<PeopleType> = (prop) => {
  return (
    <div className="people">
      <h3>My name is {prop.name}</h3>
      <h4>My age is {prop.age}</h4>
    </div>
  );
};
