import "./item.css";

export interface GridProps {
    name?: string;
}

export default function Item(props: GridProps) {
    return (
        <div className="item">
            <div className="text">{props.name}</div>
        </div>
    )
}