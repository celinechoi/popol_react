import { motion } from 'framer-motion';
import { Link, useRouteMatch } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { booleanState } from '../atoms';
import { media } from 'style/media_query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const HeaderBox = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 8;
  overflow: hidden;
  width: 100%;
  height: 86px;
  background-color: ${(props) => props.theme.bgColor.gray.second};
  box-shadow: ${(props) => props.theme.shadow.under};
  &.home {
    position: initial;
    left: auto;
    right: auto;
    top: auto;
    background-color: ${(props) => props.theme.bgColor.gray.first};
    box-shadow: none;
  }
  ${media.small`
		height: auto;
	`};
  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 7px 0;
    ${media.small`
			padding: 14px 0;
		`};
  }
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 38px;
  position: relative;
  width: 100%;
  ${media.smallToo`
		flex-direction: column;
    gap: 12px;
	`};
`;
const Logo = styled.div`
  a {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: ${(props) => props.theme.textColor.gray.first};
    font: 20px 'Righteous';
    text-align: center;
    ${media.small`
			font-size: 16px;
		`};
  }
`;
const Em = styled.span`
  display: inline-block;
  margin-left: 35px;
  background-image: ${(props) => props.theme.gradient.first};
  background-clip: text;
  background-size: 100%;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 38px;
  text-align: center;
  ${media.small`
		margin-left: 0;
		font-size: 34px;
	`};
`;
const Menus = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  ${media.small`
		gap: 12px 32px;
	`};
`;
const Menu = styled.li`
  position: relative;
  color: ${(props) => props.theme.textColor.gray.second};
  font-size: 18px;
  font-weight: 700;
  line-height: 31px;
  ${media.small`
		font-size: 19px;
	`};
  &:hover {
    a {
      color: ${(props) => props.theme.point.purple};
    }
  }
  a {
    display: block;
    &.on {
      color: ${(props) => props.theme.point.skyblue};
    }
    &:active {
      transform: scale(0.97);
    }
  }
`;
const Point = styled(motion.span)`
  position: absolute;
  display: none;
  width: 100%;
  height: 2px;
  bottom: -7px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 7px;
  background: ${(props) => props.theme.gradient.first};
  transition: all 0.3s cubic-bezier(0.48, 0.35, 1, 1);
  opacity: 0;
  ${media.small`
		width: 8px;
	`};
`;
const HeaderRight = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
`;
const SwitchFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  ${media.smallToo`
		position: absolute;
		left: 0px;
    top: 4px;
	`};
  .dark {
    &-icon {
      color: ${(props) => props.theme.point.blue[0]};
    }
  }
  .light {
    &-icon {
      color: ${(props) => props.theme.point.orange};
    }
  }
`;
const ThemeSwitch = styled(motion.input)`
  background-color: ${(props) => props.theme.bgColor.gray.third};
  border-radius: 0.75em;
  box-shadow: 0.125em 0.125em 0 0.125em rgba(146, 146, 146, 0.3) inset;
  color: ${(props) => props.theme.point.orange};
  display: inline-flex;
  align-items: center;
  margin: auto;
  padding: 0.15em;
  width: 3em;
  height: 1.5em;
  transition: background-color 0.1s 0.3s ease-out, box-shadow 0.1s 0.3s ease-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    display: block;
  }
  &::before {
    background-color: ${(props) => props.theme.point.blue[0]};
    box-shadow: 0.125em 0.125em 0 0.125em rgba(182, 182, 182, 0.3) inset;
    border-radius: 50%;
    width: 1.2em;
    height: 1.2em;
    transition: background-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
    z-index: 1;
  }
  &::after {
    background: linear-gradient(transparent 50%, rgba(78, 78, 78, 0.15) 0) 0 50% / 50% 100%, repeating-linear-gradient(90deg, #bbb 0, #bbb, #bbb 20%, #999 20%, #999 40%) 0 50% / 50% 100%, radial-gradient(circle at 50% 50%, #888 25%, transparent 26%);
    background-repeat: no-repeat;
    border: 0.25em solid transparent;
    border-left: 0.4em solid #d8d8d8;
    border-right: 0 solid transparent;
    transition: border-left-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
    transform: translateX(-22.5%);
    transform-origin: 25% 50%;
    width: 1.2em;
    height: 1em;
    box-sizing: border-box;
  }
  &:checked {
    background-color: ${(props) => props.theme.bgColor.gray.third};
    box-shadow: 0.125em 0.125em 0 0.125em rgba(0, 0, 0, 0.1) inset;
    &::before {
      background-color: currentColor;
      transform: translateX(125%);
    }
    &::after {
      border-left-color: currentColor;
      transform: translateX(-2.5%) rotateY(180deg);
    }
  }
  &:focus {
    outline: 0;
  }
`;
// motion
const pointVariantes = {
  start: {
    display: 'none',
    width: '0',
    opacity: 0,
  },
  end: {
    display: 'block',
    width: '100%',
    opacity: 1,
    transition: {
      type: 'tween',
      ease: [1, 1, 1, 1],
      duration: 0.5,
    },
  },
  exit: {
    bottom: '-7px',
    opacity: 1,
  },
};

function Header() {
  // Theme 변경
  const [theme, setTheme] = useRecoilState(booleanState);
  const toggleTheme = () => {
    return setTheme((prev) => !prev);
  };
  // Link
  const homeMatch = useRouteMatch('/');
  const worksMatch = useRouteMatch('/works');
  const subMatch = useRouteMatch('/sub');
  const aboutMatch = useRouteMatch('/about');
  return (
    <HeaderBox className={homeMatch?.isExact ? 'home' : ''}>
      <div className="inner">
        <Row>
          <Logo>
            <Link to="/">
              <p>UI/UX Developer</p>
              <Em>Jinseul</Em>
            </Link>
          </Logo>
          <Menus>
            <Menu>
              <Link to="/" className={homeMatch?.isExact ? 'on' : ''}>
                Home
                {homeMatch?.isExact === true && <Point layoutId="point" variants={pointVariantes} initial="start" animate="end" exit="exit" />}
              </Link>
            </Menu>
            <Menu>
              <Link to="/works/sm" className={worksMatch || subMatch ? 'on' : ''}>
                Works
                {worksMatch || subMatch ? <Point layoutId="point" variants={pointVariantes} initial="start" animate="end" exit="exit" /> : ''}
              </Link>
            </Menu>
            <Menu>
              <Link to="/about" className={aboutMatch ? 'on' : ''}>
                About
                {aboutMatch && <Point layoutId="point" variants={pointVariantes} initial="start" animate="end" exit="exit" />}
              </Link>
            </Menu>
          </Menus>
          <HeaderRight>
            <SwitchFrame>
              {theme && <FontAwesomeIcon icon={faMoon} className="dark-icon" />}
              <ThemeSwitch type="checkbox" className="theme-switch" onClick={toggleTheme} title={theme ? '밝게 보기' : '어둡게 보기'} />
              {theme ? '' : <FontAwesomeIcon icon={faSun} className="light-icon" />}
            </SwitchFrame>
          </HeaderRight>
        </Row>
      </div>
    </HeaderBox>
  );
}

export default Header;
