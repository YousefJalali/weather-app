export default async function Head({ params }: { params: { city: string } }) {
  return (
    <>
      {/* <title>city</title> */}
      <title>{params.city}</title>
    </>
  )
}
