interface ButtonProps {
  title: string;
  description: string;
  price: number;
}

export const Item: React.FC<ButtonProps> = (props) {
  const { title, description, price } = props;
  const defaultClass = '';
  
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  )
}
