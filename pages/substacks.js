import Container from '@/components/Container';

export default function Substacks() {
  return (
    <Container
      title="Substacks – David Hurley"
      description="A collection of tweets that inspire me, make me laugh, and make me think."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Substacks
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          This is a collection of tweets I've enjoyed. I use Twitter quite a
          bit, so I wanted a place to publically share what inspires me, makes
          me laugh, and makes me think.
        </p>
      </div>
    </Container>
  );
}
