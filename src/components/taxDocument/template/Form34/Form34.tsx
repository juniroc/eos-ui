'use client';
import './form34.css';
import { UpdaterProps } from '@/components/taxDocument/template/common/type';
import { Form34Data } from '@/components/taxDocument/template/Form34/type';
import NumericTextArea from '@/components/taxDocument/template/common/NumericTextArea';

export default function Form34({}: UpdaterProps<Form34Data>) {
  return (
    <div className="form34">
      <ul id="l1">
        <li data-list-text="■">
          <p
            className="s1"
            style={{
              paddingTop: '2pt',
              paddingLeft: '18pt',
              textIndent: '-9pt',
              textAlign: 'left',
            }}
          >
            부가가치세법 시행규칙 [별지 제34호서식]
          </p>
        </li>
      </ul>
      <p style={{ paddingTop: '9pt', textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <p className="s2" style={{ textIndent: '0pt', textAlign: 'center' }}>
        사업장별 부가가치세 과세표준 및 납부세액
        <span className="s3">(환급세액)</span>
        신고명세서
      </p>
      <p
        style={{
          paddingTop: '16pt',
          paddingLeft: '8pt',
          textIndent: '0pt',
          textAlign: 'left',
        }}
      >
        신고기간 :
        <input
          className="form-input form-input-text"
          style={{
            width: '40pt',
            height: '20pt',
            minWidth: '40pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
            fontSize: '10pt',
            textAlign: 'center',
          }}
          type="text"
        />
        년<span style={{ paddingLeft: '15pt' }}></span>
        제
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
            fontSize: '10pt',
            textAlign: 'center',
          }}
          type="text"
        />
        기 (
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
            fontSize: '10pt',
            textAlign: 'center',
          }}
          type="text"
        />
        월
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
            fontSize: '10pt',
            textAlign: 'center',
          }}
          type="text"
        />
        일 ~
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
            fontSize: '10pt',
            textAlign: 'center',
          }}
          type="text"
        />
        월
        <input
          className="form-input form-input-text"
          style={{
            width: '20pt',
            height: '20pt',
            minWidth: '20pt',
            display: 'inline-block',
            verticalAlign: 'middle',
            fontFamily: 'Arial',
            fontSize: '10pt',
            textAlign: 'center',
          }}
          type="text"
        />
        일) 총괄 납부 관리번호 : □□□□□□□
      </p>
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <hr
        style={{
          width: '882pt',
          border: 'none',
          borderTop: '1pt solid #000',
          margin: '0 auto',
        }}
      />
      <p style={{ textIndent: '0pt', textAlign: 'left' }}>
        <br />
      </p>
      <table
        style={{
          borderCollapse: 'collapse',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '882pt',
          tableLayout: 'fixed',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '22pt' }}>
          <td
            style={{
              width: '127pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              사업장
            </p>
          </td>
          <td
            style={{
              width: '200pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            colSpan={4}
          >
            <p
              className="s4"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              매출세액
            </p>
          </td>
          <td
            style={{
              width: '204pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            colSpan={4}
          >
            <p
              className="s4"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              매입세액
            </p>
          </td>
          <td
            style={{
              width: '39pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p style={{ textIndent: '0pt', textAlign: 'center' }}>
              <br />
            </p>
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              가산세
            </p>
          </td>
          <td
            style={{
              width: '39pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p style={{ textIndent: '0pt', textAlign: 'center' }}>
              <br />
            </p>
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              공제세액
            </p>
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              납부세액
            </p>
            <p
              className="s6"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              (환급세액)
            </p>
          </td>
          <td
            style={{
              width: '77pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            colSpan={2}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              내부거래
            </p>
            <p
              className="s6"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              (판매목적)
            </p>
          </td>
          <td
            style={{
              width: '28pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
            }}
            rowSpan={2}
          >
            <p style={{ textIndent: '0pt', textAlign: 'center' }}>
              <br />
            </p>
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              비고
            </p>
          </td>
        </tr>
        <tr style={{ height: '29pt' }}>
          <td
            style={{
              width: '65pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              소재지
            </p>
          </td>
          <td
            style={{
              width: '62pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              사업자등록번호
            </p>
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              구분
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              과세표준
            </p>
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              세율
            </p>
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              세액
            </p>
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              구분
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              과세표준
            </p>
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              세율
            </p>
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              세액
            </p>
          </td>
          <td
            style={{
              width: '40pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s6"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              반출액
            </p>
          </td>
          <td
            style={{
              width: '37pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s6"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              반입액
            </p>
          </td>
        </tr>
        <tr style={{ height: '14pt' }}>
          <td
            style={{
              width: '65pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <textarea
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontSize: '9pt',
                fontFamily: 'Arial',
              }}
            ></textarea>
          </td>
          <td
            style={{
              width: '62pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '9pt',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              과 세
            </p>
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              10
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              과 세
            </p>
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              10
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '39pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '39pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '40pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '37pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '28pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <textarea
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontSize: '8pt',
                fontFamily: 'Arial',
              }}
            ></textarea>
          </td>
        </tr>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '35pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
          <td
            style={{
              width: '60pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
        </tr>
        <tr style={{ height: '14pt' }}>
          <td
            style={{
              width: '62pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '9pt',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              영세율
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              0
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              의제등
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              0
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
        </tr>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '35pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
          <td
            style={{
              width: '60pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
        </tr>
        <tr style={{ height: '14pt' }}>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <textarea
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontSize: '9pt',
                fontFamily: 'Arial',
              }}
            ></textarea>
          </td>
          <td
            style={{
              width: '62pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '9pt',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              과 세
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              10
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              과 세
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              10
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '54pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '45pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '42pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '33pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <textarea
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontSize: '8pt',
                fontFamily: 'Arial',
              }}
            ></textarea>
          </td>
        </tr>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '35pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
          <td
            style={{
              width: '60pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
        </tr>
        <tr style={{ height: '14pt' }}>
          <td
            style={{
              width: '62pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '9pt',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              영세율
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              0
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              의제등
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              0
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
        </tr>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '35pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
          <td
            style={{
              width: '60pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
        </tr>
        <tr style={{ height: '14pt' }}>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <textarea
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontSize: '9pt',
                fontFamily: 'Arial',
              }}
            ></textarea>
          </td>
          <td
            style={{
              width: '62pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '9pt',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              과 세
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              10
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              과 세
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              10
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '54pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '45pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '42pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '33pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <textarea
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontSize: '8pt',
                fontFamily: 'Arial',
              }}
            ></textarea>
          </td>
        </tr>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '35pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
          <td
            style={{
              width: '60pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
        </tr>
        <tr style={{ height: '14pt' }}>
          <td
            style={{
              width: '62pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '9pt',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              영세율
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              0
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              의제등
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              0
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
        </tr>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '35pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
          <td
            style={{
              width: '60pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
        </tr>
        <tr style={{ height: '14pt' }}>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <textarea
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontSize: '9pt',
                fontFamily: 'Arial',
              }}
            ></textarea>
          </td>
          <td
            style={{
              width: '62pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '9pt',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              과 세
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              10
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              과 세
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              10
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '54pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '45pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '42pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '33pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <textarea
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontSize: '8pt',
                fontFamily: 'Arial',
              }}
            ></textarea>
          </td>
        </tr>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '35pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
          <td
            style={{
              width: '60pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
        </tr>
        <tr style={{ height: '14pt' }}>
          <td
            style={{
              width: '62pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '9pt',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              영세율
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              0
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              의제등
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              0
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
        </tr>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '35pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
          <td
            style={{
              width: '60pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
        </tr>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '57pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <textarea
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontSize: '9pt',
                fontFamily: 'Arial',
              }}
            ></textarea>
          </td>
          <td
            style={{
              width: '62pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '9pt',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              과 세
            </p>
          </td>
          <td
            style={{
              width: '53pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              10
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              과 세
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              10
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '54pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '53pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '45pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '42pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '33pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <textarea
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontSize: '8pt',
                fontFamily: 'Arial',
              }}
            ></textarea>
          </td>
        </tr>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '35pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
          <td
            style={{
              width: '60pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
        </tr>
        <tr style={{ height: '14pt' }}>
          <td
            style={{
              width: '56pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <input
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                fontSize: '9pt',
                fontFamily: 'Arial',
              }}
              type="text"
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              영세율
            </p>
          </td>
          <td
            style={{
              width: '53pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              0
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              의제등
            </p>
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#000',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              0
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
        </tr>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '46pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#000',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
          <td
            style={{
              width: '60pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#000',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
        </tr>
        <tr style={{ height: '13pt' }}>
          <td
            style={{
              width: '127pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            colSpan={2}
          ></td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              과 세
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              10
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              과 세
            </p>
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#ADADAD',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                paddingTop: '1pt',
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              10
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '39pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '2pt',
              borderBottomColor: '#000',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '39pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '2pt',
              borderBottomColor: '#000',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '47pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '2pt',
              borderBottomColor: '#000',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '40pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '2pt',
              borderBottomColor: '#000',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '37pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '2pt',
              borderBottomColor: '#000',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '28pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '2pt',
              borderBottomColor: '#000',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={4}
          >
            <textarea
              className="form-input form-input-text"
              style={{
                width: 'calc(100% - 2pt)',
                height: '40pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontSize: '8pt',
                fontFamily: 'Arial',
              }}
            ></textarea>
          </td>
        </tr>
        <tr style={{ height: '11pt' }}>
          <td
            style={{
              width: '127pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              borderBottomStyle: 'none',
            }}
            rowSpan={2}
            colSpan={2}
          >
            <p
              className="s5"
              style={{ textIndent: '0pt', textAlign: 'center' }}
            >
              합 계
            </p>
          </td>
          <td
            style={{
              width: '46pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
          <td
            style={{
              width: '60pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
        </tr>
        <tr style={{ height: '12pt' }}>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '2pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              영세율
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '2pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              0
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '2pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '2pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            rowSpan={2}
          >
            <p
              className="s5"
              style={{
                textIndent: '0pt',
                textAlign: 'center',
                fontSize: '9pt',
              }}
            >
              의제등
            </p>
          </td>
          <td
            style={{
              width: '70pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '2pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
          <td
            style={{
              width: '35pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              0
            </p>
            <hr
              style={{
                width: '20pt',
                height: '0.3pt',
                background: '#999',
                border: 'none',
                margin: '0 auto',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          </td>
          <td
            style={{
              width: '60pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#000',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '2pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
            rowSpan={2}
          >
            <NumericTextArea
              style={{
                width: 'calc(100% - 2pt)',
                height: '20pt',
                padding: '1pt',
                verticalAlign: 'middle',
                resize: 'none',
                overflowY: 'auto',
                fontFamily: 'Arial',
              }}
            />
          </td>
        </tr>
        <tr style={{ height: '11pt' }}>
          <td
            style={{
              width: '127pt',
              borderBottomStyle: 'solid',
              borderBottomWidth: '2pt',
              borderBottomColor: '#000',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
            colSpan={2}
          ></td>
          <td
            style={{
              width: '35pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '2pt',
              borderBottomColor: '#000',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
          <td
            style={{
              width: '60pt',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#ADADAD',
              borderBottomStyle: 'solid',
              borderBottomWidth: '2pt',
              borderBottomColor: '#000',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#ADADAD',
            }}
          >
            <p
              className="s7"
              style={{
                textIndent: '0pt',
                lineHeight: '10pt',
                textAlign: 'center',
                fontSize: '8pt',
              }}
            >
              100
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
}
