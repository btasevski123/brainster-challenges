import { icons } from "../../Types&Const/Const";
export const Badges = () => {
  return (
    <div className="badges">
      {icons.map((item, id) => {
        return (
          
            <i  key={item + id} className={item}></i>
         
        );
      })}
    </div>
  );
};
