import Image from "next/image";

interface Person {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}

export default async function Home() {
  const response = await fetch("https://billions-api.nomadcoders.workers.dev/");
  const personDatas: Person[] = await response.json();

  return (
    <div className="">
      <h1 className=" text-center text-4xl  font-bold p-8">
        Billionaires List
      </h1>
      <ul className="grid grid-cols-4 gap-8">
        {personDatas.map((person) => (
          <li key={person.id} className="">
            <a href={`/person/${person.id}`}>
              <Image
                src={person.squareImage}
                alt={person.name}
                width={250}
                height={250}
                className="rounded-md mb-4"
              />
              <h2>{person.name}</h2>
              <div>Net Worth: ${person.netWorth.toFixed(2)} Billion</div>{" "}
              <div className=" text-sm">
                Industries: {person.industries.join(", ")}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
