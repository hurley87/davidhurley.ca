import { parseISO, format } from 'date-fns';

import Container from '@/components/Container';
import Subscribe from '@/components/Subscribe';

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – David Hurley`}
      description={frontMatter.summary}
      image={`https://davidhurley.ca/the-path-to-web3.jpeg`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-8f w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
          <div className="flex items-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {frontMatter.by}
              {'David Hurley / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text}
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">
          {children}
        </div>
        <br />
        <Subscribe />
      </article>
    </Container>
  );
}
