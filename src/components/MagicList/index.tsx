import React from "react";
import { connect } from "react-redux";
import { Magic } from "../../store/magic/types";
import MagicCard from "./MagicCard";
import { List } from "antd";

const magicArrayTest: Magic[] = [{
  id: 1,
  name: "Magic potatoe",
  levels: [],
  descriptorIds: [],
  duration: "Duration",
  executionTime: "Imediato",
  range: "perto",
  resistenceTest: "Nenhum",
  description: "###é uma batata... só que mágica",
  tags: []
}, {
  id: 2,
  name: "Fire Ball",
  levels: [],
  descriptorIds: [],
  duration: "Duration",
  executionTime: "Imediato",
  range: "perto",
  resistenceTest: "Nenhum",
  description: "###basic Fireball",
  tags: []
}];

const magicFavs = [1];

interface OwnProps {}

type Props = OwnProps;

const MagicList: React.FC<Props> = (props: Props) => (
  <div>
    <List
      itemLayout="horizontal"
      dataSource={magicArrayTest}
      renderItem={(magicItem: Magic) => <MagicCard magic={magicItem} isFav={magicFavs.includes(magicItem.id)} />}
    />
  </div>
);

export default connect()(MagicList);
