import { IconType } from "react-icons";
import "../../styles/components/buttons/ButtonPrimary.css";

interface Props {
    text: string;
    onClick: () => void;
    style?: React.CSSProperties;
    icon?: IconType;
}

export const Button = ({ onClick, text, style }: Props) => {
    return (
        <input
            style={style}
            className="button-primary"
            type="submit"
            value={text}
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}

        />
    );
}
