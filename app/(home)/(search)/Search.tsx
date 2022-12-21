"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { SearchInput } from "@/ui/search-input";
import SearchResult from "./SearchResult";
import NoResult from "./NoResults";
import { getSuggestions } from "@/lib/data";
import Loading from "./Loading";
import { SearchRecordType } from "@/types/SearchType";

export default function SearchField() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState<SearchRecordType>([]);

  const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setQuery(e.target.value);

    debouncedSearch(e.target.value);
  };

  const cancelHandler = () => {
    setQuery("");
  };

  const fetchData = async (q: string) => {
    if (q.length <= 0) {
      setLoading(false);
      return [];
    }

    const res = await getSuggestions(q);
    setLoading(false);

    return res;
  };

  const debouncedSearch = useRef(
    debounce(async (q) => {
      setSuggestions(await fetchData(q));
    }, 500)
  ).current;

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <div className="relative">
      <div className="mb-4">
        <SearchInput
          value={query}
          onChange={changeHandler}
          onCancel={cancelHandler}
          data-test="search-input"
        />
        {/* {query.length > 0 && <button onClick={cancelHandler}>cancel</button>} */}
      </div>

      {query.length > 0 && (
        <div
          className="absolute top-full left-0 h-full min-h-screen w-full bg-layout-level0"
          data-test="search-result"
        >
          {loading ? (
            <Loading />
          ) : (
            <>
              {suggestions.length > 0 && (
                <SearchResult data={suggestions} query={query} />
              )}
              {suggestions.length <= 0 && <NoResult query={query} />}
            </>
          )}
        </div>
      )}
    </div>
  );
}
