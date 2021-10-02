import Container from '@/components/Container';
import Subscribe from '@/components/Subscribe';

export default function About() {
  return (
    <Container title="About – David Hurley">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-4">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            My name is David Hurley and I work at intersection of growth,
            software and AI.
          </p>
          <p>
            I grew up in Kingston and went to school at Queen's University,
            graduating with a bachelor's degree. I started my tech career in
            sales before learning how to code. Now I build apps that help people
            grow their business. I spend my free time watching the Leafs win
            with my fiance Hayley and our chihuahua, Mikey.
          </p>
        </div>
        <Subscribe />
      </div>
    </Container>
  );
}
