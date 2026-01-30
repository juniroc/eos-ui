import React from 'react';
import {
  Form15Data,
  TaxFreePurchaseAmount,
} from '@/components/taxDocument/template/Form15/types';
import Input from '@/components/taxDocument/template/common/Input';
import NumericInput from '@/components/taxDocument/template/common/NumericInput';

type Props = TaxFreePurchaseAmount & {
  onChange: <K extends keyof Form15Data>(
    field: K,
    value: Form15Data[K]
  ) => void;
};

function TaxFreePurchaseAmountTable({
  summaryTotalSellerCount,
  summaryTotalCount,
  summaryTotalAmt,
  summaryTotalDedRate,
  summaryTotalTaxAmt,

  invoiceSellerCount,
  invoiceCount,
  invoiceAmt,
  invoiceDedRate,
  invoiceTaxAmt,

  cardSellerCount,
  cardCount,
  cardAmt,
  cardDedRate,
  cardTaxAmt,

  farmerSellerCount,
  farmerCount,
  farmerAmt,
  farmerDedRate,
  farmerTaxAmt,

  onChange,
}: Props) {
  return (
    <li data-list-text="2.">
      <h2
        style={{
          paddingTop: '1pt',
          paddingBottom: '1pt',
          paddingLeft: '24pt',
          textIndent: '-15pt',
          textAlign: 'left',
          lineHeight: '150%',
        }}
      >
        면세농산물등 매입가액 합계
      </h2>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '624pt',
          marginLeft: '0pt',
        }}
        cellSpacing="0"
      >
        <tr style={{ height: '16pt' }}>
          <td
            style={{
              width: '150pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              verticalAlign: 'middle',
              display: 'table-cell',
            }}
            colSpan={2}
          >
            <p
              className="s8"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
                margin: '0',
              }}
            >
              구 분
            </p>
          </td>
          <td
            style={{
              width: '67pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              verticalAlign: 'middle',
              display: 'table-cell',
            }}
          >
            <p
              className="s8"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
                margin: '0',
              }}
            >
              ⑤ 매입처 수
            </p>
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              verticalAlign: 'middle',
              display: 'table-cell',
            }}
          >
            <p
              className="s8"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
                margin: '0',
              }}
            >
              ⑥ 건 수
            </p>
          </td>
          <td
            style={{
              width: '83pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              verticalAlign: 'middle',
              display: 'table-cell',
            }}
          >
            <p
              className="s8"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
                margin: '0',
              }}
            >
              ⑦ 매입가액
            </p>
          </td>
          <td
            style={{
              width: '49pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              verticalAlign: 'middle',
              display: 'table-cell',
            }}
          >
            <p
              className="s8"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
                margin: '0',
              }}
            >
              ⑧ 공제율
            </p>
          </td>
          <td
            style={{
              width: '81pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              verticalAlign: 'middle',
              display: 'table-cell',
            }}
          >
            <p
              className="s8"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
                margin: '0',
              }}
            >
              ⑨ 의제매입세액
            </p>
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              width: '150pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              verticalAlign: 'middle',
              display: 'table-cell',
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
                margin: '0',
              }}
            >
              ⑩ 합 계
            </p>
          </td>
          <td
            style={{
              width: '67pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              value={summaryTotalSellerCount}
              onChange={value => onChange('summaryTotalCount', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
              }}
            />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              value={summaryTotalCount}
              onChange={value => onChange('summaryTotalCount', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
              }}
            />
          </td>
          <td
            style={{
              width: '83pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              value={summaryTotalAmt}
              onChange={value => onChange('summaryTotalAmt', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
              }}
            />
          </td>
          <td
            style={{
              width: '49pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <Input
              value={summaryTotalDedRate}
              onChange={value => onChange('summaryTotalDedRate', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
                textAlign: 'center',
              }}
            />
          </td>
          <td
            style={{
              width: '81pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              value={summaryTotalTaxAmt}
              onChange={value => onChange('summaryTotalTaxAmt', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
              }}
            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              width: '73pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              verticalAlign: 'middle',
              display: 'table-cell',
            }}
            rowSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                paddingRight: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
                margin: '0',
              }}
            >
              사업자로부터의
              <br />매 입 분
            </p>
          </td>
          <td
            style={{
              width: '77pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '1pt',
                paddingLeft: '3pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ⑪ 계 산 서
            </p>
          </td>
          <td
            style={{
              width: '67pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              value={invoiceSellerCount}
              onChange={value => onChange('invoiceSellerCount', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
              }}
            />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              value={invoiceCount}
              onChange={value => onChange('invoiceCount', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
              }}
            />
          </td>
          <td
            style={{
              width: '83pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              value={invoiceAmt}
              onChange={value => onChange('invoiceAmt', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
              }}
            />
          </td>
          <td
            style={{
              width: '49pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <Input
              value={invoiceDedRate}
              onChange={value => onChange('invoiceDedRate', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
                textAlign: 'center',
              }}
            />
          </td>
          <td
            style={{
              width: '81pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              value={invoiceTaxAmt}
              onChange={value => onChange('invoiceTaxAmt', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
              }}
            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              width: '77pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
            }}
          >
            <p
              className="s4"
              style={{
                paddingTop: '1pt',
                paddingLeft: '3pt',
                textIndent: '0pt',
                textAlign: 'left',
              }}
            >
              ⑫ 신용카드 등
            </p>
          </td>
          <td
            style={{
              width: '67pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              value={cardSellerCount}
              onChange={value => onChange('cardSellerCount', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
              }}
            />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              value={cardCount}
              onChange={value => onChange('cardCount', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
              }}
            />
          </td>
          <td
            style={{
              width: '83pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              value={cardAmt}
              onChange={value => onChange('cardAmt', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
              }}
            />
          </td>
          <td
            style={{
              width: '49pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <Input
              value={cardDedRate}
              onChange={value => onChange('cardDedRate', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
                textAlign: 'center',
              }}
            />
          </td>
          <td
            style={{
              width: '81pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderBottomColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              value={cardTaxAmt}
              onChange={value => onChange('cardTaxAmt', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
              }}
            />
          </td>
        </tr>
        <tr style={{ height: '15pt' }}>
          <td
            style={{
              width: '150pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              verticalAlign: 'middle',
              display: 'table-cell',
            }}
            colSpan={2}
          >
            <p
              className="s4"
              style={{
                paddingTop: '0pt',
                paddingLeft: '0pt',
                textIndent: '0pt',
                textAlign: 'center',
                margin: '0',
              }}
            >
              ⑬ 농어민 등으로부터의 매입분
            </p>
          </td>
          <td
            style={{
              width: '67pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              value={farmerSellerCount}
              onChange={value => onChange('farmerSellerCount', value)}
              style={{
                width: ' ',
                height: 'calc(100% - 2pt)',
              }}
            />
          </td>
          <td
            style={{
              width: '52pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              value={farmerCount}
              onChange={value => onChange('farmerCount', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
              }}
            />
          </td>
          <td
            style={{
              width: '83pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              value={farmerAmt}
              onChange={value => onChange('farmerAmt', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
              }}
            />
          </td>
          <td
            style={{
              width: '49pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              borderRightStyle: 'solid',
              borderRightWidth: '1pt',
              borderRightColor: '#7E7E7E',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <Input
              value={farmerDedRate}
              onChange={value => onChange('farmerDedRate', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
                textAlign: 'center',
              }}
            />
          </td>
          <td
            style={{
              width: '81pt',
              borderTopStyle: 'solid',
              borderTopWidth: '1pt',
              borderTopColor: '#7E7E7E',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1pt',
              borderLeftColor: '#7E7E7E',
              borderBottomStyle: 'solid',
              borderBottomWidth: '1pt',
              padding: '1pt',
              verticalAlign: 'middle',
            }}
          >
            <NumericInput
              value={farmerTaxAmt}
              onChange={value => onChange('farmerTaxAmt', value)}
              style={{
                width: 'calc(100% - 2pt)',
                height: 'calc(100% - 2pt)',
              }}
            />
          </td>
        </tr>
      </table>
      <p
        style={{
          textIndent: '0pt',
          textAlign: 'left',
          height: '5pt',
          margin: '0pt',
          padding: '0pt',
          lineHeight: '5pt',
        }}
      >
        <br />
      </p>
      <hr
        style={{
          width: '624pt',
          border: 'none',
          borderTop: '1pt solid #000',
          margin: '0',
          padding: '0',
        }}
      />
    </li>
  );
}

export default TaxFreePurchaseAmountTable;
