import "./Button.css";

type ButtonProps = {
  text: string;
};

function Button(props: ButtonProps) {
  const { text } = props;

  return <button className="card-button">{text}</button>;
}

export { Button };
