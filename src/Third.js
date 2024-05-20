export default function Third({ store }) {
  return (
    <div>
      {store &&
        store?.map((e) => (
          <div key={e.id}>
            <h1>{e.id}</h1>
          </div>
        ))}
    </div>
  );
}
