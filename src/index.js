import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar photoName="pathfinder.jpg" name="Moises Pathfinder"></Avatar>
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function Avatar(props) {
  return (
    <div>
      <img className="avatar" src={props.photoName} alt={props.name} />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Moises Perez</h1>
      <body>
        Proficient Programmer and Game Developer who is successful in
        progressing on project milestones and creating new solutions surrounding
        user feedback. A driven developer who is knowledgeable in creating quick
        game prototypes and creating design documents for project systems. A
        highly effective and flexible individual who values teamwork and
        passionate organizations to achieve customer goals.
      </body>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="😱" color="orange" />
      <Skill skill="C++" emoji="😩" color="#597cd2" />
      <Skill skill="Game Design" emoji="👽" color="#e04f15" />
      <Skill skill="C#" emoji="😤" color="#27c92f" />
      <Skill skill="Sound Design" emoji="🥵" color="#c4defe" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill} </span>
      <span>{props.emoji}</span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
