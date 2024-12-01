import Link from "next/link";

const Home = () => {
  return (
    <Link className="text-blue-500 underline text-2xl" href="/documents/123">
      Go to documents Id Page
    </Link>
  );
};

export default Home;
