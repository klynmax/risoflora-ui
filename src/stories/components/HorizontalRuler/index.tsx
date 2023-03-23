import "./style.css";

export interface Props {
    name?: string
}

export default function HorizontalRuler(props: Props) {
    return (
        <div className="separator">{props.name}</div>
    )
}