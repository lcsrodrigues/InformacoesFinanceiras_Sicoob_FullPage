import * as React from 'react';
import { useState } from 'react';
import styles from './style.module.scss';
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ptbr from 'date-fns/locale/pt-BR';
registerLocale('ptbr', ptbr)

import "react-datepicker/dist/react-datepicker.css";

export default function InformacoesFinanceirasWB() {
    const [startDate, setStartDate] = useState(new Date());
    const [oData] = useState(0);
    return (
        <div className={styles.informacoesFinanceiras}>
            <div className={styles.filterDate}>
                <div className={styles.filterDateLeft}>
                    <img src={require("images/calendar.png")} />
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} locale="ptbr" />
                </div>
                <div className={styles.filterDateRight}>
                    <span>{oData}</span>
                </div>
            </div>

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
                                {
                                    [1, 2, 3, 4, 5, 6].map(function (c) {
                                        return (
                                            <li>
                                                <div className={styles.boxMercadoTableProduct}>
                                                    <span>Selic (a.a)</span>
                                                </div>
                                                <div className={styles.boxMercadoTableValue}>
                                                    <span>R$ 5.4584</span>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
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
                                    {
                                        [1, 2, 3, 4].map(function (c) {
                                            return (
                                                <li>
                                                    <div className={styles.boxMercadoTableProduct}>
                                                        <span>Selic (a.a)</span>
                                                    </div>
                                                    <div className={styles.boxMercadoTableValue}>
                                                        <span>R$ 5.4584</span>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
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
                                    {
                                        [1, 2].map(function (c) {
                                            return (
                                                <li>
                                                    <div className={styles.boxMercadoTableProduct}>
                                                        <span>Selic (a.a)</span>
                                                    </div>
                                                    <div className={styles.boxMercadoTableValue}>
                                                        <span>R$ 5.4584</span>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
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
                                {
                                    [1, 2, 3, 4, 5, 6].map(function (c) {
                                        return (
                                            <li>
                                                <div className={styles.boxComoditiesTableValue}>
                                                    <span>Café</span>
                                                </div>

                                                <div className={styles.boxComoditiesTableValue}>
                                                    <span>R$ 5.4584</span>
                                                </div>
                                                <div className={styles.boxComoditiesTableValue}>
                                                    <span>R$ 4.4584</span>
                                                </div>

                                                <div className={styles.boxComoditiesTableValue}>
                                                    <span>R$ 5.4584</span>
                                                </div>
                                                <div className={styles.boxComoditiesTableValue}>
                                                    <span>R$ 4.4584</span>
                                                </div>

                                                <div className={styles.boxComoditiesTableValue}>
                                                    <span>R$ 5.4584</span>
                                                </div>
                                                <div className={styles.boxComoditiesTableValue}>
                                                    <span>R$ 4.4584</span>
                                                </div>

                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}