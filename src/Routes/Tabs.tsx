import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from 'style/media_query';
import { useEffect, useState } from 'react';

const TabMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  top: 40px;
  width: fit-content;
  margin: 0 auto;
  padding: 8px 12px;
  border-radius: 38px;
  background-color: ${(props) => props.theme.bgColor.gray.second};
  box-shadow: ${(props) => props.theme.shadow.under};
  ${media.medium`
		gap: 14px;
		top: 32px;
		border-radius: 24px;
	`};
  ${media.micro`
    gap: 3px;
    width: auto;
  `};
`;

const Tab = styled.li<{ isActive: boolean }>`
  background: ${(props) => (props.isActive ? props.theme.gradient.first : 'transparent')};
  border-radius: 26px;
  color: ${(props) => (props.isActive ? '#fff' : props.theme.textColor.gray.fifth)};
  font-size: 18px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.gradient.first};
    color: #fff;
  }
  &:active {
    transform: scale(0.97);
  }
  &:first-child {
    margin-left: 0;
  }
  ${media.medium`
		border-radius: 20px;
	`};
  ${media.small`
    font-size: 16px;
	`};
  > a {
    display: block;
    padding: 10px 28px;
  }
`;
function Tabs({ typePath }: { typePath: string | object }) {
  const [data, setData] = useState<any[]>();
  useEffect(() => {
    const workType = [{ id: 'si' }, { id: 'solution' }, { id: 'sm' }];
    let isMount = true;
    if (isMount) {
      setData(workType);
    }
    return () => {
      isMount = false;
    };
  }, []);
  return (
    <>
      <TabMenu>
        {data?.map((val: any) => (
          <Tab key={val.id} isActive={typePath === val.id ? true : false}>
            <Link
              to={{
                pathname: `/works/${val.id}`,
                state: { name: val.id },
              }}
            >
              {val.id}
            </Link>
          </Tab>
        ))}
      </TabMenu>
    </>
  );
}
export default Tabs;

