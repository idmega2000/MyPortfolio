import SocialIcons from "components/SocialMedia"
import { IntrouductionWrapper, NameIntro, DetailedIntro, TagIntro } from "./styled"


const Introduction = () => 
<IntrouductionWrapper>
<NameIntro>
Hi, I'm Idris Kelani.
</NameIntro>
<TagIntro>
Software Engineer, Mentor and Researcher
</TagIntro>
    <DetailedIntro>
    A Software Engineer at Nigeria Inter-Bank Settlement System Plc (NIBSS) Working as a member of the Payment team.
    I've been writing code Professionally for 4+ years working with various languages and technologies, most notably; JavaScript, Java, and Python. 
    In my free time, I enjoy travelling, photography, video games, and involving in some outdoor sport activities.
    </DetailedIntro>
    <SocialIcons />
</IntrouductionWrapper>

export default Introduction
