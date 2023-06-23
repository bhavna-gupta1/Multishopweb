import React, { useEffect, useRef, useState } from "react";
function Form() {
  const [cat, setcat] = useState([]);
  const [prodata, setprodata] = useState([]);
  const [id, setid] = useState([]);
  const newRef = useRef(null);
  async function handleProdata() {
    let a = process.env.REACT_APP_SECRET_KEY
    let result = await fetch(`${a}/api/v1/product/`);
    let response = await result.json();
    setprodata(response)
  }
  useEffect(() => {
    handleProdata();
  }, [])
// POST METHOD
  const handleAddData = (e) => {
    e.preventDefault();
    const obj = {
      "title": newRef.current.title.value,
      "image": null,
      "price": newRef.current.price.value,
      "description": newRef.current.description.value,
      'information': newRef.current.information.value,
      "category": newRef.current.category.value
    }

    let a = process.env.REACT_APP_SECRET_KEY
    const response = fetch(`${a}/api/v1/product/`, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },

    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "data")
        handleProdata();
      })
      .catch(error => {
        console.error(error);
      });
  }

//CATEGORY
  async function handleCategory() {
    let data1 = await fetch(`http://fccf-103-195-16-180.ngrok-free.app/api/v1/category/`);
    let data2 = await data1.json();
    setcat(data2)
  }
  useEffect(() => {
    console.log(newRef.current.category.value, newRef.current.title.value, "first")
   // console.log(cat, "caytrgy")
    handleCategory();
  }, [])

  function handleSelect(e) {
    setcat(e.target.value)

  }
//EDIT
  function selectProduct(prodatas) {
    console.log(prodatas, "product")

    //  newRef.current.id.value=(prodatas.id)
    newRef.current.title.value = (prodatas.title)
    newRef.current.price.value = (prodatas.price)
    //newRef.current.image.value = (prodatas.image)
    newRef.current.description.value = (prodatas.description)
    newRef.current.information.value = (prodatas.information)
    newRef.current.category.value = (prodatas.category.id)
      setid(prodatas.id);
  }

// UPDATE DATA(PUT METHOD)
  async function handleUpdates(e) {
    e.preventDefault();
    let obj = {
      "title": newRef.current.title.value,
      "image": null,
      "price": newRef.current.price.value,
      "description": newRef.current.description.value,
      'information': newRef.current.information.value,
      "category": newRef.current.category.value
    }
  let a = process.env.REACT_APP_SECRET_KEY
     const response2 = fetch(`${a}/api/v1/product/${id}/`, {
      method: 'PUT',
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },

    })
      .then((response2) => response2.json())
      .then((data3) => {
        console.log(response2, "response2")
        handleProdata();
      })
     .catch(error => {
        console.error(error);
      });
  }

// DELETE METHOD
  function delData(prodatas) {
    let data = prodatas.id;
    let a = process.env.REACT_APP_SECRET_KEY
    const response = fetch(`${a}/api/v1/product/${data}/`, {
      method: 'DELETE'
    })
      .then((response) => {
        console.log(response)
        handleProdata();
      })
  }


  return (
    <>
      <form ref={newRef}>
        <div className="mb-3 row">
          <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="title" />
          </div>
          <div className="mb-3">
            <label htmlFor="formFileMultiple" className="form-label">Image</label>
            <input className="form-control" type="file" name="image" multiple />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="price" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="description" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="information" className="col-sm-2 col-form-label">Information</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="information" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="category">category :
            <select class="form-select" aria-label="Default select example" name="category" placeholder="select">
              {cat.map(category => (
                <option value={category.id}>{category.word} </option>

              ))}
            </select>
          </label>
        </div>
        <br />
        <button onClick={handleAddData}>POST</button>
        <button onClick={handleUpdates}>Update value</button>


      </form>


      <table className="table table-bordered border-primary">
        <thead className="thead-dark">
          <tr>
            <th>id</th>
            <th>title</th>
            <th>image</th>
            <th>price</th>
            <th>description</th>
            <th>information</th>
            <th>size</th>
            <th>color</th>
            <th>category</th>
          </tr> </thead>
        <tbody>

          {prodata.map(prodatas => (
            <tr key={prodatas.id}>
              <td>{prodatas.id}</td>
              <td>{prodatas.title}</td>
              <td>

                <img src={prodatas.image} style={{ height: "10pc", width: "10pc" }} />

              </td>
              <td>{prodatas.price}</td>
              <td>{prodatas.description}</td>
              <td>{prodatas.information}</td>
              <td>{prodatas.size}</td>
              <td>{prodatas.color}</td>
              <td>{prodatas.category.word}</td>
              <td><button onClick={() => selectProduct(prodatas)}>edit</button></td>
              <td><button onClick={() => delData(prodatas)}>Delete</button></td>
            </tr>

          ))}
        </tbody>
      </table>






    </>
  )
}

export default Form;