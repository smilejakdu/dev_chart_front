import React, { useState } from "react";
import {
  ProgrammingPageBody,
  ProgrammingPageTitle,
  InputCustom,
  InputBorder,
} from "./ProgrammingPage.style";

const Programming = () => {
  const [check, setCheck] = useState(false);
  const handleCheckBoxChange = (e) => {
    setCheck(e);
  };

  const laguagesList = ["python", "javascript", "java", "php", "C", "C++"];
  const frameworks = [
    "spring",
    "django",
    "flask",
    "express",
    "react",
    "vue",
    "laravel",
  ];

  return (
    <ProgrammingPageBody>
      {localStorage.getItem("token") ? (
        <div>
          <ProgrammingPageTitle>
            사용하는 언어 와 프레임워크를 선택해 주세요.
          </ProgrammingPageTitle>

          <InputBorder>
            {laguagesList.map((laguages) => (
              <div>
                <InputCustom>
                  <label>
                    <input
                      type="checkbox"
                      onClick={(e) => {
                        console.log(e.target.id);
                      }}
                    />
                    <span className="customCheckBox" />
                    <h4>{laguages}</h4>
                  </label>
                </InputCustom>
              </div>
            ))}
          </InputBorder>
          <InputBorder>
            {frameworks.map((framework) => (
              <div>
                <InputCustom>
                  <label>
                    <input
                      type="checkbox"
                      onClick={(e) => {
                        console.log(e.target.id);
                      }}
                    />
                    <span className="customCheckBox" />
                    <h4>{framework}</h4>
                  </label>
                </InputCustom>
              </div>
            ))}
          </InputBorder>
        </div>
      ) : (
        <ProgrammingPageTitle>로그인이 필요합니다.</ProgrammingPageTitle>
      )}
    </ProgrammingPageBody>
  );
};

export default Programming;
