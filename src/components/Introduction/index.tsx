import SocialIcons from "components/SocialMedia"
import React from "react";
import Typed from "typed.js";
import { InnerIntrouductionWrapper, IntrouductionWrapper, NameIntro, DetailedIntro, TagIntro } from "./styled"


const Introduction = () => {
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    let typed = React.useRef(null);


    React.useEffect(() => {
        const options = {
            strings: [
            `Hi, I'm Idris Kelani.`,
          ],
          typeSpeed: 50,
          showCursor: false,
        };
        
        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);
        
        return () => {
          // Make sure to destroy Typed instance during cleanup
          // to prevent memory leaks
        //   typed.current.destroy();
        }
      }, [])

    return <IntrouductionWrapper>
        <InnerIntrouductionWrapper>
            <NameIntro ref={el} />
            <TagIntro>
                Software Engineer, Mentor and Researcher
            </TagIntro>
            <SocialIcons  />
        </InnerIntrouductionWrapper>
    </IntrouductionWrapper>
}
export default Introduction
