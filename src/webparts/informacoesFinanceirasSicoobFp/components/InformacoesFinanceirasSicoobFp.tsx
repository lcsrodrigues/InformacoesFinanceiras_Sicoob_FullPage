import * as React from 'react';
import { IInformacoesFinanceirasSicoobFpProps } from './IInformacoesFinanceirasSicoobFpProps';
import InformacoesFinanceirasWB from './InformacoesFinanceirasWB/InformacoesFinanceirasWB';

export default class InformacoesFinanceirasSicoobFp extends React.Component<IInformacoesFinanceirasSicoobFpProps, {}> {
  public render(): React.ReactElement<IInformacoesFinanceirasSicoobFpProps> {
    return (
      <div>
        <InformacoesFinanceirasWB />
      </div>
    );
  }
}
