import { useRouter } from "next/router";
import { fishes } from "@/lib/fishes";
import Head from "next/head";

export default function FishDetails() {
  const router = useRouter();
  const { id } = router.query;
  const fish = fishes.find((fish) => fish.id === id);

  return (
    <>
      <Head>
        <title>Fish Details</title>
      </Head>
      <p>Name: {fish.name}</p>
      <p>Description: {fish.description}</p>
      <p>Color: {fish.color}</p>
      <p>Size: {fish.size}</p>
      <label htmlFor="poisonous">Poisonous:</label>
      <input type="checkbox" id="poisonous" checked={fish.poisonous} />
    </>
  );
}
