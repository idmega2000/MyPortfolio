

import GeneralCards from "components/Cards"

import { ComponentWrapperWithTitle } from 'components/Wrappers/styled'
import { EDUCATION_INFO } from "components/Educations/data"



export const Education = (props) => 
<div style={{marginBottom: 30}}>
<ComponentWrapperWithTitle >
    Education
</ComponentWrapperWithTitle>
{
    EDUCATION_INFO.map((info) => 
    <GeneralCards info={info} />
    )
}
</div>

