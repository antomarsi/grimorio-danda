import React from "react";
import MagicCard from "../../components/MagicCard";
import { RouteComponentProps } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store/index";
import { push } from "connected-react-router";

interface Props extends RouteComponentProps {
  id: number;
}

const MagicInfo: React.SFC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const magic = useSelector((state: ApplicationState) => {
    let m = state.magic.data.magics.filter(e => e.id === props.id);
    if (m.length === 0) {
      dispatch(push("/"));
    }
    return m[0];
  });
  const magicId = props.id;
  return (
    <div>
      <MagicCard magic={magic} />
    </div>
  );
};

export default MagicInfo;
