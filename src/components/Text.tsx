interface TextProps {
  content: string;
}

export const Text = (props: TextProps) => {
  const { content } = props;
  return <p className="text-sky-900">{content}</p>;
};
