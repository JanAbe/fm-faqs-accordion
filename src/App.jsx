import './App.css'
import {Accordion} from "./components/Accordion.jsx";
import {AccordionItem} from "./components/AccordionItem.jsx";
import {AccordionTitle} from "./components/AccordionTitle.jsx";
import backgroundImage from "./assets/images/background-pattern-desktop.svg"
import backgroundImageMobile from "./assets/images/background-pattern-mobile.svg"
import {AccordionBody} from "./components/AccordionBody.jsx";
import {useState} from "react";
import { isMobile } from "react-device-detect";

function App() {

  const content = [
    {
      id: 1,
      title: "What is Frontend Mentor, and how will it help me?",
      text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      id: 2,
      title: "Is Frontend Mentor free?",
      text: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      id: 3,
      title: "Can I use Frontend Mentor projects in my portfolio?",
      text: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      id: 4,
      title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      text: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  const [selectedItemId, setSelectedItemId] = useState(undefined);

  const handleSelect = (id) => {
    setSelectedItemId(prevState => {
      if (id === prevState) {
        return undefined;
      }

      return id;
    });
  }

  return (
    <main>
      <div>
        {!isMobile && <img src={backgroundImage} alt="some background"/>}
        {isMobile && <img src={backgroundImageMobile} alt="some background"/>}
      </div>
      <div className="accordion-wrapper">
        <Accordion>
          <AccordionTitle />
          <AccordionBody>
            {content.map((item) => (
              <AccordionItem key={item.id} title={item.title} text={item.text} id={item.id} onSelect={handleSelect} selectedId={selectedItemId} />
            ))}
          </AccordionBody>
        </Accordion>
      </div>
    </main>
  )
}

export default App
