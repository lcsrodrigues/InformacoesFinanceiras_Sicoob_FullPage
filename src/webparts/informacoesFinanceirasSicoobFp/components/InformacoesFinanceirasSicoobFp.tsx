import * as React from 'react';
import { IInformacoesFinanceirasSicoobFpProps } from './IInformacoesFinanceirasSicoobFpProps';
import InformacoesFinanceirasWB from './InformacoesFinanceirasWB/InformacoesFinanceirasWB';

export default function InformacoesFinanceirasSicoobFp({ ...props }: IInformacoesFinanceirasSicoobFpProps) {
  return (
    <div>
      <InformacoesFinanceirasWB props={props} />
    </div >
  );
}
