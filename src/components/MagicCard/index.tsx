import React from "react";
import { Card, Icon, Button, Typography, Row, Col } from "antd";
import { Magic, MagicCircle, Descriptor } from "../../store/magic/types";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { toggleFavorite } from "../../store/favorite/actions";
import { AppState } from "../../store";
import { getFavorites } from "../../store/favorite/selectors";
import ReactMarkdown from "react-markdown";

const FavIcon = styled(Icon)`
  font-size: 24px;
  &.favorited {
    color: #faad14 !important;
  }
`;

const TextNoSelectable = styled.a`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

interface StateProps {
  favorites: Array<number>;
  magicCircles: MagicCircle[];
  descriptors: Descriptor[];
}

interface DispatchProps {
  toggleFavorite: (id: number) => void;
}

interface OwnProps {
  magic: Magic;
}

type Props = OwnProps & DispatchProps & StateProps;

const MagicCard: React.FC<Props> = ({
  magic,
  magicCircles,
  descriptors,
  toggleFavorite,
  favorites
}: Props) => {
  const [open, setOpen] = React.useState(false);

  const isFavorited = favorites.indexOf(magic.id) > -1;
  const circles = magic.circles.map(c => ({
    circle: magicCircles.filter(mc => mc.id === c.id)[0],
    tier: c.tier
  }));
  const descrip = magic.circles
    .map(c => c.descriptor.map(d => descriptors.filter(mc => mc.id === d)[0]))
    .flat()
    .filter((elem, index, self) => index === self.indexOf(elem));

  return (
    <Card
      title={
        <Row>
          <Col>
            <TextNoSelectable onClick={() => setOpen(!open)}>
              <Icon type={open ? "up" : "down"} />{" "}
              {magic.icon && (
                <div>
                  <Icon type={magic.icon} />{" "}
                </div>
              )}
              <Typography.Text>{magic.name}</Typography.Text>
            </TextNoSelectable>
          </Col>
          <Col>
            <Typography.Text type="secondary">
              {`${circles
                .map(c => (!c.circle ? null : `${c.circle.name} ${c.tier}`))
                .join(", ")} (${descrip
                .map(d => (!d ? null : d.name))
                .join(", ")})`}
            </Typography.Text>
          </Col>
        </Row>
      }
      bordered={false}
      extra={
        <Row>
          <Col span={12}>
            <Button
              shape="circle"
              type="dashed"
              onClick={() => toggleFavorite(magic.id)}
            >
              <FavIcon
                type="star"
                theme={isFavorited ? "filled" : "outlined"}
                className={isFavorited ? "favorited" : ""}
              />
            </Button>
          </Col>
        </Row>
      }
    >
      <div style={{ whiteSpace: "pre-wrap" }}>
        {open && (
          <div>
            <p>
              <Typography.Text strong>Execution Time: </Typography.Text>
              <Typography.Text>{magic.executionTime}</Typography.Text>
            </p>
            <p>
              <Typography.Text strong>Range: </Typography.Text>
              <Typography.Text>{magic.range}</Typography.Text>
            </p>
            <p>
              <Typography.Text strong>Duration: </Typography.Text>
              <Typography.Text>{magic.duration}</Typography.Text>
            </p>
            <p>
              <Typography.Text strong>Resistance Test: </Typography.Text>
              <Typography.Text>{magic.resistanceTest}</Typography.Text>
            </p>
            {magic.target && (
              <p>
                <Typography.Text strong>Target: </Typography.Text>
                <Typography.Text>{magic.target}</Typography.Text>
              </p>
            )}
            {magic.area && (
              <p>
                <Typography.Text strong>Area: </Typography.Text>
                <Typography.Text>{magic.area}</Typography.Text>
              </p>
            )}
            {magic.effect && (
              <p>
                <Typography.Text strong>Effect: </Typography.Text>
                <Typography.Text>{magic.effect}</Typography.Text>
              </p>
            )}
            {magic.materialComponent && (
              <p>
                <Typography.Text strong>Material Component: </Typography.Text>
                <Typography.Text>{magic.materialComponent}</Typography.Text>
              </p>
            )}
            {magic.xpCost && (
              <p>
                <Typography.Text strong>XP Cost: </Typography.Text>
                <Typography.Text>{magic.xpCost}</Typography.Text>
              </p>
            )}

            <ReactMarkdown source={magic.description} />
          </div>
        )}
      </div>
    </Card>
  );
};

const mapStateToProps = (state: AppState, props: OwnProps) => ({
  magicCircles: state.magic.magicCircle,
  descriptors: state.magic.descriptors,
  favorites: getFavorites(state)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      toggleFavorite
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MagicCard);
