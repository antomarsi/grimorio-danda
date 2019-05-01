import React from "react";
import { Card, Icon, Button } from "antd";
import { Magic } from "../../store/magic/types";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { toggleFavorite } from "../../store/favorite/actions";
import { AppState } from "../../store";
import { isFavorited } from "../../store/favorite/selectors";

interface StateProps {
  isFavorited: () => boolean;
}

interface DispatchProps {
  toggleFavorite: (id: number) => void;
}

interface OwnProps {
  magic: Magic;
}

const FavIcon = styled(Icon)`
  font-size: 24px;
  &.favorited {
    color: #faad14 !important;
  }
`;

type Props = OwnProps & DispatchProps & StateProps;

const MagicCard: React.FC<Props> = ({ magic, toggleFavorite }: Props) => (
  <Card
    title={magic.name}
    bordered={false}
    extra={
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
    }
  >
    {magic.description}+{isFavorited && "FAVORITED"}
  </Card>
);

const mapStateToProps = (state: AppState, props: OwnProps) => ({
  isFavorited: () => isFavorited(state, props.magic.id)
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
