import Hero from '../components/Hero'
import SEO from '../components/SEO'
import ProblemStatement from '../components/ProblemStatement'

import Differentiation from '../components/Differentiation'
import TargetAudience from '../components/TargetAudience'
import Stack from '../components/Stack'
import ReadyCTA from '../components/ReadyCTA'

export default function Home() {
    return (
        <>
            <SEO />
            <Hero />
            <ProblemStatement />

            <Differentiation />
            <TargetAudience />
            <Stack />
            <ReadyCTA />
        </>
    )
}
