import Link from "next/link";
import { SearchRecordType } from "@/types/SearchType";
import { constructPath } from "@/utils/slugify";

export default function SearchResult({
  data,
  query,
}: {
  data: SearchRecordType;
  query: string;
}) {
  return (
    <ul className="divide-y divide-layout-level0accent">
      {data.map((city) => {
        const name = `${city.fields.ascii_name}, ${city.fields.cou_name_en}`;

        const displayName = name.replace(
          new RegExp(query, "gi"),
          (match) => `<mark class='text-content-contrast'>${match}</mark>`
        );

        return (
          <li key={city.recordid}>
            <Link
              href={`/${constructPath(
                city.fields.name,
                city.fields.country_code,
                city.fields.coordinates[0],
                city.fields.coordinates[1]
              )}`}
            >
              <span
                className="block py-4 text-content-nonessential"
                dangerouslySetInnerHTML={{ __html: displayName }}
              ></span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
