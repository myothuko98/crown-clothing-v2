import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  CategoryItemPreview,
  CategoryTitle,
} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitle to={title}>{title.toUpperCase()}</CategoryTitle>
      </h2>

      <CategoryItemPreview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryItemPreview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
