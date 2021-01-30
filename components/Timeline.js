import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title="Moved in with Hayley">
        I love spending time with her and our cute pup, Mikey.
      </Step>
      <Step title="Head of Growth at Planswell">
        Helped over 200,000 Canadians get access to a free financial plan.
      </Step>
      <Step title="Burning Man 🤘🏻">
        My good buddy Dan and I won the Lee Harvey road hockey tournament.
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Developer at #paid 🔥">
        Helped build an influencer marketing platform. Great team.
      </Step>
      <Step title="Europe Trip">
        Spent a couple weeks in London and Paris with my brother and Dad.
      </Step>
    </ul>
    <Divider />
    <Year>2014</Year>
    <ul>
      <Step title="Bitmaker's 7th Cohort">
        First time I was able to code with friends.
      </Step>
      <Step title="Top Hat">
        The last sales job I had before becoming a developer.
      </Step>
    </ul>
    <Divider />
    <Year>2010</Year>
    <ul>
      <Step title="Graduated Queen's University">I'm a proud townie.</Step>
      <Step title="Won the Championship 🏆">
        My hockey career ended that day. Good times.
      </Step>
    </ul>
    <Divider />
    <Year>2000</Year>
    <ul>
      <Step title="First Computer Games">
        I remember many nights playing Half-life and Quake with my brother.
      </Step>
    </ul>
    <Divider />
    <Year>1987</Year>
    <ul>
      <Step title="Born 👶🏼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Highlights
      </h3>
      <Year>2020</Year>
      <ul>
        <Step title="Got Engaged 💍">I asked Hayley and she said yes!</Step>
        <Step title="Conversify Reaches 10K MRR ✨">
          Published my first{' '}
          <span className="prose">
            <a
              href="https://huggingface.co/conversify/response-score"
              target="_blank"
              rel="noopener noreferrer"
            >
              ML model
            </a>
          </span>{' '}
          and graduated from Next AI.
        </Step>
        <Step title="Travelled to the Middle East">
          Spent a couple weeks meeting with startup founders in Dubai and
          Instanbul with Hamza.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
