

import GeneralCards from "components/Cards"

import { ComponentWrapperWithTitle, ExperienceWrapper } from 'components/Wrappers/styled'
import { EDUCATION_INFO } from "components/Educations/data"



export const Education = () => 
<div style={{ marginTop: 40}}>
    <ExperienceWrapper id="Education">
    <ComponentWrapperWithTitle >
        Education
    </ComponentWrapperWithTitle>
    {
        EDUCATION_INFO.map((info, index) =>
        <div key={index+1}>
        <GeneralCards info={info} />
        </div>
        )
    }
    </ExperienceWrapper>
</div>


