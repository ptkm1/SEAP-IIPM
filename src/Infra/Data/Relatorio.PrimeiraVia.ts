import { PrimeiraVia } from "./IPrimeiraVia";

const ExportarExcel = (exportData: any) => [
  {
    columns: [
        {title: "ID", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "RG", style: {font: {sz: "18", bold: true}}, width: {wch: 30}}, // width in characters
        {title: "Via", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Isenção", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Valor", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}},
        {title: "Usuario", style: {font: {sz: "18", bold: true}}, width: {wpx: 100}}, // width in pixels
        {title: "Posto", style: {font: {sz: "18", bold: true}}, width: {wpx: 100}}, // width in pixels
        {title: "Nome", style: {font: {sz: "18", bold: true}}, width: {wch: 30}}, // width in characters
        {title: "Nome do Pai", style: {font: {sz: "18", bold: true}}, width: {wpx: 100}}, // width in pixels
        {title: "Nome da Mãe", style: {font: {sz: "18", bold: true}}, width: {wpx: 100}}, // width in pixels
        {title: "Data de Nascimento", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Estado De Naturalidade", style: {font: {sz: "18", bold: true}}, width: {wch: 30}}, // width in characters
        {title: "Cidade de Naturalidade", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Telefone", style: {font: {sz: "18", bold: true}}, width: {wpx: 110}}, // width in pixels
        {title: "Sexo", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Instrução", style: {font: {sz: "18", bold: true}}, width: {wch: 30}}, // width in characters
        {title: "CPF", style: {font: {sz: "18", bold: true}}, width: {wpx: 100}}, // width in pixels
        {title: "PIS", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Profissão", style: {font: {sz: "18", bold: true}}, width: {wpx: 100}}, // width in pixels
        {title: "Estado Civíl", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Certidão", style: {font: {sz: "18", bold: true}}, width: {wch: 30}}, // width in characters
        {title: "Comarca", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Distrito", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Livro", style: {font: {sz: "18", bold: true}}, width: {wpx: 110}}, // width in pixels
        {title: "Folha", style: {font: {sz: "18", bold: true}}, width: {wpx: 110}}, // width in pixels
        {title: "Termo", style: {font: {sz: "18", bold: true}}, width: {wpx: 110}}, // width in pixels
        {title: "Data de Registro", style: {font: {sz: "18", bold: true}}, width: {wpx: 110}}, // width in pixels
        {title: "Data de Certidão", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Altura", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Cutis", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Cor do Cabelo", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Cor dos olhos", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Tipo dos Olhos", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Barba", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Bigode", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Anomalias", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Endereço Residencial", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Nº", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Complemento", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Bairro", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "CEP", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Estado Residencial", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Cidade Residencial", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Observação", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "Nº da ficha", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
        {title: "?", style: {font: {sz: "18", bold: true}}, width: {wpx: 125}}, // width in pixels
    ],
    data: exportData.map((data: PrimeiraVia) => [
        {value: data.id, style: {font: {sz: "14"}}},
        {value: data.NRG, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.Via, style: {font: {sz: "14"}}},
        {value: data.Isençao, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.Result, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "ed14f5"}}}},
        {value: data.Usuario, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "3461eb"}}}},
        {value: data.Posto, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.NomeCompleto, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.NomePai, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.NomeMae, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.DataNasc, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.EstadoDeNaturalidade, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.CidadeDeNaturalidade, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.Tel, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "ebc907"}}}},
        {value: data.Sexo, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "ed14f5"}}}},
        {value: data.Instruçao, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.Cpf, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.Pis, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.Profissao, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.EstadoCivil, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.Certidao, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.Comarca, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.Distrito, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.Livro, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.Folha, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.Termo, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "4bd909"}}}},
        {value: data.DataRegistro, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.DataCertidao, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.Altura, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.Cutis, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.CorCabelo, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.CorOlhos, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.TipoOlhos, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "eb1207"}}}},
        {value: data.Barba, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.Bigode, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.Anomalias, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.Endereco, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.Numero, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},            
        {value: data.Complemento, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.Bairro, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.Cep, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.EstadoReside, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.CidadeReside, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.Status, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "35bdb4"}}}},
        {value: data.Observaçao, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
        {value: data.NumeroDaFicha, style:{font: {color: {rgb: "ffffff"}}, fill: {patternType: "solid", fgColor: {rgb: "000000"}}}},
    ])
}
]


export default ExportarExcel