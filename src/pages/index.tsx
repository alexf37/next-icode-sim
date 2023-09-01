import Head from "next/head";
import { useId, type PropsWithChildren } from "react";

const HEX_CHARS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
] as const;

const EMPTY_BYTES = new Array(256).fill("00") as string[];

function TableHexLabel({ children }: PropsWithChildren) {
  return <div className="text-gray-200">{children}</div>;
}

export default function Home() {
  const byteKey = useId();
  return (
    <>
      <Head>
        <title>Toy ISA Simulator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Simulator for Toy ISA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full bg-gray-900 p-12">
        <div className="grid-cols-17 grid-rows-17 grid w-full rounded-lg border border-gray-600 bg-gray-700">
          <div className="grid-cols-16 col-span-full col-start-2 row-span-1 grid items-center justify-around text-center">
            {HEX_CHARS.map((char) => (
              <TableHexLabel key={char}>{`...${char}`}</TableHexLabel>
            ))}
          </div>
          <div className="grid-rows-16 col-span-1 row-span-full row-start-2 grid items-center justify-around text-center">
            {HEX_CHARS.map((char) => (
              <TableHexLabel key={char}>{`${char}...`}</TableHexLabel>
            ))}
          </div>
          <div className="grid-cols-16 grid-rows-16 col-span-full col-start-2 row-span-full row-start-2 grid place-items-center rounded-br-lg rounded-tl-lg border-l border-t border-gray-600 bg-gray-800 tracking-wider text-gray-300">
            {EMPTY_BYTES.map((byte) => (
              <div key={byteKey}>{byte}</div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
