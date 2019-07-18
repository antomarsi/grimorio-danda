import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Magic } from "../../store/ducks/magic/types";
import MagicCard from "../MagicCard";
import { List, Typography, Icon } from "antd";
import { ApplicationState } from "../../store";
import { fetchRequest as fetchMagicRequest } from "../../store/ducks/magic/actions";
import SlideDown from "react-slidedown";
import styled from "styled-components";

const TextNoSelectable = styled.a`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

interface MagicTierListProps {
  tier: number;
  loading: boolean;
  values: Magic[];
}

const MagicTierList: React.SFC<MagicTierListProps> = (
  props: MagicTierListProps
) => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Typography.Title level={3}>
        <TextNoSelectable onClick={() => setOpen(!open)}>
          <Icon type={open ? "down" : "up"} />
        </TextNoSelectable>{" "}
        Tier {props.tier}
      </Typography.Title>
      <SlideDown closed={!open}>
        {open && (
          <List
            itemLayout="horizontal"
            dataSource={props.values}
            loading={props.loading}
            rowKey={(m: Magic) => m.id}
            renderItem={(magicItem: Magic) => (
              <MagicCard magic={magicItem} key={magicItem.id} />
            )}
          />
        )}
      </SlideDown>
    </div>
  );
};

const MagicList: React.SFC = () => {
  const magics = useSelector(
    (state: ApplicationState) => state.magic.data.magics
  );
  const loading = useSelector((state: ApplicationState) => state.magic.loading);
  const error = useSelector((state: ApplicationState) => state.magic.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMagicRequest());
  }, [dispatch]);
  const [showTiers, setShowTier] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const toggleTier = (tier: number) => {
    if (showTiers.includes(tier)) {
      setShowTier(showTiers.splice(showTiers.indexOf(tier), 1));
    } else {
      setShowTier([...showTiers, tier]);
    }
  };

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
        tiers.map(
          (values: Magic[], index: number) =>
            values.length && (
              <MagicTierList
                tier={index}
                loading={loading}
                values={values}
                key={index}
              />
            )
        )}
    </div>
  );
};
export default MagicList;
