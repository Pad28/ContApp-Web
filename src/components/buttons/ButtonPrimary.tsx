import "../../styles/components/buttons/ButtonPrimary.css";

interface Props { 
    text: string;
    onClick: () => void;
    style?: React.CSSProperties
}

export const Button = ({ onClick, text, style }: Props) => {
    return(
        <input
            className="button-primary"
            type="submit"
            value={text}
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
            style={style}
        />
    );
}
