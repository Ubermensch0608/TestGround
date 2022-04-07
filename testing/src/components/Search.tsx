import React, { FC } from "react";

const Search: FC<{
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}> = ({ value, onChange, children }) => {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input id="search" type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default Search;
