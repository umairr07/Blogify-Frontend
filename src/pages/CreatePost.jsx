import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const CreatePost = () => {
  const [catArray, setCatArray] = useState([]);
  const [inpuCat, setInputCat] = useState("");

  const addCategories = () => {
    const updatedCatArray = [...catArray];
    updatedCatArray.push(inpuCat);
    setInputCat("");
    setCatArray(updatedCatArray);
  };

  const deleteCategory = (idx) => {
    let updatedCatArray = [...catArray];
    updatedCatArray.splice(idx);
    setCatArray(updatedCatArray);
  };

  return (
    <div>
      <div>
        <h1>Create a Post</h1>
      </div>

      {/* title */}
      <div>
        <h1>Enter a post title : </h1>
        <input type="text" className="border-2" />
      </div>

      {/* images */}
      <div>
        <h1>Add images to your post : </h1>
        <input type="file" name="images" id="images" />
      </div>

      {/* categories */}
      <div>
        <h1>Add Categories : </h1>
        <div>
          <input
            type="text"
            name="text"
            id="category"
            className="border-2"
            value={inpuCat}
            onChange={(e) => setInputCat(e.target.value)}
          />
          <button onClick={addCategories}>Add</button>
        </div>

        <div className="flex items-center gap-2">
          {catArray?.map((cat, idx) => {
            return (
              <div key={idx} className="flex items-center border-2">
                <p>{cat}</p>
                <button onClick={() => deleteCategory(idx)}>
                  <RxCross2 />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* description */}
      <div>
        <h1>Add a description : </h1>
        <textarea name="" id="" className="border-2"></textarea>
      </div>

      {/* create bt */}
      <div>
        <button>Create</button>
      </div>
    </div>
  );
};

export default CreatePost;
