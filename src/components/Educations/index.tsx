

import GeneralCards from "components/Cards"

import { ComponentWrapperWithTitle } from 'components/Wrappers/styled'
import { EDUCATION_INFO } from "components/Educations/data"



export const Education = () => 
<div style={{marginBottom: 30}}>
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
</div>

