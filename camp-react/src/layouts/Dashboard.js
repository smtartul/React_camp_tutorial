import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import { Grid } from "semantic-ui-react";
import { Route,Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>

          <Grid.Column width={12}>
            <Routes>
              <Route exact path="/" element={<ProductList/>} />
              <Route exact path="/products" element={<ProductList/>} />
              <Route exact path="/products/:id" element={<ProductDetail/>} />
              <Route exact path="/cart" element={<CartDetail/>} />
            </Routes>



          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
