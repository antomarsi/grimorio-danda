import React from "react";
import { connect } from "react-redux";
import { Magic } from "../../store/magic/types";
import MagicCard from "../MagicCard";
import { List } from "antd";
import { AppState } from "../../store";
import { getVisibleMagic } from "../../store/magic/selectores";

interface StateProps {
  magics: Magic[];
  loading: boolean;
}

type Props = StateProps;

const MagicList: React.FC<Props> = ({ magics, loading }: Props) => (
  <div>
    <List
      itemLayout="horizontal"
      dataSource={magics}
      loading={loading}
      renderItem={(magicItem: Magic) => <MagicCard magic={magicItem} />}
    />
  </div>
);

const mapStateToProps = (state: AppState) => ({
  loading: state.magic.loading,
  magics: getVisibleMagic(state)
});

export default connect(mapStateToProps)(MagicList);
