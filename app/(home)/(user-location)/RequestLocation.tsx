import { IoLocationSharp } from 'react-icons/io5'
import { MdError } from 'react-icons/md'
import DismissLocation from './DismissLocation'

export default function RequestLocation({
  getLocation,
  error,
}: {
  getLocation?: () => void
  error: 'denied' | 'fetch' | null
}) {
  const content =
    error === 'denied'
      ? {
          title: 'Geolocation permission is denied',
          description:
            'Enable geolocation from settings so you can get the weather in your current location',
        }
      : {
          title: 'Failed to fetch',
          description:
            'Something wrong happened while fetching the weather in your current location.',
        }

  return (
    <section className="mb-4 flex h-fit w-full rounded-lg bg-layout-level1 p-4">
      <div className="text-blue-500 bg-blue-100 dark:text-blue-300 dark:bg-blue-900 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg">
        {error === 'fetch' ? (
          <MdError className="h-5 w-5" />
        ) : (
          <IoLocationSharp className="h-5 w-5" />
        )}

        <span className="sr-only">location icon</span>
      </div>
      <div className="ml-3 text-sm font-normal">
        <span className="mb-1 text-sm font-semibold ">{content.title}</span>
        <div className="mb-2 text-xs font-normal text-content-subtle">
          {content.description}
        </div>

        {error === 'fetch' && (
          <div>
            <a
              onClick={getLocation}
              className="inline-flex justify-center rounded-lg bg-brand-primary px-2 py-1.5 text-center text-xs font-medium text-layout-level0 hover:bg-brand-primary-700 focus:outline-none focus:ring-4 focus:ring-brand-primary-300"
            >
              Retry
            </a>
          </div>
        )}
      </div>
      <DismissLocation />
    </section>
  )
}
