// const search = {
//   id: '2324780d-32ce-4e17-bfb9-62c491ddc2c4',
//   type: 'city',
//   code: 'GUW',
//   name: 'Atyrau',
//   country_code: 'KZ',
//   country_name: 'Kazakhstan',
//   state_code: null,
//   coordinates: { lon: 51.829556, lat: 47.122814 },
//   index_strings: [],
//   weight: 5077,
//   cases: null,
//   country_cases: null,
//   main_airport_name: 'Atyrau Airport',
// }

const search = {
  nhits: 93,
  parameters: {
    dataset: ["geonames-all-cities-with-a-population-1000@public"],
    q: "aga",
    lang: "en",
    rows: 15,
    start: 0,
    sort: ["name"],
    format: "json",
    timezone: "UTC",
  },
  records: [
    {
      datasetid: "geonames-all-cities-with-a-population-1000@public",
      recordid: "749b87a354a67fc0ee459ce5c1a379501032dbff",
      fields: {
        coordinates: [11.3684, 122.5094],
        cou_name_en: "Philippines",
        label_en: "Philippines",
        feature_code: "PPL",
        population: 2300,
        dem: 52,
        geoname_id: "1732191",
        name: "Ag-ambulong",
        ascii_name: "Ag-ambulong",
        alternate_names: "Ag-ambulong,Agamulong",
        admin1_code: "06",
        admin3_code: "061906000",
        feature_class: "P",
        country_code: "PH",
        admin2_code: "18",
        timezone: "Asia/Manila",
        modification_date: "2017-12-13",
      },
      geometry: {
        type: "Point",
        coordinates: [122.5094, 11.3684],
      },
      record_timestamp: "2022-12-10T07:00:01.566Z",
    },
  ],
};

const record = [
  {
    datasetid: "geonames-all-cities-with-a-population-1000@public",
    recordid: "749b87a354a67fc0ee459ce5c1a379501032dbff",
    fields: {
      coordinates: [11.3684, 122.5094],
      cou_name_en: "Philippines",
      label_en: "Philippines",
      feature_code: "PPL",
      population: 2300,
      dem: 52,
      geoname_id: "1732191",
      name: "Ag-ambulong",
      ascii_name: "Ag-ambulong",
      alternate_names: "Ag-ambulong,Agamulong",
      admin1_code: "06",
      admin3_code: "061906000",
      feature_class: "P",
      country_code: "PH",
      admin2_code: "18",
      timezone: "Asia/Manila",
      modification_date: "2017-12-13",
    },
    geometry: {
      type: "Point",
      coordinates: [122.5094, 11.3684],
    },
    record_timestamp: "2022-12-10T07:00:01.566Z",
  },
];

export type SearchRecordType = typeof record;
export type SearchType = typeof search;
