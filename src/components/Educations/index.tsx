

import GeneralCards from "components/Cards"

import { ComponentWrapperWithTitle } from 'components/Wrappers/styled'
import { EDUCATION_INFO } from "components/Educations/data"



export const Education = () => 
<a style={{marginBottom: 30}} href={"#Education"}>
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
</a>

