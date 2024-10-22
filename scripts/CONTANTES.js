export const CYCLE_TIME_235 =
{
    'CBS':[
        { valor: 47.5, multiplicador: 1, legenda: '1 Pessoa' },
        { valor: 26.5, multiplicador: 2, legenda: '2 Pessoas' }
    ],
    'J/Y-ジョイントヨク':[
        { valor: 23.5, multiplicador: 1, legenda: '1 Pessoa' },
        { valor: 20.3, multiplicador: 2, legenda: '2 Pessoas' }
    ],
    'J/A-ジョイントサブASSY':[
        { valor: 19.5, multiplicador: 2, legenda: '2 Máquinas' },
        { valor: 17, multiplicador: 2, legenda: '3 Máquinas' }
    ],
    'F/Y-フランジヨク':[
        { valor: 22.5, multiplicador: 1, legenda: '1 Pessoa' },
        { valor: 17.5, multiplicador: 2, legenda: '2 Pessoas' }
    ],
    'F/A-フランジサブ ASSY:[
        { valor: 39, multiplicador: 1, legenda: 'T4D' },
        { valor: 21, multiplicador: 2, legenda: 'T4V' }
    ],
    'コンパニオン':[
        { valor: 45, multiplicador: 1, legenda: '1 Pessoa' }
    ]
}
export const DESCRICAO_TABELA_1 = [
    {
        numero: "②",
        japones: "生産台数 (台)",
        portugues: "Qtd. de Prod. (U)",
        id: "tabProducaoDoDia"
    },
    {
        numero: "③",
        japones: "生産数 × NMCT (H)",
        portugues: "N⁰ de Unid. Prod. × NMCT (H)",
        id: "tabTempoLinhaIdeal"
    },
    {
        numero: "④",
        japones: "稼働時間 (H)",
        portugues: "Tempo de Funcionamento (H)",
        id: "tabTempoLinhaReal"
    },
    {
        numero: "⑤",
        japones: "可動率 (%)",
        portugues: "Taxa de operação (%)",
        id: "tabPctTempoLinhaReal"
    },
    {
        numero: "⑥",
        japones: "不良数 (台)",
        portugues: "Número de defeitos (U)",
        id: "tabPecaComDefeito"
    },
    {
        numero: "⑦",
        japones: "直行率 (%)",
        portugues: "Taxa de Aceitação Direta (%)",
        id: "tabPctPecaSemDefeito"
    },
    {
        numero: "⑧",
        japones: "H当り出来高 (台)",
        portugues: "Produção por hora (U)",
        id: "tabMediaPorHora"
    },
    {
        numero: "⑨",
        japones: "投入工数 (H)",
        portugues: "Mão de obra utilizada (H)",
        id: "tabTempoAcumulativoPorPessoa"
    }
]
export const FIELDSET_CLASS = "teste"