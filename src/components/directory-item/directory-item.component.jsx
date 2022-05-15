import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, routeName } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(routeName);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
