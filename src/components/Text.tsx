interface TextProps {
  content: string;
}

export const Text = (props: TextProps) => {
  const { content } = props;
  return <p className="text-sky-950">{content}</p>;
};
