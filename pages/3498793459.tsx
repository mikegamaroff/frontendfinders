import React, { /* useContext */ useEffect, useState } from "react";
/* import { dbFeed } from "../data/data"; */

interface ISteps {
  id: number;
  items: string;
  section: string;
  submissionID: number;
}

type userProps = {
  user: {
    assignedAt: string;
    description: string;
    email: string;
    id: number;
    name: string;
    phone: string;
    steps: ISteps[];
  };
};
/* let dbFeed = [{
    user: {
      assignedAt: "",
      description: "",
      email: "",
      id: 0,
      name: "",
      phone: "",
      steps: {
        id: 0,
        items: "",
        section: "",
        submissionID: 0,
      },
    },
  }]; */
let dbFeed: userProps[] = [];
let tmpObj: any;
const Dashboard: React.FC = () => {
  /*   const { state } = useContext(AppContext); */
  const [users, setUsers] = useState<userProps[]>();
  const getData = async () => {
    const req = await fetch("/api/users");
    const result = await req.json();

    for (let i = 0; i < result.length; i++) {
      tmpObj = result[i];

      dbFeed.push({ user: tmpObj });
    }
    setUsers([]);
    setUsers(dbFeed);
  };

  const getItems = async (id: number, i: number) => {
    const req = await fetch("/api/steps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const result = await req.json();
    const res = await result;
    dbFeed[i].user.steps = res;
    setUsers([]);
    setUsers(dbFeed);
    console.log(users);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="contentOuterContainer">
      <div className="contentInnerContainer">
        <div className="contentBlock">
          <div className="contentTopBar">
            <div className="contentPaper">
              <div className={"innerAdminContainer"}>
                {/*    {users &&
                  users.map((val, i) => {
                    return (
                      <div key={i * Math.random()}>
                        <div onClick={() => getItems(val.user.id, i)}>
                          {val.user.name}
                        </div>

                        <div>
                    
                          {val.user.steps.map((step, j) => {
                            return (
                              <div
                                className="stepRow"
                                key={j * Math.random() * 1000}
                              >
                                {step.items}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })} */}

                {users &&
                  users.map((val, i) => {
                    return (
                      <div key={val.user.id}>
                        <div onClick={() => getItems(val.user.id, i)}>
                          <div className="userRow">
                            <div> {val.user.name}</div>
                            <div> {val.user.email}</div>
                            <div> {val.user.phone}</div>
                          </div>
                          <div className="userDescription">
                            {val.user.description}
                          </div>
                        </div>
                        {users[i].user.steps &&
                          users[i].user.steps.map((step, j) => {
                            return (
                              <div key={j * Math.random() * 1000}>
                                <h4>{step.section}:</h4>
                                <div className="stepRow">
                                  {step.items.split(",").map((item, k) => {
                                    return <span key={k}>{item}</span>;
                                  })}
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
