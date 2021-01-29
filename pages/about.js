import Container from '@/components/Container';
import TopTracks from '@/components/TopTracks';

export default function About() {
  return (
    <Container title="About – David Hurley">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            My name is David Hurley. I'm a developer, writer, and the creator
            of&nbsp;
            <a
              href="https://salescaptain.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sales Captain
            </a>
            &nbsp;and&nbsp;
            <a
              href="https://www.conversify.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conversify.
            </a>
            &nbsp;I work at intersection of growth, software and AI.
          </p>
          <p>
            I grew up in small-town Kingston and went to school at Queen's
            University, graduating with a bachelor of science degree (barely). I
            started my tech career in sales before learning how to code. Now I
            build apps that help people grow their business. I spend my free
            time watching the Maple Leafs win with my fiance Hayley and our
            chihuahua, Mikey.
          </p>
          <p>me@davidhurley.ca</p>
        </div>
        <h2 className="font-bold text-3xl tracking-tight mt-8 text-black dark:text-white">
          Playlist
        </h2>
        <TopTracks />
      </div>
    </Container>
  );
}
