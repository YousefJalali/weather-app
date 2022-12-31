import { FiX } from 'react-icons/fi';
import { IoLocationSharp } from 'react-icons/io5';

export default function RequestLocation({
  getLocation,
  isPermissionDenied,
}: {
  getLocation?: () => void;
  isPermissionDenied: boolean;
}) {
  return (
    <section className="mb-4 flex h-fit w-full rounded-lg bg-layout-level1 p-4">
      <div className="text-blue-500 bg-blue-100 dark:text-blue-300 dark:bg-blue-900 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg">
        <IoLocationSharp className="h-5 w-5" />

        <span className="sr-only">location icon</span>
      </div>
      <div className="ml-3 text-sm font-normal">
        <span className="mb-1 text-sm font-semibold ">
          {!isPermissionDenied
            ? 'Enable Geolocation'
            : 'Geolocation permission is denied'}
        </span>
        <div className="mb-2 text-sm font-normal text-content-subtle">
          {!isPermissionDenied
            ? 'Enable geolocation so you can get the weather in your current location'
            : 'Enable geolocation from settings so you can get the weather in your current location'}
        </div>

        {!isPermissionDenied && (
          <div>
            <a
              onClick={getLocation}
              className="inline-flex justify-center rounded-lg bg-brand-primary px-2 py-1.5 text-center text-xs font-medium text-layout-level0 hover:bg-brand-primary-700 focus:outline-none focus:ring-4 focus:ring-brand-primary-300"
            >
              Enable
            </a>
          </div>
        )}
      </div>
      <button
        type="button"
        className="bg-white text-gray-400 hover:text-gray-900 focus:ring-gray-300 hover:bg-gray-100 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 -mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2"
        data-dismiss-target="#toast-interactive"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <FiX className="h-5 w-5" />
      </button>
    </section>
  );
}
