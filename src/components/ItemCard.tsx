import { Card, Badge } from './index';
import { CategoryLabels } from '../models/constants';
import type { FirstAidItem } from '../models/types';
import './ItemCard.css';

interface ItemCardProps {
  item: FirstAidItem;
  onClick: () => void;
}

export function ItemCard({ item, onClick }: ItemCardProps) {
  return (
    <Card hoverable onClick={onClick} className="item-card">
      <div className="item-card-image">
        <img 
          src={item.image} 
          alt={item.name}
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/150?text=Sin+Imagen';
          }}
        />
      </div>
      <div className="item-card-content">
        <h3 className="item-card-title">{item.name}</h3>
        <Badge variant="info">{CategoryLabels[item.category]}</Badge>
        <p className="item-card-description">{item.description}</p>
      </div>
    </Card>
  );
}
