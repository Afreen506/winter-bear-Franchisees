import React, { useMemo, useRef, useState } from 'react';
import { Select, Spin, Avatar } from 'antd'; // Import Avatar component from antd
import debounce from 'lodash/debounce';
import constant from '../constant/constant';
import { useNavigate } from 'react-router-dom';

function DebounceSelect({ fetchOptions, debounceTimeout = 800, ...props }) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);
  const fetchRef = useRef(0);
  
  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }
        setOptions(newOptions);
        setFetching(false);
      });
    };
    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);
  
  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
}

const handleNavigation = (productId) => {
    // Navigate to the specified product id
};

async function fetchUserList(searchValue) {
  console.log('fetching products with keyword', searchValue);
  return fetch(`${constant.baseUrl}api/product/allProduct?lang=1`)
    .then((response) => response.json())
    .then((body) => {
      const filteredProducts = body.products.filter((product) =>
        product.key_word && product.key_word.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log(filteredProducts,"filteredProducts");
      return filteredProducts.map((product) => ({
        label: (
          <div className='col-md-12' style={{ display: 'flex', alignItems: 'center' ,height:"60px"}}>
            <Avatar className='col-md-4' src={product.images[0]} style={{ marginRight: 8, width:"30px", height:"30px" }} /> {/* Use Avatar component to display image */}
            <span className='col-md-8'>{product.name}</span> 
          </div>
        ),
        value: product._id,
      }));
    });
}

const SearchList = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState([]);
  
  return (
    <DebounceSelect
      mode="multiple"
      value={value}
      suffixIcon={null}
      placeholder="Search"
      fetchOptions={fetchUserList}
      onChange={(newValue) => {
        setValue(newValue);
        navigate(`/product/${newValue[0].value}`);
      }}
      style={{
        width: '100%',
      }}
    />
  );
};

export default SearchList;
