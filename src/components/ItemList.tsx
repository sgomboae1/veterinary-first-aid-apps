import { useNavigate } from 'react-router-dom';
import { ItemCard } from './ItemCard';
import type { FirstAidItem } from '../models/types';
import './ItemList.css';

interface ItemListProps {
  items: FirstAidItem[];
}

export function ItemList({ items }: ItemListProps) {
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="item-list-empty">
        <p>No se encontraron elementos</p>
      </div>
    );
  }

  return (
    <div className="item-list">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onClick={() => navigate(`/item/${item.id}`)}
        />
      ))}
    </div>
  );
}
