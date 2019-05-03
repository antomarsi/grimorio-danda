import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { AppState } from "../../store/index";
import { Form, Row, Col, Button, Icon, Input, Switch, Select } from "antd";
import { resetFilter, updateFilter } from "../../store/filter/actions";
import { FilterState } from "../../store/filter/types";
import { FormikProps, withFormik } from "formik";
import { MagicCircle, Descriptor } from "../../store/magic/types";
import { filterInitialState } from "../../store/filter/reducer";

interface FormValues {
  isFavorited: boolean;
  nameSearch: string;
  descriptors: number[];
  magicCircle: number[];
  tiers: number[];
}

interface StateProps {
  filterValues: FilterState;
  magicCircles: MagicCircle[];
  descriptors: Descriptor[];
}

interface DispatchProps {
  resetFilter: () => void;
  updateFilter: (filter: FilterState) => void;
}

type Props = StateProps & DispatchProps;

class FilterForm extends Component<
  FormikProps<FormValues> & Props,
  { expand: boolean }
> {
  constructor(props: FormikProps<FormValues> & Props) {
    super(props);
    this.state = {
      ...this.state,
      expand: false
    };
  }

  handleReset = () => {
    this.props.resetFilter();
    this.props.setValues(filterInitialState);
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  render = () => {
    const {
      descriptors,
      magicCircles,
      values,
      handleChange,
      handleSubmit,
      setFieldValue
    } = this.props;
    const { expand } = this.state;
    const moreOptionsForm = {
      xs: 24,
      sm: 8
    };

    return (
      <Form className="ant-advanced-search-form" onSubmit={handleSubmit}>
        <Row gutter={24}>
          <Col span={23}>
            <Form.Item>
              <Form.Item style={{ display: "inline-block", width: "90%" }}>
                <Input
                  size="large"
                  placeholder="Search by name or tag"
                  name="nameSearch"
                  value={values.nameSearch}
                  onChange={handleChange}
                />
              </Form.Item>
              <span style={{ display: "inline-block", width: "2%" }} />
              <Form.Item
                style={{ display: "inline-block", float: "right", width: "8%" }}
              >
                <Switch
                  onChange={(checked: boolean) => {
                    setFieldValue("isFavorited", checked);
                  }}
                  checkedChildren={
                    <Icon
                      type="star"
                      theme="filled"
                      style={{ color: "#faad14" }}
                    />
                  }
                  unCheckedChildren={<Icon type="star" />}
                  checked={values.isFavorited}
                />
              </Form.Item>
            </Form.Item>
          </Col>
        </Row>
        {expand && (
          <Row gutter={24}>
            <Col {...moreOptionsForm}>
              <Form.Item>
                <Select
                  mode="multiple"
                  style={{ width: "100%" }}
                  placeholder="Select magic circle(s)"
                  value={values.magicCircle}
                  onChange={v => {
                    setFieldValue("magicCircle", v);
                  }}
                  allowClear={true}
                >
                  {magicCircles.map(mc => (
                    <Select.Option key={mc.id} value={mc.id}>
                      {mc.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col {...moreOptionsForm}>
              <Form.Item>
                <Select
                  mode="multiple"
                  style={{ width: "100%" }}
                  placeholder="Select descriptor(s)"
                  value={values.descriptors}
                  onChange={v => {
                    setFieldValue("descriptors", v);
                  }}
                  allowClear={true}
                >
                  {descriptors
                    .filter(d => {
                      if (
                        values.magicCircle.length > 0 &&
                        !magicCircles
                          .filter((m: MagicCircle) =>
                            values.magicCircle.includes(m.id)
                          )
                          .find((mc: MagicCircle) =>
                            mc.descriptors.includes(d.id)
                          )
                      ) {
                        return false;
                      }
                      return true;
                    })
                    .map(d => (
                      <Select.Option key={d.id} value={d.id}>
                        {d.name}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
            </Col>
            <Col {...moreOptionsForm}>
              <Form.Item>
                <Select
                  mode="multiple"
                  style={{ width: "100%" }}
                  placeholder="Select tier(s)"
                  value={values.tiers}
                  onChange={v => {
                    setFieldValue("tiers", v);
                  }}
                  allowClear={true}
                >
                  {[0, 1, 2, 3, 4, 5].map(t => (
                    <Select.Option key={t} value={t}>
                      {t}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        )}
        <Row>
          <Col span={24} style={{ textAlign: "right" }}>
            <Button
              type="primary"
              htmlType="submit"
              disabled={this.props.isSubmitting}
            >
              Search
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Reset
            </Button>
            <Button
              size="small"
              style={{ marginLeft: 8, fontSize: 12 }}
              onClick={this.toggle}
            >
              More Options <Icon type={expand ? "up" : "down"} />
            </Button>
          </Col>
        </Row>
      </Form>
    );
  };
}

const mapStateToProps = (state: AppState) => ({
  filterValues: state.filter,
  descriptors: state.magic.descriptors,
  magicCircles: state.magic.magicCircle
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      resetFilter,
      updateFilter
    },
    dispatch
  );

const MyForm = withFormik<Props, FormValues>({
  mapPropsToValues: (props: Props) => props.filterValues,
  handleSubmit: (values, { props, setSubmitting, setValues }) => {
    props.updateFilter(values);
    setSubmitting(false);
  }
})(FilterForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyForm);
