// components/ItemList.tsx
import './ItemList.css'

type Item = {
  label: string
  description: string;
};
interface ItemListProps {
  items: Item[];
}
const ItemList = ({ items }: ItemListProps) => (
    <div className="item-list">
        <ul>
        {items.map(({ label, description }) => (
            <li key={label}>
            <strong>{label}</strong>
            <p>{description}</p>
            </li>
        ))}
        </ul>
    </div>
);
export default ItemList