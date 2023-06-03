interface Props {
  frontCard: stateFront,
  backCard: stateBack
}

export default function Card({frontCard,backCard}:Props) {

  const {profession,title} = frontCard;
  const {description,mail,siteWeb,socialMedia} = backCard;

  return (
    <div>
      <h2>My Tarjeta</h2>
      <div>
        <p>{title}</p>
        <p>{profession}</p>
      </div>
      <div>
        <p>{description}</p>
        <p>{socialMedia}</p>
        <p>{mail}</p>
        <p>{siteWeb}</p>
      </div>
    </div>
  )
}
