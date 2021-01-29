import Link from 'next/link';

import Timeline from '../components/Timeline';
import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Ahoy there! 👋
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I'm a developer, writer, and creator from Toronto and I've worked on
          startups for the last 10 years. Lately, I've been building startups
          that help others grow their business.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="Sales Captain"
          description="Let the captain help you write sales copy like it's 2030. You can use an AI-powered text editor that helps you quickly craft a message to a potential customer."
          href="https://salescaptain.ai/"
        />
        <ProjectCard
          title="Conversify"
          description="We help sales teams book meetings using inkedIn. We empower one person to send automated messages on behalf of multiple LinkedIn accounts."
          href="https://conversify.ai/"
        />
        <ProjectCard
          title="Heads Up Euchre"
          description="My Mom and I invented a 1v1 version of a popular card game called Euchre. It you like Euchre you'll love our heads up version of the game."
          href="https://www.headsupeuchre.com/"
        />
        <Timeline />
      </div>
    </Container>
  );
}
