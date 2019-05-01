import React from "react";
import { Card, Icon } from "antd";
import { Magic } from "../../store/magic/types";
import styled from 'styled-components';

interface OwnProps {
  magic: Magic;
  isFav: boolean;
}

const FavIcon = styled(Icon)`
font-size: 24px;
& .favorited {
  color: #faad14;
}
`

type Props = OwnProps;

const MagicCard: React.FC<Props> = ({ magic, isFav }: Props) => (
  <Card
    title={magic.name}
    bordered={false}
    extra={(<FavIcon type="star" className={isFav ? "favorited" : ""}/>)}
  >
  {magic.description}+{isFav && "FAVORITED"}
  </Card>
);

export default MagicCard;
