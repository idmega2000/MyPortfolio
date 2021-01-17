import SocialIcons from "components/SocialMedia"
import { InnerIntrouductionWrapper, IntrouductionWrapper, NameIntro, DetailedIntro, TagIntro } from "./styled"


const Introduction = () => 
<IntrouductionWrapper>
<InnerIntrouductionWrapper>
<NameIntro>
Hi, I'm Idris Kelani.
</NameIntro>
<TagIntro>
Software Engineer, Mentor and Researcher
</TagIntro>
    <DetailedIntro>
    I’m an Experienced Software Engineer with expertise in JavaScript, Python and Java, Micro-service architecture and DevOps with over 4 years professional experience.
    </DetailedIntro>
    
    <DetailedIntro> 
    In my free time, I enjoy Swimming, photography, Volleyball and watching technologies, inventeries, and science documentaries.
    </DetailedIntro>

    <SocialIcons />
</InnerIntrouductionWrapper>
</IntrouductionWrapper>

export default Introduction
