import "./Button.css";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

function Button(props: ButtonProps) {
  const { text, onClick } = props;

  return (
    <button className="card-button" onClick={onClick}>
      {text}
    </button>
  );
}

export { Button };

//pasarlo asi
