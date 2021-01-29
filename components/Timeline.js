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
      <Step title="Start at Planswell">
        Started as a developer and transitioned to Head of Growth.
      </Step>
      <Step title="Moved in with Hayley">
        This was a no brainer. Love spending time with Hayley and our cute pup,
        Mikey.
      </Step>
      <Step title="Burning man 🤘🏻">
        A week long adventure into the desert. I won the Lee Harvey road hockey
        tournament with my good buddy Dan.
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Started at #paid 🔥">
        My first job as a software developer.
      </Step>
      <Step title="Influencer algorithm">
        I created an alogorithm that predicted how much an influencer should
        charge for a sponsored post.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Moved to Toronto">Moved back to the big city.</Step>
      <Step title="Quit my sales job at Top Hat">
        I learned a lot about sales and met some life long friends here.
      </Step>
      <Step title="Bitmaker's 7th Cohort">
        I started my transition from sales rep to software developer.
      </Step>
    </ul>
    <Divider />
    <Year>2009</Year>
    <ul>
      <Step title="Graduated Queen's University">
        Went to school in Kingston, I'm a proud townie.
      </Step>
      <Step title="Won the Jr. C Championship 🏆">
        I was captain of a local hockey team called the Jets.
      </Step>
      <Step title="First job">
        I got my first job selling cars at a Chrysler dealership in Ottawa. It's
        a long story.
      </Step>
    </ul>
    <Divider />
    <Year>1999</Year>
    <ul>
      <Step title="First Computer">
        I remember many nights playing Halo and Doom with my brother.
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
        Timeline
      </h3>
      <Year>2020</Year>
      <ul>
        <Step title="Got Engaged 💍">
          I asked my now fiancée, Hayley, to marry me. She said yes!
        </Step>
        <Step title="Conversify reaches 10K MRR ✨">
          Over 100 happy customers and I was able to start payiny myself.
        </Step>
        <Step title="Graduated from the Next AI program ⚛️">
          This was a challenging 6 month program that helped us turn our idea
          into a business.
        </Step>
        <Step title="Travelled to the Middle East">
          I spent time in Dubai and Instanbul meeting other people that work in
          tech.
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
