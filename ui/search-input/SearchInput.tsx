export function SearchInput({ ...props }) {
  return (
    <form className="flex w-full items-center pb-3">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-content-nonessential"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="search"
          className="block w-full rounded-lg bg-layout-level2 p-2.5 pl-10 text-sm text-content-contrast focus:outline-none focus:ring-2"
          placeholder="Search Country, City ..."
          {...props}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center rounded-lg px-3 focus:outline-none focus:ring-2"
        >
          <svg
            aria-hidden="true"
            className="h-4 w-4 text-content-nonessential hover:text-content-contrast"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      {props.value.length > 0 && (
        <button
          type="button"
          onClick={props.onCancel}
          className="ml-2 inline-flex items-center rounded-lg py-2.5 px-2 text-sm font-medium text-brand-primary hover:bg-brand-primary-100 focus:outline-none focus:ring-2 "
        >
          Cancel
        </button>
      )}
    </form>
  );
}
