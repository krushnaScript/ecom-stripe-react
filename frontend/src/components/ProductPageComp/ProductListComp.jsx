import { Box, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../../redux/slices/productsApi";
import { addToCart } from "../../redux/slices/cartSlice";
import { Text48 } from "../CustomTypography";
import ProductCard from "../ProductCard";
import { ButtonOutline } from "../CustomButtonList";
import { priceUnit } from "../../constants/CommonConst";
import { CommonStyles } from "../../constants/CommonStyles";

const ProductListComp = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetAllProductsQuery();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <Box>
      <Text48
        text="NEW ARRIVALS"
        mt={5}
        mb={5}
        textAlign="center"
        bold="true"
      />
      {status === "success" ? (
        <>
          <Grid container spacing={3} pb={3}>
            {data &&
              data?.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <ProductCard
                    name={product.name}
                    image={product.image}
                    desc={product.desc}
                    price={product.price}
                    unit={priceUnit}
                    onAddButtonClick={() => {
                      handleAddToCart(product);
                    }}
                  />
                </Grid>
              ))}
          </Grid>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
      <Box textAlign="center">
        <ButtonOutline
          text="View All"
          width="220px"
          size="large"
          customStyle={CommonStyles.RoundedButtonStyle}
        />
      </Box>
    </Box>
  );
};

export default ProductListComp;
