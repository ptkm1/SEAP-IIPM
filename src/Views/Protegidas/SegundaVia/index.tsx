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

	const usuario: any = localStorage.getItem('@pml/usuario')
	const usuarioParseado = JSON.parse(usuario)
	const [ dados,setDados ] = useState<any>()

	const history = useHistory()

	const caminho: any = window.location.pathname.split('/')

	useEffect(()=>{

		async function BuscarDados() {

			const { data }: any = await Api.get(`/registro/${caminho[2]}`)

			return setDados( data[0] )
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

	const [Estados, setEstados] = useState<any>([])
	const [Resultado, setResultado] = useState<any>()
	const [ViaSt, setVia] = useState<any>()
	const [IsençaoSt, setIsençao] = useState<any>()

	useEffect(() => {
		async function BuscarEstados() {
			const { data } = await Api.get('/estados')
			setEstados(data)
		}

		if (ViaSt === '1º VIA' || IsençaoSt === 'isento') {
			setResultado('0,00')
		} else {
			setResultado('37,77')
		}

		BuscarEstados()
	}, [Resultado, ViaSt, IsençaoSt])


	return (
		<>
			<Menu />

      <BTNVoltar onClick={ ()=> history.goBack() } >
        <CgArrowLeft size="17px" />
      </BTNVoltar>

			<Container >

				{ dados ? (<form onSubmit={SubmeterDados}>
				<Form>
					<BlocoInputGrande>
						<label htmlFor="rg" >Numero do RG</label>
						<input type="text" id="rg" value={ dados.NRG } ref={ NRG } />
					</BlocoInputGrande>
					<BlocoInputGrande>
						<label htmlFor="via">Via</label>
						<select id="via" value={ dados.Via } ref={Via} onChange={(e) => setVia(e.target.value)}>
								<option value="">Escolha a via</option>
								<option value="1º VIA">1ª VIA</option>
								<option value="2ª VIA">2ª VIA</option>
								<option value="3ª OU MAIS VIAS">3ª OU MAIS VIAS</option>
								<option value="MUDANÇA DE ESTADO CIVIL">MEC</option>
								<option value="RET. JUDICIAL">RET. JUDICIAL</option>
						</select>

					</BlocoInputGrande>
					<BlocoInputGrande>
						<label htmlFor="isenção">Isenção</label>
						<select id="isenção" value={ dados.Isençao } ref={Isençao} onChange={(e) => setIsençao(e.target.value)}>
								<option value="">Situação do pagamento</option>
								<option value="pago">pago</option>
								<option value="isento">isento</option>
							</select>
					</BlocoInputGrande>
					<BlocoInputGrande>
						<label htmlFor="resultado">Resultado</label>

							{/* Verificar esse input de Resultado */}
						<input type="text" id="resultado" value={ dados.Result } ref={ Result } />
					</BlocoInputGrande>
					<div style={{ display: 'flex' }}>
						<BlocoInputGrande>
							<label htmlFor="usuario">Usuario</label>
							<input type="text" id="usuario" ref={ Usuario } value={usuarioParseado.nome} />
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="posto">Posto</label>
							<input type="text" id="posto"  value={dados.Posto} ref={ Posto } />
						</BlocoInputGrande>
					</div>

					<BlocoInputGrande>
						<label htmlFor="nome_completo">Nome Completo</label>
						<input type="text" id="nome_completo" ref={ NomeCompleto } value={usuarioParseado.posto} />
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
						<select id="sexo" value={dados.Sexo} ref={Sexo}>
								<option value="Masculino">Masculino</option>
								<option value="Feminino">Feminino</option>
						</select>

					</BlocoInputGrande>
					<BlocoInputGrande>
						<label htmlFor="instruçao">Instrução</label>
						<select id="instruçao" value={dados.Instruçao} ref={ Instruçao } >
								<option value="">Escolha um valor</option>
								<option value="Rudimentar">Rudimentar</option>
								<option value="Não Alfabetizado">Não Alfabetizado</option>
								<option value="1º Grau incompleto">1º Grau incompleto</option>
								<option value="1º Grau completo">1º Grau completo</option>
								<option value="2º Grau incompleto">2º Grau incompleto</option>
								<option value="2º Grau completo">2º Grau completo</option>
								<option value="Sup. Incompleto">Sup. Incompleto</option>
								<option value="Sup.Completo">Sup.Completo</option>
						</select>
					</BlocoInputGrande>
					<BlocoInputGrande>
						<label htmlFor="profissao">Profissao</label>
						<select id="profissao" value={dados.Profissao} ref={ Profissao } >
								<option value="">Escolha um valor</option>
								<option value="Outros">Outros</option>
								<option value="Advogado">Advogado</option>
								<option value="Agricultor">Agricultor</option>
								<option value="Cozinheiro">Cozinheiro</option>
								<option value="Dona de Casa">Dona de Casa</option>
								<option value="Empregada Doméstica">Empregada Doméstica</option>
								<option value="Estudante">Estudante</option>
						</select>
					</BlocoInputGrande>

					<div style={{ display: 'flex' }}>
						<BlocoInputGrande>
							<label htmlFor="estado_civil">Estado Civil</label>
							<select id="estado_civil" value={dados.EstadoCivil} ref={ EstadoCivil } >
									<option value="">Escolha um valor</option>
									<option value="Solteiro">Solteiro</option>
									<option value="Casado">Casado</option>
									<option value="Divorciado">Divorciado</option>
									<option value="Viuvo4">Viuvo</option>
							</select>
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="certidao">Certidão</label>
							<select id="certidao" value={dados.Certidao} ref={ Certidao } >
									<option value="">Escolha um valor</option>
									<option value="Nasc.">Nascimento</option>
									<option value="Cas.">Casamento</option>
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
									<option value="">Escolha um valor</option>
									<option value="Preto">Preto</option>
									<option value="pardo">Pardo</option>
									<option value="Amarelo">Amarelo</option>
									<option value="branco">Branco</option>
							</select>
						</BlocoInputGrande>

						<BlocoInputGrande>
							<label htmlFor="cor_cabelo">Cor do cabelo</label>
							<select id="cor_cabelo" value={dados.CorCabelo} ref={ CorCabelo } >
									<option value="">Escolha um valor</option>
									<option value="castanhos">Castanhos</option>
									<option value="preto">Preto</option>
									<option value="louro">Louros</option>
									<option value="grisalho">Grisalho</option>
									<option value="ruivos">Ruivos</option>
									<option value="brancos">Brancos</option>
							</select>
						</BlocoInputGrande>
					</Form2L>
					<Form2L>
						<BlocoInputGrande>
							<label htmlFor="tipo_cabelo">Tipo do cabelo</label>
							<select id="tipo_cabelo" value={dados.TipoCabelo} ref={ TipoCabelo } >
									<option value="">Escolha um valor</option>
									<option value="Liso">Liso</option>
									<option value="Ondulado">Ondulado</option>
									<option value="Encaracolado">Encaracolado</option>
									<option value="Crespo">Crespo</option>
							</select>
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="cor_olhos">Cor dos olhos</label>
							<select id="cor_olhos" value={dados.CorOlhos} ref={ CorOlhos } >
									<option value="">Escolha um valor</option>
									<option value="Castanhos">Castanhos</option>
									<option value="Pretos">Pretos</option>
									<option value="Azuis">Azuis</option>
									<option value="Duas Cores">Duas Cores</option>
									<option value="Verdes">Verdes</option>
									<option value="Acizentados">Acizentados</option>
							</select>
						</BlocoInputGrande>

						<BlocoInputGrande>
							<label htmlFor="tipo_olhos">Tipo dos olhos</label>
							<select id="tipo_olhos" value={dados.TipoOlhos} ref={ TipoOlhos } >
									<option value="">Escolha um valor</option>
									<option value="Redondos">Redondos</option>
									<option value="Orientais">Orientais</option>
									<option value="Grandes">Grandes</option>
									<option value="Pequenos">Pequenos</option>
							</select>
						</BlocoInputGrande>

						<BlocoInputGrande>
							<label htmlFor="barba">Barba</label>
							<select id="barba" value={dados.Barba} ref={ Barba } >
									<option value="">Escolha um valor</option>
									<option value="">Em Branco</option>
									<option value="Imberbe">Imberbe</option>
									<option value="Rala">Rala</option>
									<option value="Cheia">Cheia</option>
									<option value="Rapada">Rapada</option>
									<option value="Longa">Longa</option>
							</select>
						</BlocoInputGrande>
					</Form2L>
				</Form2>

				<Form2>
					<Form2X>
						<BlocoInputGrande>
							<label htmlFor="bigode">Bigode</label>
							<select id="bigode" value={dados.Bigode} ref={ Bigode } >
									<option value="">Em Branco</option>
									<option value="Nenhum">Nenhum</option>
									<option value="Fino">Fino</option>
									<option value="Grosso">Grosso</option>
									<option value="Rapado">Rapado</option>
									<option value="Aparado">Aparado</option>
									<option value="Longo">Longo</option>
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
								{Estados.map((e: any) => (
										<option key={e.id} value={e.nome}>
											{e.nome}
										</option>
									))}
							</select>
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="cidade">Cidade</label>
							<select id="cidade" value={dados.Cidade} ref={ Cidade } >
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>
						<div style={{ display: 'flex' }}>
							<BotãoPreto onClick={ ()=> window.print()} > Imprimir </BotãoPreto>
							<BotãoPreto type="submit" > Enviar </BotãoPreto>
						</div>
					</Form2X>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<label htmlFor="observaçao">Observação</label>
						<textarea id="observaçao" value={dados.Observaçao} ref={ Observaçao } />
					</div>
				</Form2>

        </form>) : (<div>Carregando Dados...</div>) }

			</Container>
		</>
	)
}

export default SegundaVia
