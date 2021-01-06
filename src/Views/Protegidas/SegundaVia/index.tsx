import React, { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { CgArrowLeft } from "react-icons/cg";
import { useHistory } from 'react-router-dom';
import { BotãoPreto } from '../../../App/Componentes/Botoes/Botoes.Styled';
import { BTNVoltar } from '../../../App/Componentes/Botoes/BotoesVoltar.Styled';
import { BlocoInputGrande } from '../../../App/Componentes/Inputs/Inputs.Styled';
import Menu from '../../../App/Componentes/Menu';
import {
	Container,
	Form,
	Form2,
	Form2L,
	Form2R,
	Form2X
} from '../../../App/Styles/FormTemplate.Styled';
import Api from '../../../Infra/Servicos/Api';

const SegundaVia: React.FC = () => {

	const [ dados,setDados ] = useState<any>()

	const history = useHistory()

	const caminho: any = window.location.pathname.split('/')

	useEffect(()=>{

		async function BuscarDados() {

			const { data }: any = await Api.get(`/registro/${caminho[2]}`)

			return setDados( data[0] )
		}

		if(!caminho[2]) {
			return history.replace('/')
		}

		BuscarDados()
	},[])

	// UseRefs
		const NRG:any = useRef<HTMLInputElement>()
		const Via:any = useRef<HTMLInputElement>()
		const Isençao:any = useRef<HTMLInputElement>()
		const Result:any = useRef<HTMLInputElement>()
		const Usuario:any = useRef<HTMLInputElement>()
		const Posto:any = useRef<HTMLInputElement>()
		const NomeCompleto:any = useRef<HTMLInputElement>()
		const NomePai:any = useRef<HTMLInputElement>()
		const NomeMae:any = useRef<HTMLInputElement>()
		const DataNasc:any = useRef<HTMLInputElement>()
		const Cpf:any = useRef<HTMLInputElement>()
		const Pis:any = useRef<HTMLInputElement>()
		const Tel:any = useRef<HTMLInputElement>()
		const Sexo:any = useRef<HTMLInputElement>()
		const Instruçao:any = useRef<HTMLInputElement>()
		const Profissao:any = useRef<HTMLInputElement>()
		const EstadoCivil:any = useRef<HTMLInputElement>()
		const Certidao:any = useRef<HTMLInputElement>()
		const Comarca:any = useRef<HTMLInputElement>()
		const Distrito:any = useRef<HTMLInputElement>()
		const Livro:any = useRef<HTMLInputElement>()
		const Folha:any = useRef<HTMLInputElement>()
		const Termo:any = useRef<HTMLInputElement>()
		const DataRegistro:any = useRef<HTMLInputElement>()
		const DataCertidao:any = useRef<HTMLInputElement>()
		const Altura:any = useRef<HTMLInputElement>()
		const Cutis:any = useRef<HTMLInputElement>()
		const CorCabelo:any = useRef<HTMLInputElement>()
		const TipoCabelo:any = useRef<HTMLInputElement>()
		const CorOlhos:any = useRef<HTMLInputElement>()
		const TipoOlhos:any = useRef<HTMLInputElement>()
		const Barba:any = useRef<HTMLInputElement>()
		const Bigode:any = useRef<HTMLInputElement>()
		const Numero:any = useRef<HTMLInputElement>()
		const Endereco:any = useRef<HTMLInputElement>()
		const Complemento:any = useRef<HTMLInputElement>()
		const Bairro:any = useRef<HTMLInputElement>()
		const Cep:any = useRef<HTMLInputElement>()
		const Estado:any = useRef<HTMLInputElement>()
		const Cidade:any = useRef<HTMLInputElement>()
		const Observaçao:any = useRef<HTMLInputElement>()


	const SubmeterDados = useCallback( async ( e: FormEvent ) => {
		e.preventDefault()

		const obj = {
			NRG: NRG.current?.value,
			Via: Via.current?.value,
			Isençao: Isençao.current?.value,
			Result: Result.current?.value,
			Usuario: Usuario.current?.value,
			Posto: Posto.current?.value,
			NomeCompleto: NomeCompleto.current?.value,
			NomePai: NomePai.current?.value,
			NomeMae: NomeMae.current?.value,
			DataNasc: DataNasc.current?.value,
			Cpf: Cpf.current?.value,
			Pis: Pis.current?.value,
			Tel: Tel.current?.value,
			Sexo: Sexo.current?.value,
			Instruçao: Instruçao.current?.value,
			Profissao: Profissao.current?.value,
			EstadoCivil: EstadoCivil.current?.value,
			Certidao: Certidao.current?.value,
			Comarca: Comarca.current?.value,
			Distrito: Distrito.current?.value,
			Livro: Livro.current?.value,
			Termo: Termo.current?.value,
			DataRegistro: DataRegistro.current?.value,
			DataCertidao: DataCertidao.current?.value,
			Altura: Altura.current?.value,
			Cutis: Cutis.current?.value,
			CorCabelo: CorCabelo.current?.value,
			CorOlhos: CorOlhos.current?.value,
			TipoOlhos: TipoOlhos.current?.value,
			Barba: Barba.current?.value,
			Bigode: Bigode.current?.value,
			Numero: Numero.current?.value,
			Endereco: Endereco.current?.value,
			Complemento: Complemento.current?.value,
			Bairro: Bairro.current?.value,
			Cep: Cep.current?.value,
			Estado: Estado.current?.value,
			Cidade: Cidade.current?.value,
			Observaçao: Observaçao.current?.value }

		const { data } = await Api.post('/registrorgbd', obj)

	},[])


	return (
		<>
			<Menu />

      <BTNVoltar onClick={ ()=> history.goBack() } >
        <CgArrowLeft size="17px" />
      </BTNVoltar>


			<Container id="conteudos" className="scrollPage">

      <form onSubmit={SubmeterDados}>
				<Form>
					<BlocoInputGrande>
						<label htmlFor="rg" >Numero do RG</label>
						<input type="text" id="rg" value={dados.NRG} ref={ NRG } />
					</BlocoInputGrande>
					<BlocoInputGrande>
						<label htmlFor="via">Via</label>
						<input type="text" id="via" value={dados.Via} ref={ Via } />
					</BlocoInputGrande>
					<BlocoInputGrande>
						<label htmlFor="isenção">Isenção</label>
						<select id="isenção" value={dados.Isençao} ref={ Isençao } >
							<option value="0">Escolha um valor</option>
						</select>
					</BlocoInputGrande>
					<BlocoInputGrande>
						<label htmlFor="resultado">Resultado</label>
						<input type="text" id="resultado" value={dados.Result} ref={ Result } />
					</BlocoInputGrande>
					<div style={{ display: 'flex' }}>
						<BlocoInputGrande>
							<label htmlFor="usuario">Usuario</label>
							<input type="text" id="usuario" value={dados.Usuario} ref={ Usuario }  />
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="posto">Posto</label>
							<input type="text" id="posto"  value={dados.Posto} ref={ Posto } />
						</BlocoInputGrande>
					</div>

					<BlocoInputGrande>
						<label htmlFor="nome_completo">Nome Completo</label>
						<input type="text" id="nome_completo" value={dados.NomeCompleto} ref={ NomeCompleto } />
					</BlocoInputGrande>
					<BlocoInputGrande>
						<label htmlFor="nome_pai">Nome do pai</label>
						<input type="text" id="nome_pai" value={dados.NomePai} ref={ NomePai } />
					</BlocoInputGrande>
					<BlocoInputGrande>
						<label htmlFor="nome_mae">Nome da mãe</label>
						<input type="text" id="nome_mae" value={dados.NomeMae} ref={ NomeMae } />
					</BlocoInputGrande>

					<BlocoInputGrande>
						<label htmlFor="data_nascimento">Data de Nascimento</label>
						<input type="date" id="data_nascimento" value={dados.DataNasc} ref={ DataNasc } />
					</BlocoInputGrande>

					<div style={{ display: 'flex' }}>
						<BlocoInputGrande>
							<label htmlFor="cpf">CPF</label>
							<input type="text" id="cpf" value={dados.Cpf} ref={ Cpf } />
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="pis">PIS</label>
							<input type="text" id="pis" value={dados.Pis} ref={ Pis } />
						</BlocoInputGrande>
					</div>

					<BlocoInputGrande>
						<label htmlFor="telefone">Telefone</label>
						<input type="text" id="telefone" value={dados.Tel} ref={ Tel } />
					</BlocoInputGrande>
					<BlocoInputGrande>
						<label htmlFor="sexo">Sexo</label>
						<input type="text" id="sexo" value={dados.Sexo} ref={ Sexo } />
					</BlocoInputGrande>
					<BlocoInputGrande>
						<label htmlFor="instruçao">Instrução</label>
						<select id="instruçao" value={dados.Instruçao} ref={ Instruçao } >
							<option value="0">Escolha um valor</option>
						</select>
					</BlocoInputGrande>
					<BlocoInputGrande>
						<label htmlFor="profissao">Profissao</label>
						<select id="profissao" value={dados.Profissao} ref={ Profissao } >
							<option value="0">Escolha um valor</option>
						</select>
					</BlocoInputGrande>

					<div style={{ display: 'flex' }}>
						<BlocoInputGrande>
							<label htmlFor="estado_civil">Estado Civil</label>
							<select id="estado_civil" value={dados.EstadoCivil} ref={ EstadoCivil } >
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="certidao">Certidão</label>
							<select id="certidao" value={dados.Certidao} ref={ Certidao } >
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>
					</div>
				</Form>

				<Form2>
					<Form2L>
						<BlocoInputGrande>
							<label htmlFor="comarca">Comarca</label>
							<input type="text" id="comarca" value={dados.Comarca} ref={ Comarca } />
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="distrito">Distrito</label>
							<input type="text" id="distrito" value={dados.Distrito} ref={ Distrito } />
						</BlocoInputGrande>

						<BlocoInputGrande>
							<label htmlFor="livro">Livro</label>
							<input type="text" id="livro" value={dados.Livro} ref={ Livro } />
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="folha">Folha</label>
							<input type="text" id="folha" value={dados.Folha} ref={ Folha } />
						</BlocoInputGrande>
					</Form2L>
					<Form2R>
						<BlocoInputGrande>
							<label htmlFor="termo">Termo</label>
							<input type="text" id="termo" value={dados.Termo} ref={ Termo } />
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="data_registro">Data de Registro</label>
							<input type="date" id="data_registro" value={dados.DataRegistro} ref={ DataRegistro } />
						</BlocoInputGrande>
					</Form2R>
				</Form2>

				<Form2>
					<Form2L>
						<BlocoInputGrande>
							<label htmlFor="data_certidao">Data de Certidão</label>
							<input type="date" id="data_certidao" value={dados.DataCertidao} ref={ DataCertidao } />
						</BlocoInputGrande>

						<BlocoInputGrande>
							<label htmlFor="altura">Altura</label>
							<input type="text" id="altura" value={dados.Altura} ref={ Altura } />
						</BlocoInputGrande>

						<BlocoInputGrande>
							<label htmlFor="cutis">Cutis</label>
							<select id="cutis" value={dados.Cutis} ref={ Cutis } >
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>

						<BlocoInputGrande>
							<label htmlFor="cor_cabelo">Cor do cabelo</label>
							<select id="cor_cabelo" value={dados.CorCabelo} ref={ CorCabelo } >
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>
					</Form2L>
					<Form2L>
						<BlocoInputGrande>
							<label htmlFor="tipo_cabelo">Tipo do cabelo</label>
							<select id="tipo_cabelo" value={dados.TipoCabelo} ref={ TipoCabelo } >
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="cor_olhos">Cor dos olhos</label>
							<select id="cor_olhos" value={dados.CorOlhos} ref={ CorOlhos } >
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>

						<BlocoInputGrande>
							<label htmlFor="tipo_olhos">Tipo dos olhos</label>
							<select id="tipo_olhos" value={dados.TipoOlhos} ref={ TipoOlhos } >
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>

						<BlocoInputGrande>
							<label htmlFor="barba">Barba</label>
							<select id="barba" value={dados.Barba} ref={ Barba } >
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>
					</Form2L>
				</Form2>

				<Form2>
					<Form2X>
						<BlocoInputGrande>
							<label htmlFor="bigode">Bigode</label>
							<select id="bigode" value={dados.Bigode} ref={ Bigode } >
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="cor_olhos">Cor dos olhos</label>
							<select id="cor_olhos">
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>
						<div style={{ display: 'grid', gridTemplateColumns: '1fr 5fr' }}>
							<BlocoInputGrande>
								<label htmlFor="numero">Nº</label>
								<input type="text" id="numero" value={dados.Numero} ref={ Numero } />
							</BlocoInputGrande>

							<BlocoInputGrande>
								<label htmlFor="endereco">Endereço</label>
								<input type="text" id="endereco" value={dados.Endereco} ref={ Endereco } />
							</BlocoInputGrande>
						</div>
					</Form2X>

					<Form2R>
						<BlocoInputGrande>
							<label htmlFor="complemento">Complemento</label>
							<input type="text" id="complemento" value={dados.Complemento} ref={ Complemento } />
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="bairro">Bairro</label>
							<input type="text" id="bairro" value={dados.Bairro} ref={ Bairro } />
						</BlocoInputGrande>
					</Form2R>

					<Form2X>
						<BlocoInputGrande>
							<label htmlFor="cep">CEP</label>
							<input type="text" id="cep" value={dados.Cep} ref={ Cep } />
						</BlocoInputGrande>

						<BlocoInputGrande>
							<label htmlFor="estado">Estado</label>
							<select id="estado" value={dados.Estado} ref={ Estado } >
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="cidade">Cidade</label>
							<select id="cidade" value={dados.Cidade} ref={ Cidade } >
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>
						<div style={{ display: 'flex' }}>
							<BotãoPreto> Imprimir </BotãoPreto>
							<BotãoPreto type="submit" > Enviar </BotãoPreto>
						</div>
					</Form2X>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<label htmlFor="observaçao">Observação</label>
						<textarea id="observaçao" value={dados.Observaçao} ref={ Observaçao } />
					</div>
				</Form2>

        </form>
			</Container>
		</>
	)
}

export default SegundaVia
