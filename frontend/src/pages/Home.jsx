import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../redux/slices/cartSlice";
import { useGetAllProductsQuery } from "../redux/slices/productsApi";
import Button from "@mui/material/Button";
import { Box, Container, Typography } from "@mui/material";
import { Header1 } from "../components/CustomTypography";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetAllProductsQuery();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <Box>
      <Header1 heading="NEW ARRIVALS" mt={5} mb={5} />
      {status === "success" ? (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data &&
              data?.map((product) => (
                <div key={product.id}>
                  <ProductCard
                    name={product.name}
                    image={product.image}
                    desc={product.desc}
                  />
                  {/* <h3>{product.name}</h3>
                  <img src={product.image} alt={product.name} />
                  <div className="details">
                    <span>{product.desc}</span>
                    <span className="price">${product.price}</span>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>
                    Add To Cart
                  </button> */}
                </div>
              ))}
          </div>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </Box>
  );
};

export default Home;
