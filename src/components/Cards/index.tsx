
import { GeneralCardWrapper, InternalCardWrapper, NameTag, InfoName } from "components/Cards/styled"

type InfoProps = {
    info: {
        dateOrStack: string,
        company: string,
        position: string,
        description: string,
    },
  }

export const GeneralCards = ({info}: InfoProps) => 
<GeneralCardWrapper>
    <InternalCardWrapper>
        <NameTag>
            {info.dateOrStack}
        </NameTag>
        <InfoName>
        {info.company}
        </InfoName>
        <NameTag>
        {info.position}
        </NameTag>
        <NameTag>
        {info.description}
        </NameTag>
    </InternalCardWrapper>
</GeneralCardWrapper>

export default GeneralCards
