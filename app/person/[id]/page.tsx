import Image from "next/image";

interface FinancialAsset {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: boolean;
  currentPrice: number;
  exerciseOptionPrice?: number; // Optional, since not all assets have this property
}

interface Person {
  id: string;
  state: string;
  city: string;
  name: string;
  country: string;
  position: number;
  industries: string[];
  financialAssets: FinancialAsset[];
  thumbnail: string;
  squareImage: string;
  bio: string[];
  about: string[];
  netWorth: number;
}
export default async function Person({ params }: { params: { id: string } }) {
  const response = await fetch(
    `https://billions-api.nomadcoders.workers.dev/person/${params.id}`
  );
  const personData: Person = await response.json();

  return (
    <>
      <div className=" bg-neutral-800 bg-[#333333a8] rounded-xl p-20 *:font-bold mb-20 *:mb-4">
        <Image
          src={`${personData.squareImage}`}
          alt={personData.name}
          width={300}
          height={300}
        />
        <div className=" text-3xl">{personData.name}</div>
        <div>Networth: {personData.netWorth}</div>
        <div>Country: {personData.country}</div>
        <div>{personData.bio}</div>
      </div>

      <div className=" bg-neutral-800 bg-[#333333a8] rounded-xl p-20  ">
        <div className="mb-4 text-4xl font-bold">Financial Assets</div>
        <ul className="grid grid-cols-4 gap-4">
          {personData.financialAssets.map((assets, index) => (
            <li
              key={index}
              className="  list-none *:mb-1 border border-white rounded-md p-2 font-bold"
            >
              <div>Ticker: {assets.ticker}</div>
              <div>Shares: {assets.sharePrice.toFixed(3)}</div>
              {assets.exerciseOptionPrice && (
                <div>Excersize Price: {assets.exerciseOptionPrice}</div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
