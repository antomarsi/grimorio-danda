import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Magic } from "../../store/ducks/magic/types";
import MagicCard from "../MagicCard";
import { List, Typography, Icon } from "antd";
import { ApplicationState } from "../../store";
import { fetchRequest as fetchMagicRequest } from "../../store/ducks/magic/actions";

const MagicList: React.SFC = () => {
  const magics = useSelector(
    (state: ApplicationState) => state.magic.data.magics
  );
  const loading = useSelector((state: ApplicationState) => state.magic.loading);
  const error = useSelector((state: ApplicationState) => state.magic.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMagicRequest());
    console.log("teste2");
  }, [dispatch]);

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
      {error && (
        <div style={{ textAlign: "center", fontSize: 48 }}>
          <Icon type="frown" />
          <br />
          <Typography.Title level={4}>
            That's so sad... Bard, play Despacito!
          </Typography.Title>
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
export default MagicList;
