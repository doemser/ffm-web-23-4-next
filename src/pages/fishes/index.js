import Link from "next/link";
import { fishes } from "@/lib/fishes";

export default function Fishes() {
  return (
    <>
      <h1>Fishes</h1>
      <ul>
        {fishes.map((fish) => {
          return (
            <li key={fish.id}>
              {fish.name} <Link href={`/fishes/${fish.id}`}>Details</Link>{" "}
            </li>
          );
        })}
      </ul>
    </>
  );
}
