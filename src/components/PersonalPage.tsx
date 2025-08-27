import GamingSection from './personal/GamingSection'
import FaithSection from './personal/FaithSection'

const PersonalPage: React.FC = () => {
  return (
    <main role="main" aria-label="Personal content">
      <GamingSection />
      <FaithSection />
    </main>
  )
}

export default PersonalPage