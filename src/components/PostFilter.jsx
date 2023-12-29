import React from "react";
import CustomSelect from "./UI/select/CustomSelect";
import CustomInput from "./UI/input/CustomInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>

        <CustomInput type='text' 
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder='search'
        />

        <CustomSelect 
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue='sort'
          options={[
            {value: 'title', name: 'by titile'},
            {value: 'body', name: 'by description'},
          ]}
        />
      </div>
    );
};

export default PostFilter;