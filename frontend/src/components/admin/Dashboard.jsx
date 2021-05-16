import React from "react";
import {
  AdminMain,
  Cards,
  CardSingle,
  RecentFlex,
  Projects,
  Customers,
  Card,
  CardHeader,
  CardBody,
  Status,
  Customer,
  TableResponsive,
  Info,
  Contact,
} from "./styledComp";
import {
  AiOutlineSearch,
  AiOutlineArrowRight,
  AiOutlineComment,
  AiOutlinePhone,
} from "react-icons/ai";
import { RiProjectorLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { GiBuyCard } from "react-icons/gi";

export const Dashboard = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <>
      <AdminMain>
        <Cards>
          <CardSingle>
            <div>
              <h1>54</h1>
              <span>Customers</span>
            </div>
            <div>
              <span>
                <FiUsers />
              </span>
            </div>
          </CardSingle>

          <CardSingle>
            <div>
              <h1>79</h1>
              <span>Projects</span>
            </div>
            <div>
              <span>
                <RiProjectorLine />
              </span>
            </div>
          </CardSingle>

          <CardSingle>
            <div>
              <h1>124</h1>
              <span>Orders</span>
            </div>
            <div>
              <span>
                <GiBuyCard />
              </span>
            </div>
          </CardSingle>

          <CardSingle>
            <div>
              <h1>$6k</h1>
              <span>Income</span>
            </div>
            <div>
              <span>
                <GiBuyCard />
              </span>
            </div>
          </CardSingle>
        </Cards>

        <RecentFlex>
          <Projects>
            <Card>
              <CardHeader>
                <h3>Recent Projects</h3>

                <button>
                  See all{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </button>
              </CardHeader>
              <CardBody>
                <TableResponsive>
                  <table width="100%">
                    <thead>
                      <tr>
                        <td>Project Title</td>
                        <td>Department</td>
                        <td>Status</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>UI/UX Design</td>
                        <td>UI Team</td>
                        <td>
                          <Status color="rebeccapurple"></Status>
                          review
                        </td>
                      </tr>
                      <tr>
                        <td>Web Development</td>
                        <td>frontend</td>
                        <td>
                          <Status color="deeppink"></Status>
                          in progress
                        </td>
                      </tr>
                      <tr>
                        <td>Ushop app</td>
                        <td>Mobile Team</td>
                        <td>
                          <Status color="orangered"></Status>
                          pending
                        </td>
                      </tr>
                      <tr>
                        <td>UI/UX Design</td>
                        <td>UI Team</td>
                        <td>
                          <Status color="rebeccapurple"></Status>
                          review
                        </td>
                      </tr>
                      <tr>
                        <td>Web Development</td>
                        <td>frontend</td>
                        <td>
                          <Status color="deeppink"></Status>
                          in progress
                        </td>
                      </tr>
                      <tr>
                        <td>Ushop app</td>
                        <td>Mobile Team</td>
                        <td>
                          <Status color="orangered"></Status>
                          pending
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </TableResponsive>
              </CardBody>
            </Card>
          </Projects>
          <Customers>
            <Card>
              <CardHeader>
                <h3>New customer</h3>

                <button>
                  See all{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </button>
              </CardHeader>
              <CardBody>
                <Customer>
                  <div>
                    <img
                      src="/images/user2.png"
                      width="40px"
                      height="40px"
                      alt=""
                    />
                  </div>
                  <Info>
                    <h4>Lweis S. Cunningam</h4>
                    <small>CEO Excerpt</small>
                  </Info>
                  <Contact>
                    <span>
                      <FiUsers />
                    </span>
                    <span>
                      <AiOutlineComment />
                    </span>
                    <span>
                      <AiOutlinePhone />
                    </span>
                  </Contact>
                </Customer>

                <Customer>
                  <div>
                    <img
                      src="/images/user2.png"
                      width="40px"
                      height="40px"
                      alt=""
                    />
                  </div>
                  <Info>
                    <h4>Lweis S. Cunningam</h4>
                    <small>CEO Excerpt</small>
                  </Info>
                  <Contact>
                    <span>
                      <FiUsers />
                    </span>
                    <span>
                      <AiOutlineComment />
                    </span>
                    <span>
                      <AiOutlinePhone />
                    </span>
                  </Contact>
                </Customer>
                <Customer>
                  <div>
                    <img
                      src="/images/user2.png"
                      width="40px"
                      height="40px"
                      alt=""
                    />
                  </div>
                  <Info>
                    <h4>Lweis S. Cunningam</h4>
                    <small>CEO Excerpt</small>
                  </Info>
                  <Contact>
                    <span>
                      <FiUsers />
                    </span>
                    <span>
                      <AiOutlineComment />
                    </span>
                    <span>
                      <AiOutlinePhone />
                    </span>
                  </Contact>
                </Customer>
                <Customer>
                  <div>
                    <img
                      src="/images/user2.png"
                      width="40px"
                      height="40px"
                      alt=""
                    />
                  </div>
                  <Info>
                    <h4>Lweis S. Cunningam</h4>
                    <small>CEO Excerpt</small>
                  </Info>
                  <Contact>
                    <span>
                      <FiUsers />
                    </span>
                    <span>
                      <AiOutlineComment />
                    </span>
                    <span>
                      <AiOutlinePhone />
                    </span>
                  </Contact>
                </Customer>
                <Customer>
                  <div>
                    <img
                      src="/images/user2.png"
                      width="40px"
                      height="40px"
                      alt=""
                    />
                  </div>
                  <Info>
                    <h4>Lweis S. Cunningam</h4>
                    <small>CEO Excerpt</small>
                  </Info>
                  <Contact>
                    <span>
                      <FiUsers />
                    </span>
                    <span>
                      <AiOutlineComment />
                    </span>
                    <span>
                      <AiOutlinePhone />
                    </span>
                  </Contact>
                </Customer>
                <Customer>
                  <div>
                    <img
                      src="/images/user2.png"
                      width="40px"
                      height="40px"
                      alt=""
                    />
                  </div>
                  <Info>
                    <h4>Lweis S. Cunningam</h4>
                    <small>CEO Excerpt</small>
                  </Info>
                  <Contact>
                    <span>
                      <FiUsers />
                    </span>
                    <span>
                      <AiOutlineComment />
                    </span>
                    <span>
                      <AiOutlinePhone />
                    </span>
                  </Contact>
                </Customer>
                <Customer>
                  <div>
                    <img
                      src="/images/user2.png"
                      width="40px"
                      height="40px"
                      alt=""
                    />
                  </div>
                  <Info>
                    <h4>Lweis S. Cunningam</h4>
                    <small>CEO Excerpt</small>
                  </Info>
                  <Contact>
                    <span>
                      <FiUsers />
                    </span>
                    <span>
                      <AiOutlineComment />
                    </span>
                    <span>
                      <AiOutlinePhone />
                    </span>
                  </Contact>
                </Customer>
                <Customer>
                  <div>
                    <img
                      src="/images/user2.png"
                      width="40px"
                      height="40px"
                      alt=""
                    />
                  </div>
                  <Info>
                    <h4>Lweis S. Cunningam</h4>
                    <small>CEO Excerpt</small>
                  </Info>
                  <Contact>
                    <span>
                      <FiUsers />
                    </span>
                    <span>
                      <AiOutlineComment />
                    </span>
                    <span>
                      <AiOutlinePhone />
                    </span>
                  </Contact>
                </Customer>
              </CardBody>
            </Card>
          </Customers>
        </RecentFlex>
      </AdminMain>
    </>
  );
};
