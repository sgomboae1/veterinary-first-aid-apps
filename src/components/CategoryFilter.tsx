import { Category, CategoryLabels } from '../models';
import { Button } from './Button';
import './CategoryFilter.css';

interface CategoryFilterProps {
  selectedCategory: Category | null;
  onCategorySelect: (category: Category | null) => void;
}

const categories: Category[] = [
  Category.EMETICS,
  Category.ANTIDOTES,
  Category.ANTISEPTICS,
  Category.HYDRATION,
  Category.ANTIHISTAMINES,
  Category.SOLUTIONS,
  Category.HEALING,
  Category.ANTI_INFLAMMATORY,
  Category.ANTIPARASITICS
];

export function CategoryFilter({ selectedCategory, onCategorySelect }: CategoryFilterProps) {
  return (
    <div className="category-filter">
      <h3 className="category-filter-title">Filtrar por categoría</h3>
      <div className="category-filter-buttons">
        <Button
          variant={selectedCategory === null ? 'primary' : 'secondary'}
          size="small"
          onClick={() => onCategorySelect(null)}
        >
          Todos
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'primary' : 'secondary'}
            size="small"
            onClick={() => onCategorySelect(category)}
          >
            {CategoryLabels[category]}
          </Button>
        ))}
      </div>
    </div>
  );
}
