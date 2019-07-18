import React, { useState } from "react";
import { Form, Row, Col, Button, Icon, Input, Switch, Select } from "antd";
import { MagicCircle, Filter } from "../../store/ducks/magic/types";
import { Formik, FormikActions, FormikProps } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../store/index";
import { setFilter } from "../../store/ducks/magic/actions";
import { InitialState as InitialStateMagic } from "../../store/ducks/magic/types";
import { CSSTransition } from "react-transition-group";

interface SearchFormValues extends Filter {}

const FilterForm: React.SFC = () => {
  const initialValues = useSelector(
    (state: ApplicationState) => state.magic.filter
  );
  const magicCircles = useSelector(
    (state: ApplicationState) => state.magic.data.magicCircles
  );
  const descriptors = useSelector(
    (state: ApplicationState) => state.magic.data.descriptors
  );
  const dispatch = useDispatch();
  const [expand, setExpand] = useState(false);
  const moreOptionsForm = {
    xs: 24,
    sm: 8
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(
        values: SearchFormValues,
        actions: FormikActions<SearchFormValues>
      ) => {
        actions.setSubmitting(false);
      }}
      render={(formikBag: FormikProps<SearchFormValues>) => (
        <Form
          className="ant-advanced-search-form"
          onSubmit={formikBag.handleSubmit}
        >
          <Row gutter={24}>
            <Col span={23}>
              <Form.Item>
                <Form.Item style={{ display: "inline-block", width: "90%" }}>
                  <Input
                    size="large"
                    placeholder="Search by name or tag"
                    name="nameSearch"
                    defaultValue={formikBag.initialValues.nameSearch}
                    onChange={formikBag.handleChange}
                  />
                </Form.Item>
                <span style={{ display: "inline-block", width: "2%" }} />
                <Form.Item
                  style={{
                    display: "inline-block",
                    float: "right",
                    width: "8%"
                  }}
                >
                  <Switch
                    onChange={(checked: boolean) => {
                      formikBag.setFieldValue("isFavorited", checked);
                    }}
                    checkedChildren={
                      <Icon
                        type="star"
                        theme="filled"
                        style={{ color: "#faad14" }}
                      />
                    }
                    unCheckedChildren={<Icon type="star" />}
                    checked={formikBag.initialValues.isFavorited}
                  />
                </Form.Item>
              </Form.Item>
            </Col>
          </Row>
          <CSSTransition in={expand} timeout={500} classNames="slide">
            <Row gutter={24}>
              <Col {...moreOptionsForm}>
                <Form.Item>
                  <Select
                    mode="multiple"
                    style={{ width: "100%" }}
                    placeholder="Select magic circle(s)"
                    defaultValue={formikBag.initialValues.magicCircle}
                    onChange={(v: number[]) => {
                      formikBag.setFieldValue("magicCircle", v);
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
                    defaultValue={formikBag.initialValues.descriptors}
                    onChange={(v: number[]) => {
                      formikBag.setFieldValue("descriptors", v);
                    }}
                    allowClear={true}
                  >
                    {descriptors.map(d => (
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
                    defaultValue={formikBag.initialValues.tiers}
                    onChange={(v: number[]) => {
                      formikBag.setFieldValue("tiers", v);
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
          </CSSTransition>
          <Row>
            <Col span={24} style={{ textAlign: "right" }}>
              <Button
                type="primary"
                htmlType="submit"
                disabled={formikBag.isSubmitting}
              >
                Search
              </Button>
              <Button
                style={{ marginLeft: 8 }}
                onClick={() => dispatch(setFilter(InitialStateMagic.filter))}
              >
                Reset
              </Button>
              <Button
                size="small"
                style={{ marginLeft: 8, fontSize: 12 }}
                onClick={() => setExpand(!expand)}
              >
                More Options <Icon type={expand ? "up" : "down"} />
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    />
  );
};

export default FilterForm;
