import Link from "next/link";

export default function Home() {
  return (
    <div >
      <Link href={"/console"} className="font-3xl">console</Link>
    </div>
  );
}

