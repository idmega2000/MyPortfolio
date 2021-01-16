

import GeneralCards from "components/Cards"

import { ComponentWrapperWithTitle } from 'components/Wrappers/styled'
import { experienceInfo } from "components/Experience/data"



export const Experience = (props) => 
<div style={{marginBottom: 40}}>
<ComponentWrapperWithTitle >
    Work Experience
</ComponentWrapperWithTitle>
{
    experienceInfo.map((info) => 
    <GeneralCards info={info} />
    )
}
</div>




export default GeneralCards
