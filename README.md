## SEAP

## Desenvolvendo com Clean Architeture

- Application - Context/Redux
- Views - React-Front
- Infraestrutura - Axios

para gerar o pdf zone

<PDFExport
            avoidLinks={true}
            paperSize="Letter"
            landscape={true}
            margin="2cm"
            ref={pdfExportComponent}
          >
{conteudo / componente}
</PDFExport>

## QUERY


range de data inicial e data final onde

`select * from registrorgbd where posto like ${posto} and DataDeCriacao between ${DataDeCriacaoInicial} and ${DataDeCriacaoFinal} order by DataDeCriacao asc`

`SELECT * from registrorgbd WHERE Status like 'cancelado' DataDeCriacao between ${DataDeCriacaoInicial} and ${DataDeCriacaoFinal} order by DataDeCriacao asc`