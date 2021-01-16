import { Education } from 'components/Educations'
import { Experience } from 'components/Experience'
import Introduction from 'components/Introduction'
import { HomeWrapper, AchievmentWrapper } from 'components/Wrappers/styled'

const Index = () => 
    <HomeWrapper>
    <Introduction />
    <AchievmentWrapper>
    <Experience />
    <Education />
    </AchievmentWrapper>
    </HomeWrapper>


export default Index;