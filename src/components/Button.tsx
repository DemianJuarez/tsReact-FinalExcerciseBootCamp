import './Button.css'

type ButtonProps = {
    text: string;
}


function Button(props: ButtonProps) {
    const { text } = props

    return (
        <button>{text}</button>


    )


}



export { Button }