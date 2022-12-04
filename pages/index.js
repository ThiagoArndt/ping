import Link from "next/link";
export default function Home(props) {
  return (
    <div>
      <Link href="/ping">
        <button>Ping</button>
       
      </Link>
      <Link href="/pong">
        <button>Pong</button>
       
      </Link>

    </div>
  );
}
