import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
export const GifExpertApp = () => {
  // usf como snipet para crear el hook
  const [categories, setCategories] = useState(["Blue lock"]);
  const onAddCategory = (onNewCategory) => {
    if (categories.includes(onNewCategory)) return;

    setCategories([onNewCategory, ...categories]);
  };
  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
