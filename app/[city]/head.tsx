export default async function Head({ params }: { params: { city: string } }) {
  return (
    <>
      <title>{`${params.city} | Weather App`}</title>
    </>
  )
}
