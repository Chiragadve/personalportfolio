import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import React from 'react';
import headerImg from '../assets/banner_img.png';
// import Background from './Background';

interface TrackVisibilityProps {
  isVisible: boolean;
}

export const Banner: React.FC = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['Web Developer', 'Full Stack Developer', 'UI/UX Designer'];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      {/* <Background /> */}
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }: TrackVisibilityProps) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h1>
                    {`Hi! I'm Chirag`}{' '}
                    <span
                      className="txt-rotate"
                      data-period="1000"
                      data-rotate='[ "Web Developer", "Full Stack Developer", "Computer Engineering Student" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Welcome to my portfolio website! I'm a dedicated Full-Stack Web Developer and
                    Computer Engineering Student. My passion for continuous learning and innovation
                    drives me to create impactful real-world projects that meet modern industry
                    standards.
                    <br />
                    <br />
                    <b> Please feel free to explore my website and see my projects!</b>
                  </p>

                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1vsah0VX5S7dmDzxXuIuYUOyvurUrIX3F/view?usp=sharing"
                  >
                    <button onClick={() => console.log('connect')}>
                      Open My Resume
                      <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }: TrackVisibilityProps) => (
                <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
