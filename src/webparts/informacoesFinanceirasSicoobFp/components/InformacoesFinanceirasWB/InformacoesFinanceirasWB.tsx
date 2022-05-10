import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './style.module.scss';
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import ptbr from 'date-fns/locale/pt-BR';
registerLocale('ptbr', ptbr);

import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default function InformacoesFinanceirasWB({ props }) {
    const [startDate, setStartDate] = useState(new Date());
    const [oData, oSetData] = useState("");
    const [oResult, setResult] = useState([]);

    // useEffect(() => {
    //     oSetData(startDate.getDate() + "/" + (startDate.getMonth() + 1) + "/" + startDate.getFullYear());
    // }, [startDate]);

    useEffect(() => {
        oSetData(startDate.getDate() + "/" + (startDate.getMonth() + 1) + "/" + startDate.getFullYear());
        getAllInformacoesFinanceiras(null);

    }, []);

    const getAllInformacoesFinanceiras = (date) => {
        setStartDate(date);
        var url =
            "/_api/web/lists/getbytitle('Informacoes Financeiras')/items?" +
            "$top=1&";
        if (date != null) {
            url += "&$orderby=ID asc&$filter=field_1 ge datetime'" + new Date(date).toISOString() + "'";
        }else{
            url += "$orderby=ID desc";
        }

        axios.get("https://crediminas.sharepoint.com/sites/intranet/" + url)
            .then(result => {
                if (result.data.value.length) {
                    setResult(result.data.value);
                } else {
                    setResult([]);
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    const convert = (value) => {
        return value.toString().replace(".", ",");
    };

    const splitNumber = (value) => {
        return value.split(",")[0].replace(".", ",");
    };

    return (
        <div className={styles.informacoesFinanceiras}>
            <div className={styles.filterDate}>
                <div className={styles.filterDateLeft}>
                    <img src={require("images/calendar.png")} />
                    <DatePicker selected={startDate} onChange={(date) => getAllInformacoesFinanceiras(date)} locale="ptbr" />
                </div>
                <div className={styles.filterDateRight}>
                    <strong><span>{oData}</span></strong>
                </div>
            </div>
            {
                oResult.length ?
                    oResult.map(data => {
                        return (
                            <>
                                <div className={styles.boxMercado}> {/* Mercado */}
                                    <div className={styles.boxMercadoHeader}>
                                        <span>MERCADO</span>
                                    </div>
                                    <div className={styles.boxMercadoTarget}>
                                        <div className={styles.boxMercadoTable}>
                                            <div className={styles.boxMercadoTableHeader}>
                                                <span>Taxas Oficiais</span>
                                            </div>
                                            <div className={styles.boxMercadoTableBody}>
                                                <ul>
                                                    <li>
                                                        <div className={styles.boxMercadoTableProduct}>
                                                            <span>SELIC (A.A)</span>
                                                        </div>
                                                        <div className={styles.boxMercadoTableValue}>
                                                            <span>{convert(data.field_2)}%</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className={styles.boxMercadoTableProduct}>
                                                            <span>CDI (A.A)</span>
                                                        </div>
                                                        <div className={styles.boxMercadoTableValue}>
                                                            <span>{convert(data.field_3)}%</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className={styles.boxMercadoTableProduct}>
                                                            <span>POUPANÇA (A.M)</span>
                                                        </div>
                                                        <div className={styles.boxMercadoTableValue}>
                                                            <span>{convert(data.field_4)}%</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className={styles.boxMercadoTableProduct}>
                                                            <span>TR(A.M)</span>
                                                        </div>
                                                        <div className={styles.boxMercadoTableValue}>
                                                            <span>{convert(data.field_5)}%</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className={styles.boxMercadoTableProduct}>
                                                            <span>TBF(A.M)</span>
                                                        </div>
                                                        <div className={styles.boxMercadoTableValue}>
                                                            <span>{convert(data.field_6)}%</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className={styles.boxMercadoTableProduct}>
                                                            <span>TJLP(A.A)</span>
                                                        </div>
                                                        <div className={styles.boxMercadoTableValue}>
                                                            <span>{convert(data.field_7)}%</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className={styles.boxMercadoTableProduct}>
                                                            <span>IPCA(A.A)</span>
                                                        </div>
                                                        <div className={styles.boxMercadoTableValue}>
                                                            <span>{convert(data.field_8)}%</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className={styles.boxMercadoTableProduct}>
                                                            <span>IGPM(A.M)</span>
                                                        </div>
                                                        <div className={styles.boxMercadoTableValue}>
                                                            <span>{convert(data.field_9)}%</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={styles.boxMercadoTable}>
                                            <div className={styles.boxMercadoTable}>
                                                <div className={styles.boxMercadoTableHeader}>
                                                    <span>Câmbio</span>
                                                </div>
                                                <div className={styles.boxMercadoTableBody}>
                                                    <ul>
                                                        <li>
                                                            <div className={styles.boxMercadoTableProduct}>
                                                                <span>DÓLAR VALOR MÊS+1</span>
                                                            </div>
                                                            <div className={styles.boxMercadoTableValue}>
                                                                <span>{splitNumber(formatter.format(parseInt(data.field_23)))}</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className={styles.boxMercadoTableProduct}>
                                                                <span>DÓLAR VALOR MÊS+2</span>
                                                            </div>
                                                            <div className={styles.boxMercadoTableValue}>
                                                                <span>{splitNumber(formatter.format(parseInt(data.field_24)))}</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className={styles.boxMercadoTableProduct}>
                                                                <span>DÓLAR VALOR MÊS+3</span>
                                                            </div>
                                                            <div className={styles.boxMercadoTableValue}>
                                                                <span>{splitNumber(formatter.format(parseInt(data.field_25)))}</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className={styles.boxMercadoTableProduct}>
                                                                <span>DÓLAR VARIAÇÃO MÊS+1</span>
                                                            </div>
                                                            <div className={styles.boxMercadoTableValue}>
                                                                <span>{splitNumber(formatter.format(parseInt(data.field_26)))}</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className={styles.boxMercadoTableProduct}>
                                                                <span>DÓLAR VARIAÇÃO MÊS+2</span>
                                                            </div>
                                                            <div className={styles.boxMercadoTableValue}>
                                                                <span>{splitNumber(formatter.format(parseInt(data.field_27)))}</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className={styles.boxMercadoTableProduct}>
                                                                <span>DÓLAR VARIAÇÃO MÊS+3</span>
                                                            </div>
                                                            <div className={styles.boxMercadoTableValue}>
                                                                <span>{splitNumber(formatter.format(parseInt(data.field_28)))}</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles.boxMercadoTable}>
                                            <div className={styles.boxMercadoTable}>
                                                <div className={styles.boxMercadoTableHeader}>
                                                    <span>Ações</span>
                                                </div>
                                                <div className={styles.boxMercadoTableBody}>
                                                    <ul>
                                                        <li>
                                                            <div className={styles.boxMercadoTableProduct}>
                                                                <span>IBOVESPA</span>
                                                            </div>
                                                            <div className={styles.boxMercadoTableValue}>
                                                                <span>{convert(data.field_13)}%</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className={styles.boxMercadoTableProduct}>
                                                                <span>IBOVESPA (PONTOS)</span>
                                                            </div>
                                                            <div className={styles.boxMercadoTableValue}>
                                                                <span>{convert(data.field_14)}</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className={styles.boxComodities}> {/* Comodities */}
                                    <div className={styles.boxComoditiesHeader}>
                                        <span>COMODITIES</span>
                                    </div>
                                    <div className={styles.boxComoditiesTarget}>
                                        <div className={styles.boxComoditiesTable}>
                                            <div className={styles.boxComoditiesTableHeaderMonth}>
                                                <div className={styles.boxComoditiesTableHeaderTitle}>
                                                </div>
                                                <div className={styles.boxComoditiesTableHeaderTitle}>
                                                    <span>Mes +1</span>
                                                </div>
                                                <div className={styles.boxComoditiesTableHeaderTitle}>
                                                </div>

                                                <div className={styles.boxComoditiesTableHeaderTitle}>
                                                    <span>Mês +2</span>
                                                </div>
                                                <div className={styles.boxComoditiesTableHeaderTitle}>
                                                </div>

                                                <div className={styles.boxComoditiesTableHeaderTitle}>
                                                    <span>Mês +3</span>
                                                </div>
                                                <div className={styles.boxComoditiesTableHeaderTitle}>
                                                </div>
                                            </div>
                                            <div className={styles.boxComoditiesTableHeader}>
                                                <div className={styles.boxComoditiesTableHeaderTitle}>
                                                    <span>Produto</span>
                                                </div>
                                                <div className={styles.boxComoditiesTableHeaderTitle}>
                                                    <span>Valor</span>
                                                </div>
                                                <div className={styles.boxComoditiesTableHeaderTitle}>
                                                    <span>Variação</span>
                                                </div>
                                                <div className={styles.boxComoditiesTableHeaderTitle}>
                                                    <span>Valor</span>
                                                </div>
                                                <div className={styles.boxComoditiesTableHeaderTitle}>
                                                    <span>Variação</span>
                                                </div>
                                                <div className={styles.boxComoditiesTableHeaderTitle}>
                                                    <span>Valor</span>
                                                </div>
                                                <div className={styles.boxComoditiesTableHeaderTitle}>
                                                    <span>Variação</span>
                                                </div>
                                            </div>
                                            <div className={styles.boxComoditiesTableBody}>
                                                <ul>
                                                    <li>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>CAFÉ</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>R$ {convert(data.field_15)}</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>{convert(data.field_18)}%</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>R$ {convert(data.field_16)}</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>{convert(data.field_19)}%</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>R$ {convert(data.field_17)}</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>{convert(data.field_20)}%</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>BOI</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>R$ {convert(data.field_29)}</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>{convert(data.field_32)}%</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>R$ {convert(data.field_30)}</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>{convert(data.field_33)}%</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>R$ {convert(data.field_31)}</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>{convert(data.field_34)}%</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>JUROS_DI</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>R$ {convert(data.field_35)}</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>{convert(data.field_38)}%</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>R$ {convert(data.field_36)}</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>{convert(data.field_39)}%</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>R$ {convert(data.field_37)}</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>{convert(data.field_40)}%</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>MILHO</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>R$ {convert(data.field_41)}</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>{convert(data.field_44)}%</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>R$ {convert(data.field_42)}</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>{convert(data.field_45)}%</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>R$ {convert(data.field_43)}</span>
                                                        </div>
                                                        <div className={styles.boxComoditiesTableValue}>
                                                            <span>{convert(data.field_46)}%</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })
                    :
                    <h1>Sem resultados</h1>
            }
        </div>
    );
}                    