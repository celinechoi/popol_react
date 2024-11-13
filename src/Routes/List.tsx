import { dbService } from 'fbase';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Tabs from 'Routes/Tabs';
import { media } from 'style/media_query';
import Loading from 'Components/Loading';
import { motion } from 'framer-motion';
import ImgsLoading from 'Components/ImgsLoading';
import ErrorPage from 'Components/ErrorPage';

const Title = styled.div`
  height: 200px;
  ${media.medium`
		height: 160px;
	`};
  ${media.small`
		height: auto;
	`};
  .page {
    &-h1 {
      text-align: center;
    }
  }
`;

const Container = styled.div`
  padding: 40px 0 0;
  ${media.small`
		padding: 68px 0 0;
	`};
`;

const Boxes = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  ${media.large`
		gap: 20px;
	`};
  ${media.small`
		gap: 16px;
	`};
  ${media.smallToo`
		flex-direction: column;
		gap: 12px;
	`};
`;

const Box = styled(motion.li)`
  flex: 0 0 calc(100% / 3 - 32px / 3 * 2);
  padding: 24px 24px 12px;
  box-shadow: ${(props) => props.theme.shadow.box};
  border: 1px solid ${(props) => props.theme.bgColor.gray.fourth};
  background-color: ${(props) => props.theme.bgColor.gray.third};
  &:hover {
    border: 1px solid ${(props) => props.theme.point.blue[0]};
  }
  &:active {
    transform: scale(0.97);
    border-color: ${(props) => props.theme.neon.yellow};
    background: ${(props) => props.theme.gradient.second};
  }
  ${media.large`
		flex-basis: calc(100%/3 - 20px/3*2);
	`};
  ${media.medium`
		flex-basis: calc(100%/2 - 20px/2*1);
		padding: 20px;
		border-radius: 16px;
	`};
  ${media.small`
			flex-basis: 100%;
			padding: 16px;
			border-radius: 12px;
	`}
  ${media.smallToo`
			padding: 12px;
	`};
`;

const BoxCon = styled.div`
  padding-top: 20px;
  p {
    padding-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.textColor.gray.fourth};
    ${media.small`
			padding-bottom: 0;
		`};
    ${media.smallToo`
			font-size: 13px;
		`};
  }
  .last {
    width: 100%;
    padding-top: 8px;
    color: ${(props) => props.theme.textColor.gray.fifth};
    font-size: 13px;
    text-align: right;
    ${media.small`
			padding-top: 3px;
			font-size: 12px;
		`};
  }
  h4 {
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    text-align: center;
    ${media.medium`
			min-height: 40px;
			font-size: 18px;
		`};
    ${media.small`
			font-size: 16px;
		`};
  }
`;

const ImgBox = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  height: 165px;
  background-color: #ededed;
  border-radius: 20px;
  border: 3px solid transparent;
  ${media.large`
		height: 145px;
	`};
  ${media.medium`
		height: 150px;
		border-radius: 16px;
	`};
  ${media.small`
		height: 100px;
    border-radius: 12px;
	`};
  > img {
    display: block;
    position: relative;
    z-index: 1;
    width: 70%;
    height: auto;
    background-color: #ededed;
    ${media.large`
			padding: 0;
		`};
    ${media.small`
			width: 35%;
		`}
    ${media.smallToo`
			width: 45%;
		`};
  }
`;

export interface WorkInterface {
  id: string;
  projectName: string | undefined;
  customer: string;
  fileUrl: string | undefined;
  pageImgs: [] | undefined;
  pagesMap: [] | undefined;
  description: string | undefined;
  did: [] | undefined;
  keyWords: [] | undefined;
  startYear: number | undefined;
  startMonth: number | undefined;
  endMonth: number | undefined;
  endYear: number | undefined;
  code: number | undefined;
}

export interface TypesParams {
  typeId: string;
}

// motion
const boxesVariants = {
  start: {},
  end: {
    transition: {
      type: 'spring',
      duration: 0.2,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
  hover: {},
};

const boxVariants = {
  start: {
    borderRadius: 0,
    opacity: 0,
    y: 20,
  },
  end: {
    borderRadius: 20,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  hover: { scale: 1.05, y: -20 },
};

function List() {
  // const [userObj, setUserObj] = useState({});
  const { typeId } = useParams<TypesParams>();
  // state
  const [loading, setLoading] = useState(true);
  const [ImgLoading, setImgLoading] = useState(true);
  const [list, setList] = useState<WorkInterface[]>([]);
  useEffect(() => {
    let timer = setTimeout(() => {
      setImgLoading(false);
    }, 1000);
    let timeReturn = () => {
      return () => {
        clearTimeout(timer);
      };
    };

    const collection = dbService.collection(`${typeId}`);
    collection
      .orderBy('code', 'desc') // desc
      // .orderBy("endMonth", "desc")
      .onSnapshot((snapshot: any) => {
        const itemArr = snapshot.docs.map((doc: any) => ({
          id: doc.id,
          projectName: doc.data().projectName,
          customer: doc.data().customer,
          fileUrl: doc.data().fileUrl,
          pageImgs: doc.data().pageImgs,
          pagesMap: doc.data().pagesMap,
          description: doc.data().description,
          did: doc.data().did,
          keyWords: doc.data().keywords,
          startYear: doc.data().startYear,
          startMonth: doc.data().startMonth,
          endYear: doc.data().endYear,
          endMonth: doc.data().endMonth,
          code: doc.data().code,
          ...doc.data(),
        }));
        setList(itemArr);
        setLoading(false);
        timeReturn();
      });
    return () => {
      setList([]);
    };
  }, [typeId]);
  return (
    <>
      {typeId ? (
        <div className="container">
          <div className="inner">
            <Title>
              <div className="inner">
                <h2 className="page-h1">Works</h2>
                <Tabs typePath={typeId} />
              </div>
            </Title>
            <Container>
              {loading ? (
                <Loading prop="Loading" />
              ) : (
                <>
                  <Boxes variants={boxesVariants} initial="start" animate="end">
                    {list.map((val) => (
                      // console.log(val),
                      <Box key={val.id} variants={boxVariants} initial="start" animate="end" whileHover="hover">
                        <Link
                          to={{
                            pathname: `/works/${typeId}/${val.id}`,
                            state: {
                              parentPath: typeId,
                              id: val.id,
                              customer: val.customer,
                              projectName: val.projectName,
                              description: val.description,
                              did: val.did,
                              keyWords: val.keyWords,
                              fileUrl: val.fileUrl,
                              pageImgs: val.pageImgs,
                              pagesMap: val.pagesMap,
                              startYear: val.startYear,
                              startMonth: val.startMonth,
                              endYear: val.endYear,
                              endMonth: val.endMonth,
                            },
                          }}
                        >
                          <ImgBox>{ImgLoading ? <ImgsLoading /> : <img src={val.fileUrl} className={val.id} alt={val.projectName} />}</ImgBox>
                          <BoxCon>
                            <p>{val.customer}</p>
                            <h4>{val.projectName}</h4>
                            <p className="last">퍼블리싱 기여도: 100%</p>
                          </BoxCon>
                        </Link>
                      </Box>
                    ))}
                  </Boxes>
                </>
              )}
            </Container>
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </>
  );
}

export default List;
