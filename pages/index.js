import Timeline from '@/components/Timeline';
import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard';
import Subscribe from '@/components/Subscribe';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-4">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hi, I'm Dave! 👋
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I'm a developer, writer, and creator from Toronto and lately, I've
          been building startups that help others grow their business.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Startups
        </h3>
        <ProjectCard
          title="Sales Captain"
          description="An AI-powered CRM for your sales copy."
          href="https://salescaptain.ai/"
          s
        />
        <ProjectCard
          title="Conversify"
          description="We help sales teams coordinate their prospecting on LinkedIn."
          href="https://conversify.ai/"
        />
        <Timeline />
        <Subscribe />
      </div>
    </Container>
  );
}
