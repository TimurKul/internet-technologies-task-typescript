interface TextProps {
  content: string;
}

export const Text: React.FC<TextProps> = (props) => {
  const { content } = props;
  return <p className="text-sky-900">{content}</p>;
};
