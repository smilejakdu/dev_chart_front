import React, { useState, useEffect, useCallback } from "react";
import {
  ProgrammingPageBody,
  ProgrammingPageTitle,
  CheckBoxBorder,
  CheckBoxInput,
  ContainerSection,
  ContainerCardInfo,
  ContainerFeatures,
  Button,
} from "./ProgrammingPage.style";
import request from "../../util/request";
import { Link } from "react-router-dom";

const Programming = () => {
  const [nickname, setNickname] = useState("");
  const [python, setPython] = useState(false);
  const [javascript, setJavascript] = useState(false);
  const [java, setJava] = useState(false);
  const [php, setPhp] = useState(false);
  const [c, setC] = useState(false);
  const [c_plus, setC_plus] = useState(false);
  const [spring, setSpring] = useState(false);
  const [django, setDjango] = useState(false);
  const [flask, setFlask] = useState(false);
  const [express, setExpress] = useState(false);
  const [react, setReact] = useState(false);
  const [vue, setVue] = useState(false);
  const [laravel, setLaravel] = useState(false);

  const onHandleClick = () => {
    request
      .post(
        "/users/programming",
        {
          python,
          javascript,
          java,
          php,
          c,
          c_plus,
          spring,
          django,
          flask,
          express,
          react,
          vue,
          laravel,
        },
        {
          headers: { Authorization: `${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    request
      .get("/users/programming", {
        headers: { Authorization: `${localStorage.getItem("token")}` },
      })
      .then((res) => {
        let {
          data: { data },
        } = res;
        console.log(data);
        console.log(data[0].php);
        console.log(data[0].python);
        setNickname(data[0].nickname);
        setPython(data[0].python);
        setJavascript(data[0].javascript);
        setJava(data[0].java);
        setPhp(data[0].php);
        setC(data[0].c);
        setC_plus(data[0].c_plus);
        setSpring(data[0].spring);
        setDjango(data[0].django);
        setFlask(data[0].flask);
        setExpress(data[0].express);
        setReact(data[0].react);
        setVue(data[0].vue);
        setLaravel(data[0].laravel);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onPythonClick = useCallback(() => {
    setPython((e) => !e);
  }, []);

  const onJavaScriptClick = useCallback(() => {
    setJavascript((e) => !e);
  }, []);

  const onJavaClick = useCallback(() => {
    setJava((e) => !e);
  }, []);

  const onPhpClick = useCallback(() => {
    setPhp((e) => !e);
  }, []);

  const onCClick = useCallback(() => {
    setC((e) => !e);
  }, []);

  const onCPlusClick = useCallback(() => {
    setC_plus((e) => !e);
  }, []);

  const onSpringClick = useCallback(() => {
    setSpring((e) => !e);
  }, []);

  const onDjangoClick = useCallback(() => {
    setDjango((e) => !e);
  }, []);

  const onFlaskClick = useCallback(() => {
    setFlask((e) => !e);
  }, []);

  const onExpressClick = useCallback(() => {
    setExpress((e) => !e);
  }, []);

  const onReactClick = useCallback(() => {
    setReact((e) => !e);
  }, []);

  const onVueClick = useCallback(() => {
    setVue((e) => !e);
  }, []);

  const onLaravelClick = useCallback(() => {
    setLaravel((e) => !e);
  }, []);

  return (
    <ProgrammingPageBody>
      {localStorage.getItem("token") ? (
        <div>
          <ProgrammingPageTitle>
            사용하는 언어 와 프레임워크를 선택해 주세요.
          </ProgrammingPageTitle>
          <center>
            <div>{nickname}</div>
          </center>
          <CheckBoxBorder>
            <CheckBoxInput>
              <input type="checkbox" checked={python} onClick={onPythonClick} />
              <label htmlFor="">python</label>
            </CheckBoxInput>
            <CheckBoxInput>
              <input
                type="checkbox"
                checked={javascript}
                onClick={onJavaScriptClick}
              />
              <label htmlFor="">javascript</label>
            </CheckBoxInput>
            <CheckBoxInput>
              <input type="checkbox" checked={java} onClick={onJavaClick} />
              <label htmlFor="">java</label>
            </CheckBoxInput>
            <CheckBoxInput>
              <input type="checkbox" checked={php} onClick={onPhpClick} />
              <label htmlFor="">php</label>
            </CheckBoxInput>
            <CheckBoxInput>
              <input type="checkbox" checked={c} onClick={onCClick} />
              <label htmlFor="">c</label>
            </CheckBoxInput>
            <CheckBoxInput>
              <input type="checkbox" checked={c_plus} onClick={onCPlusClick} />
              <label htmlFor="">c_plus</label>
            </CheckBoxInput>
          </CheckBoxBorder>
          <br />
          <CheckBoxBorder>
            <CheckBoxInput>
              <input type="checkbox" checked={spring} onClick={onSpringClick} />
              <label htmlFor="">spring</label>
            </CheckBoxInput>
            <CheckBoxInput>
              <input type="checkbox" checked={django} onClick={onDjangoClick} />
              <label htmlFor="">django</label>
            </CheckBoxInput>
            <CheckBoxInput>
              <input type="checkbox" checked={flask} onClick={onFlaskClick} />
              <label htmlFor="">flask</label>
            </CheckBoxInput>
            <CheckBoxInput>
              <input
                type="checkbox"
                checked={express}
                onClick={onExpressClick}
              />
              <label htmlFor="">express</label>
            </CheckBoxInput>
            <CheckBoxInput>
              <input type="checkbox" checked={react} onClick={onReactClick} />
              <label htmlFor="">react</label>
            </CheckBoxInput>
            <CheckBoxInput>
              <input type="checkbox" checked={vue} onClick={onVueClick} />
              <label htmlFor="">vue</label>
            </CheckBoxInput>
            <CheckBoxInput>
              <input
                type="checkbox"
                checked={laravel}
                onClick={onLaravelClick}
              />
              <label htmlFor="">laravel</label>
            </CheckBoxInput>
          </CheckBoxBorder>
          <div>
            <center>
              <Button onClick={onHandleClick}>Button</Button>
            </center>
          </div>
          <ContainerSection>
            <ContainerCardInfo>
              <h3>React JS</h3>
              <ContainerFeatures>
                <li>JavaScript</li>
                <li>Library</li>
                <a href="https://ko.reactjs.org/tutorial/tutorial.html">
                  go to React
                </a>
              </ContainerFeatures>
              <button>Button</button>
            </ContainerCardInfo>
            <ContainerCardInfo>
              <h3>Django</h3>
              <ContainerFeatures>
                <li>Python</li>
                <li>Framework</li>
                <a href="https://docs.djangoproject.com/ko/3.1/">
                  go to Django
                </a>
              </ContainerFeatures>
              <button>Button</button>
            </ContainerCardInfo>
            <ContainerCardInfo>
              <h3>Express</h3>
              <ContainerFeatures>
                <li>JavaScript</li>
                <li>Framework</li>
                <a href="https://expressjs.com/ko/">go to Express</a>
              </ContainerFeatures>
              <button>Button</button>
            </ContainerCardInfo>
          </ContainerSection>
        </div>
      ) : (
        <ProgrammingPageTitle>로그인이 필요합니다.</ProgrammingPageTitle>
      )}
    </ProgrammingPageBody>
  );
};

export default Programming;
