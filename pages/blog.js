import Container from '@/components/Container';
import BlogPost from '@/components/BlogPost';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import Subscribe from '@/components/Subscribe';

export default function Blog() {
  return (
    <Container
      title="Blog – David Hurley"
      description="Thoughts on the software industry, programming, tech, AI and my personal life."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-8">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Thoughts on the crypto, AI and my personal life.
        </p>
        <br />
        <BlogPost
          title="$RAPS"
          summary="Minting a social token called $RAPS and using it to engage the Raptors Republic community."
          slug="raps"
        />
        <BlogPost
          title="Hue"
          summary="Creating Hue, an online version of a heads up euchre game I invented with my Mom."
          slug="hue"
        />
        <Subscribe />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
