import React from "react";
import logo from "./logo.svg";
import Airtable from "airtable";
import "./App.css";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: "keyv7sHqzJx3CNjUp"
});
const base = Airtable.base("appbBH2HPUYrrBv1u");

function App() {
  const [member, setMember] = React.useState([]);
  const [rest, setRest] = React.useState([]);
  const [wantToGo, setWantToGo] = React.useState([]);
  const [canGoRest, setCanGoRest] = React.useState([]);
  const [gogogo, setGogogo] = React.useState([]);

  React.useEffect(() => {
    base("中餐好朋友")
      .select({
        fields: ["成員",'頭像']
      })
      .firstPage((err, records) => {
        console.log(records)
        setMember(records.map(r => ({ id: r.id, name: r.get("成員"), avatar:r.get('頭像') })));
      });

    base("中午好餐廳")
      .select({
        fields: ["餐廳", "不是那麼愛這間的人"]
      })
      .firstPage((err, records) => {
        setRest(
          records.map(r => ({
            id: r.id,
            name: r.get("餐廳"),
            noLike: r.get("不是那麼愛這間的人")
          }))
        );
      });
  }, []);

  React.useEffect(() => {
    if (canGoRest.length > 0) {
      const randomResult = canGoRest.sort((a, b) => {
        var num = Math.random() > 0.5 ? -1 : 1;
        return num;
      });
      setGogogo([randomResult[0], randomResult[1], randomResult[2]]);
    }
  }, [canGoRest]);

  return (
    <div style={{ margin: "30px" }}>
      <div style={{ width: "40%", display: "inline-block" }}>
        <span style={{ fontSize: "30px" }}>請選擇要去吃飯的人</span>
        {member.map(m => (
          <div key={m.id} style={{ fontSize: "20px", marginBottom: "2px" }}>
            <input
              type="checkbox"
              value={m.id}
              id={m.id}
              onChange={() => {
                if (!wantToGo.includes(m.id))
                  setWantToGo(state => [...state, m.id]);
                else {
                  const wantGo = [...wantToGo];
                  const index = wantGo.indexOf(m.id);
                  if (index > -1) {
                    wantGo.splice(index, 1);
                  }
                  setWantToGo(wantGo);
                }
              }}
              checked={wantToGo.includes(m.id)}
            />
            <label htmlFor={m.id}> <img style={{ width: "50px",marginRight:'10px'}} alt={m.name} src={m.avatar[0].thumbnails.large.url}/>{m.name}</label>
          </div>
        ))}

        <button
          style={{
            marginTop: "10px",
            width: "100px",
            height: "40px",
            fontSize: "24px"
          }}
          onClick={() => {
            const filterRest = [...rest].filter(item => {
              return (
                item.noLike === undefined ||
                item.noLike.filter(
                  noLikePeople => wantToGo.indexOf(noLikePeople) > -1
                ).length === 0
              );
            });
            setCanGoRest(filterRest);
          }}
        >
          篩選
        </button>
      </div>
      <div
        style={{ width: "40%", display: "inline-block", verticalAlign: "top" }}
      >
        <span style={{ fontSize: "30px" }}>快去這邊吃飯</span>
        {!!gogogo && gogogo.map(gogo => <div key={gogo.id}>{gogo.name}</div>)}
      </div>
    </div>
  );
}

export default App;
