import React from "react";
import { connect } from "react-redux";
import { Magic } from "../../store/magic/types";
import MagicCard from "../MagicCard";
import { List, Typography, Icon } from "antd";
import { AppState } from "../../store";
import { getVisibleMagic } from "../../store/magic/selectores";

interface StateProps {
  magics: Magic[];
  loading: boolean;
}

type Props = StateProps;

const MagicList: React.FC<Props> = ({ magics, loading }: Props) => {
  const tiers = [0, 1, 2, 3, 4, 5].map(t =>
    magics.filter(m => {
      return m.circles.find(c => c.tier === t);
    })
  );
  return (
    <div>
      {loading && (
        <div style={{ textAlign: "center", fontSize: 48 }}>
          <Icon type="loading" />
        </div>
      )}
      {!loading &&
        tiers
          .map((values, index) => values.length)
          .flat()
          .reduce((sum, current) => sum + current, 0) === 0 && (
          <div style={{ textAlign: "center", fontSize: 48 }}>
            <Icon type="meh" />
            <br />
            <Typography.Title level={4}>No spell found!</Typography.Title>
          </div>
        )}
      {!loading &&
        tiers.map((values: Magic[], index: number) => {
          if (!values.length) return false;
          return (
            <List
              key={index}
              itemLayout="horizontal"
              dataSource={values}
              loading={loading}
              rowKey={(m: Magic) => m.id}
              header={
                <Typography.Title level={3}>Tier {index}</Typography.Title>
              }
              renderItem={(magicItem: Magic) => <MagicCard magic={magicItem} />}
            />
          );
        })}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  loading: state.magic.loading,
  magics: getVisibleMagic(state)
});

export default connect(mapStateToProps)(MagicList);
