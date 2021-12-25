import React, { Component } from "react";
import PageLayout from "../components/PageLayout";
import Category from "../category/category";
class Clothing extends Component {
  render() {
    const { categories } = this.props;
    const { data } = categories;

    return (
      <PageLayout>
        <Category data={data} />
      </PageLayout>
    );
  }
}

export default Clothing;
