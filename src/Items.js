export default function ({ shoes, i }) {
  const imeages = ["Dior", "Chicago", "University"];
  return (
    <div className="col-md-4">
      <img src={require(`./img/${imeages[i]}.png`)} width="100%" />
      <h4>{shoes.title}</h4>
      <p>{shoes.content}</p>
      <p>&#8361;{shoes.price}</p>
    </div>
  );
}
