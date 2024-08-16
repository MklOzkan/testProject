"use client";
import { Col, Container, Row } from "react-bootstrap";
import data from "@/json/menu.json";
import "./menuDiv.scss";
import PageHeader from "../page-header";
import { useRouter } from "next/navigation";
import Spacer from "@/components/common/spacer.jsx";
const Menu = () => {
  const router = useRouter();

  const handleClick = (param) => {
    if (param === "8") {
      router.push("/adminLogin");
      return;
    }
    router.push("/login");
  };

  return (
    <>
      <PageHeader>ANA SAYFA</PageHeader>
      <Spacer height={50} />
      <Container className="text-center m-auto">
        <Row className="menuRow">
          {data.map((item) => (
            <Col key={item.id}>
              <div
                style={{ backgroundColor: item.color }}
                onClick={() => handleClick(item.id)}
                className={`menuDiv`}
              >
                {item.text}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Menu;
