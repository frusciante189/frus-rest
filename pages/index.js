import Link from "next/link";
import { getRandomQuote } from "../util/getRandomQuote";

export default function Home({ quote }) {
  const quoteJsonString = JSON.stringify(quote, null, 2);

  return (
    <section className="lg:py-20 sm:py-16 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl text-center text-slate-900">frus.rest</h1>
        <p className="mt-2 text-center text-slate-600">
          Frus as a Service for Free
        </p>
        <div className="mt-5 flex justify-between max-w-3xl mx-auto">
          <Link href="/api">
            <a className="cursor-pointer underline font-bold text-center">
              Developer API
            </a>
          </Link>
          <button>Refresh</button>
        </div>
        <div className="bg-slate-600 text-slate-100 p-5 rounded-lg max-w-3xl mx-auto">
          <pre>{quoteJsonString}</pre>
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps() {
  const quote = await getRandomQuote();

  return {
    props: {
      quote,
    },
  };
}
