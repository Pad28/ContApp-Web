import "../../styles/components/inputs/InputPrimary.css";


interface Props {
    placeholder: string;
    type: string;
    style?: React.CSSProperties;
    onChange: (event: any) => void;
    icon: string;
}

export const InputPrimary = ({ placeholder, type, style, onChange }: Props) => {
    return (
        <div>

            <input
                className="input-container"
                type={type}
                placeholder={placeholder}
                style={style}
                onChange={e => {
                    e.preventDefault();
                    onChange(e.target.value);
                }}
            />

        </div>
    );
}
