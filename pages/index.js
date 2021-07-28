import Timeline from '@/components/Timeline';
import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard';
import Subscribe from '@/components/Subscribe';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-4">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Howdy, I'm Dave! 🤠
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-8">
          I'm a developer, writer, and creator from Toronto and lately, I've
          been building startups that help others grow their business. Here are
          a few of the projects I'm working on.
        </h2>
        <ProjectCard
          title="Sales Captain"
          description="An AI-powered sales assistant that will research and write copy for you."
          href="https://salescaptain.ai/"
          s
        />
        <ProjectCard
          title="Conversify"
          description="We help sales teams coordinate their prospecting on LinkedIn."
          href="https://conversify.ai/"
        />
        <ProjectCard
          title="Hue"
          description="Challenge a friend to a game of heads up euchre."
          href="https://www.headsupeuchre.com/"
        />
        <Timeline />
        <Subscribe />
      </div>
    </Container>
  );
}
