import GeneralCards from "components/Cards"
import { ComponentWrapperWithTitle, ExperienceWrapper } from 'components/Wrappers/styled'
import { EXPERIENCE_INFO } from "components/Experience/data"


export const Experience = () => 

    <ExperienceWrapper>
    <ComponentWrapperWithTitle >
        Work Experience
    </ComponentWrapperWithTitle>
    {
        EXPERIENCE_INFO.map((info, index) => 
        <div key={index+1}>
        <GeneralCards info={info} />
        </div>
        )
    }
    </ExperienceWrapper>





export default GeneralCards
