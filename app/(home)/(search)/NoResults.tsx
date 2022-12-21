import { FiSearch } from "react-icons/fi";

export default function NoResult({ query }: { query: string }) {
  return (
    <div className="flex w-full flex-col items-center py-6">
      <span className="mb-3 text-4xl">
        <FiSearch />
      </span>
      <span className="leading-normal">No results</span>
      <span className="text-sm text-content-nonessential">
        No results found for “{query}”
      </span>
    </div>
  );
}
