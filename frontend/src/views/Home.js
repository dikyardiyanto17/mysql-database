import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import loading from "../assets/loading.gif";
import "../assets/style.css";
import Product from "../components/Product";
import {
  getCategories,
  getCurrentUser,
  getProducts,
} from "../stores/action/actionCreator";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [theProduct, setTheProduct] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);
  const [theSelectedProduct, setTheSelectedProduct] = useState({});
  const [finalPrice, setFinalPrice] = useState(0);
  const [range, setRange] = useState([]);
  const roles = useSelector((state) => state.products.role);
  const products = useSelector((state) => state.products.products);
  const categories = useSelector((state) => state.products.categories);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
    Swal.fire({
      icon: "success",
      title: "You've successfully log out",
    });
  };
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { value, name } = e.target;
    const selectedProducts = products.filter((product) => {
      if (product.Category.name === value) {
        return product;
      }
    });
    setIsSelected(true);
    setTheProduct(selectedProducts);
  };

  const changeHandler2 = (e) => {
    const { value, name } = e.target;
    const finalProduct = theProduct.filter((product) => {
      if (product.name === value) {
        return product;
      }
    });
    setTheSelectedProduct(finalProduct[0]);
    setIsSelected2(true);
  };
  const changeHandler3 = (e) => {
    const { value, name } = e.target;
    for (let x = 0; x < theSelectedProduct.ProductDetails.length; x++) {
      if (value <= theSelectedProduct.ProductDetails[x].range) {
        setFinalPrice(theSelectedProduct.ProductDetails[x].price * value);
        return;
      } else {
        setFinalPrice(
          theSelectedProduct.ProductDetails[
            theSelectedProduct.ProductDetails.length - 1
          ].price * value
        );
      }
    }
  };

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCurrentUser());
    dispatch(getCategories());
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="border border-slate-800 bg-slate-900/70 mt-3 p-5 text-center">
          <h1>Home</h1>
          <Table bordered responsive size="sm" style={{ color: "black" }}>
            <thead>
              <tr>
                <th style={{ width: "70px" }}>No</th>
                <th style={{ width: "200px" }}>Name</th>
                <th style={{ width: "200px" }}>Category</th>
                {roles === "Admin" && (
                  <>
                    <th style={{ width: "150px" }}>Delete</th>
                  </>
                )}
              </tr>
            </thead>
            {products && (
              <tbody>
                {products?.map((product, index) => {
                  return (
                    <Product product={product} key={product.id} index={index} />
                  );
                })}
              </tbody>
            )}
          </Table>
          {products?.length == 0 && <img src={loading} />}

          <br />
          <br />
          <h1>Product Category</h1>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={changeHandler}
          >
            <option selected disabled>
              Open this select menu
            </option>
            {categories?.map((category) => {
              return (
                <option value={category.name} key={category.id} name="category">
                  {category.name}
                </option>
              );
            })}
          </select>
          {isSelected && (
            <>
              <div style={{ marginTop: "20px" }}>
                <h1>Product Name</h1>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={changeHandler2}
                >
                  <option selected disabled>
                    Open this select menu
                  </option>
                  {theProduct?.map((theSelectedProduct) => {
                    return (
                      <option
                        value={theProduct.name}
                        key={theSelectedProduct.id}
                        name="category"
                      >
                        {theSelectedProduct.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </>
          )}
          {isSelected2 && (
            <>
              <div style={{ marginTop: "20px" }}>
                <h1>Total Orders</h1>
                <div className="input-wrap-2">
                  <input
                    placeholder="Name"
                    onChange={changeHandler3}
                    type="number"
                    name="name"
                  />
                </div>
              </div>
            </>
          )}
          {finalPrice !== 0 && (
            <div style={{ marginTop: "20px" }}>
              <h1>Total Price</h1>
              <h3>Rp. {finalPrice}</h3>
            </div>
          )}
          <br />
          <Button variant="danger" onClick={logout}>
            Log Out
          </Button>
        </div>
      </div>
    </>
  );
}
