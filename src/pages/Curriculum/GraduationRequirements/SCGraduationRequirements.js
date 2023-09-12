import React from "react";
import "./GraduationRequirements.css";

const SCGraduationRequirements = () => {
  return (
    <table className="table">
      <tbody>
        <tr className="table">
          <th rowSpan={2}>총 졸업학점</th>
          <th colSpan={2}>교양학점</th>
          <th colSpan={3}>제1전공 (심화과정)</th>
          <th colSpan={3}>제1전공 (다전공과정)</th>
          <th colSpan={3}>복수전공</th>
          <th rowSpan={2}>부전공 이수학점</th>
        </tr>
        <tr>
          <td>교양필수</td>
          <td>교양선택</td>
          <td>전공필수</td>
          <td>전공선택</td>
          <td>전공합계</td>
          <td>전공필수</td>
          <td>전공선택</td>
          <td>전공합계</td>
          <td>전공필수</td>
          <td>전공선택</td>
          <td>전공합계</td>
        </tr>
        <tr>
          <td>
            <span>130</span>
          </td>
          <td>
            <span>10</span>
          </td>
          <td>
            <span>15</span>
          </td>
          <td>
            <span>12</span>
          </td>
          <td>
            <span>48</span>
          </td>
          <td>
            <span>60</span>
          </td>
          <td>
            <span>12</span>
          </td>
          <td>
            <span>42</span>
          </td>
          <td>
            <span>54</span>
          </td>
          <td>
            <span>12</span>
          </td>
          <td>
            <span>30</span>
          </td>
          <td>
            <span>42</span>
          </td>
          <td>
            <span>21</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SCGraduationRequirements;
