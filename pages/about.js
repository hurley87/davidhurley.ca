import Link from 'next/link';

import Container from '@/components/Container';
import TopTracks from '@/components/TopTracks';

const Talk = ({ title, link, children }) => (
  <>
    <h3 className="font-medium mb-2 text-lg">
      <a
        className="flex items-center text-gray-900 dark:text-gray-100"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {title}
        <div>
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-8">{children}</p>
  </>
);

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
            ,&nbsp;
            <a
              href="https://www.headsupeuchre.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Heads Up Euchre
            </a>
            ,&nbsp;and&nbsp;
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
            time playing hockey, reading books, and enjoying time with my fiance
            Hayley and our cute chihuahua, Mikey.
          </p>
          <p>
            If you'd like to get in touch send me an email, me@davidhurley.ca.
          </p>
        </div>
        <h2 className="font-bold text-3xl tracking-tight mt-8 text-black dark:text-white">
          Top Tracks
        </h2>
        <TopTracks />
      </div>
    </Container>
  );
}
