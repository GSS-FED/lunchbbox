import React from "react";
import base from "../API/airTable";

const useFedLunchInfo = props => {
  const [members, setMember] = React.useState([]);
  const [restaurant, setRestaurant] = React.useState([]);
  React.useEffect(() => {
    base("中餐好朋友")
      .select({
        fields: ["成員", "頭像"]
      })
      .firstPage((err, records) => {
        setMember(
          records.map(r => ({
            id: r.id,
            name: r.get("成員"),
            avatar: r.get("頭像")
          }))
        );
      });

    base("中午好餐廳")
      .select({
        fields: ["餐廳", "不是那麼愛這間的人"]
      })
      .firstPage((err, records) => {
        setRestaurant(
          records.map(r => ({
            id: r.id,
            name: r.get("餐廳"),
            noLike: r.get("不是那麼愛這間的人")
          }))
        );
      });
  }, []);

  return { members, restaurant };
};

export default useFedLunchInfo;
