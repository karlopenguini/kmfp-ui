export default function WriteupPage({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
