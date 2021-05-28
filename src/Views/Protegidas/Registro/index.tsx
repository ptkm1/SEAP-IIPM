import axios from 'axios';
import React, { FormEvent, useCallback, useContext, useEffect, useRef, useState } from 'react';
//Icones
import { CgArrowLeft } from 'react-icons/cg';
import { MdAssignmentTurnedIn } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { isArrayLiteralExpression } from 'typescript';
//Componentes e Styleds
import { BotãoPreto } from '../../../App/Componentes/Botoes/Botoes.Styled';
import { BTNVoltar } from '../../../App/Componentes/Botoes/BotoesVoltar.Styled';
import Camera from '../../../App/Componentes/Camera';
import { BlocoInputGrande } from '../../../App/Componentes/Inputs/Inputs.Styled';
import Menu from '../../../App/Componentes/Menu';
import { RegistroContext } from '../../../App/Contexts/RegistroRGBD';
import { Container, Form, Form2, Form2L, Form2R, Form2X } from '../../../App/Styles/FormTemplate.Styled';
import Api from '../../../Infra/Servicos/Api';

const Registro: React.FC = () => {
	const usuario: any = localStorage.getItem('@pml/usuario');
	const usuarioParseado = JSON.parse(usuario);

	const { imagemRegistro, setImagemRegistro } = useContext(RegistroContext);

	const [ sexo,setSexo ]: any = useState()

	
	console.log(imagemRegistro)
	const history = useHistory();

	// UseRefs
	const NRG: any = useRef<HTMLInputElement>();
	const Via: any = useRef<HTMLInputElement>();
	const Isençao: any = useRef<HTMLInputElement>();
	const Result: any = useRef<HTMLInputElement>();
	const Usuario: any = useRef<HTMLInputElement>();
	const Posto: any = useRef<HTMLInputElement>();
	const NomeCompleto: any = useRef<HTMLInputElement>();
	const NomePai: any = useRef<HTMLInputElement>();
	const NomeMae: any = useRef<HTMLInputElement>();
	const DataNasc: any = useRef<HTMLInputElement>();
	const Cpf: any = useRef<HTMLInputElement>();
	const Pis: any = useRef<HTMLInputElement>();
	const Tel: any = useRef<HTMLInputElement>();
	const Sexo: any = useRef<HTMLInputElement>();
	const Instruçao: any = useRef<HTMLInputElement>();
	const Profissao: any = useRef<HTMLInputElement>();
	const EstadoCivil: any = useRef<HTMLInputElement>();
	const Certidao: any = useRef<HTMLInputElement>();
	const Comarca: any = useRef<HTMLInputElement>();
	const Distrito: any = useRef<HTMLInputElement>();
	const Livro: any = useRef<HTMLInputElement>();
	const Folha: any = useRef<HTMLInputElement>();
	const Termo: any = useRef<HTMLInputElement>();
	const DataRegistro: any = useRef<HTMLInputElement>();
	const DataCertidao: any = useRef<HTMLInputElement>();
	const Altura: any = useRef<HTMLInputElement>();
	const Cutis: any = useRef<HTMLInputElement>();
	const CorCabelo: any = useRef<HTMLInputElement>();
	const TipoCabelo: any = useRef<HTMLInputElement>();
	const CorOlhos: any = useRef<HTMLInputElement>();
	const TipoOlhos: any = useRef<HTMLInputElement>();
	const Barba: any = useRef<HTMLInputElement>();
	const Bigode: any = useRef<HTMLInputElement>();
	const Anomalias: any = useRef<HTMLInputElement>();
	const Numero: any = useRef<HTMLInputElement>();
	const Endereco: any = useRef<HTMLInputElement>();
	const Complemento: any = useRef<HTMLInputElement>();
	const Bairro: any = useRef<HTMLInputElement>();
	const Cep: any = useRef<HTMLInputElement>();
	const Estado: any = useRef<HTMLInputElement>();
	const Cidade: any = useRef<HTMLInputElement>();
	const EstadoNaturalidade: any = useRef<HTMLInputElement>();
	const CidadeNaturalidade: any = useRef<HTMLInputElement>();
	const NumeroDaFicha: any = useRef<HTMLInputElement>();
	const Observaçao: any = useRef<HTMLInputElement>();

	const SubmeterDados = useCallback(async (e: FormEvent) => {
		e.preventDefault();

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
			Anomalias: Anomalias.current?.value,
			Numero: Numero.current?.value,
			Endereco: Endereco.current?.value,
			Complemento: Complemento.current?.value,
			Bairro: Bairro.current?.value,
			Cep: Cep.current?.value,
			EstadoReside: Estado.current?.value,
			CidadeReside: Cidade.current?.value,
			EstadoDeNaturalidade: EstadoNaturalidade.current?.value,
			CidadeDeNaturalidade: CidadeNaturalidade.current?.value, 
			Observaçao: Observaçao.current?.value,
			Foto3x4: imagemRegistro,
			NumeroDaFicha: NumeroDaFicha.current?.value,
			Folha: Folha.current?.value
		};

		const { data } = await Api.post('/registrorgbd', obj);

		alert(data.mensagem);
	}, []);

	const [Estados, setEstados] = useState<any>([]);
	const [Cidades, setCidades] = useState<any>([]);
	const [IdCidade, setIdCidade] = useState<any>();

	const [EstadosNaturalidade, setEstadosNaturalidade] = useState<any>([]);
	const [CidadesNaturalidade, setCidadesNaturalidade] = useState<any>([]);
	const [IdCidadeNaturalidade, setIdCidadeNaturalidade] = useState<any>();


	const [Resultado, setResultado] = useState<any>();
	const [ViaSt, setVia] = useState<any>();
	const [IsençaoSt, setIsençao] = useState<any>();

	// const [modal, setModal] = useState<boolean>(false);
	const { setModal, modal } = useContext(RegistroContext)

	useEffect(() => {
		async function BuscarEstados() {
			const { data } = await axios.get('https://br-cidade-estado-nodejs.glitch.me/estados');
			setEstados(data);
		}
		async function BuscarEstadosN() {
			const { data } = await axios.get('https://br-cidade-estado-nodejs.glitch.me/estados');
			setEstadosNaturalidade(data);
		}

		if (ViaSt === '1º VIA' || IsençaoSt === 'isento') {
			setResultado('0,00');
		} else {
			setResultado('39,39');
		}

		BuscarEstadosN();
		BuscarEstados();
	}, [Resultado, ViaSt, IsençaoSt]);

	async function BuscarCidade() {
		const { data } = await axios.get(`https://br-cidade-estado-nodejs.glitch.me/estados/${IdCidade}/cidades`);
		setCidades(data);
	}

	async function BuscarCidadeN() {
		const { data } = await axios.get(`https://br-cidade-estado-nodejs.glitch.me/estados/${IdCidadeNaturalidade}/cidades`);
		setCidadesNaturalidade(data);
	}

	return (
		<>
			<Menu />

			<BTNVoltar onClick={() => history.goBack()}>
				<CgArrowLeft size="17px" />
			</BTNVoltar>

			<Container id="conteudos" className="scrollPage">
				<form onSubmit={SubmeterDados}>
					<Form>
						<BlocoInputGrande>
							<label className="noprint" htmlFor="rg">
								Numero do RG
							</label>
							<input type="text" id="rg" ref={NRG} required />
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label className="noprint" htmlFor="via">
								Via
							</label>
							<select id="via" ref={Via} onChange={(e) => setVia(e.target.value)} required>
								<option value="">Escolha a via</option>
								<option value="1º VIA">1ª VIA</option>
								<option value="2ª VIA">2ª VIA</option>
								<option value="3ª OU MAIS VIAS">3ª OU MAIS VIAS</option>
								<option value="MUDANÇA DE ESTADO CIVIL">MEC</option>
								<option value="RET. JUDICIAL">RET. JUDICIAL</option>
							</select>
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label className="noprint" htmlFor="isenção">
								Isenção
							</label>
							<select className="noprint" id="isenção" ref={Isençao} onChange={(e) => setIsençao(e.target.value)} required>
								<option value="">Situação do pagamento</option>
								<option value="pago">pago</option>
								<option value="isento">isento</option>
							</select>
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label className="noprint" htmlFor="resultado">
								Resultado
							</label>
							<input type="text" className="noprint" id="resultado" value={Resultado} ref={Result} required />
						</BlocoInputGrande>
						<div style={{ display: 'flex' }}>
							<BlocoInputGrande>
								<label className="noprint" htmlFor="usuario">
									Usuario
								</label>
								<input type="text" id="usuario" ref={Usuario} value={usuarioParseado.nome.split(' ')[0]} required />
							</BlocoInputGrande>
							<BlocoInputGrande>
								<label className="noprint" htmlFor="posto">
									Posto
								</label>
								<input type="text" id="posto" ref={Posto} value={usuarioParseado.posto} required />
							</BlocoInputGrande>
						</div>

						<BlocoInputGrande>
							<label className="noprint" htmlFor="nome_completo">
								Nome Completo
							</label>
							<input type="text" id="nome_completo" ref={NomeCompleto} required />
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label className="noprint" htmlFor="nome_pai">
								Nome do pai
							</label>
							<input type="text" id="nome_pai" ref={NomePai} required />
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label className="noprint" htmlFor="nome_mae">
								Nome da mãe
							</label>
							<input type="text" id="nome_mae" ref={NomeMae} required />
						</BlocoInputGrande>

						<BlocoInputGrande>
							<label className="noprint" htmlFor="data_nascimento">
								Data de Nascimento
							</label>
							<input type="date" id="data_nascimento" ref={DataNasc} required />
						</BlocoInputGrande>


						<div style={{ display: 'flex' }}>

						<BlocoInputGrande> 
								<label  style={{ fontSize: 15 }} className="noprint" htmlFor="estado"> 
									Estado Nasci.
								</label>
								<select id="estado" ref={Estado} onChange={(e) => setIdCidade(e.target.value)} required>
									<option value="">Escolha uma cidade</option>
									{Estados.map((e: any) => (
										<option key={e.id} value={e.id}>
											{e.estado}
										</option>
									))}
								</select>
							</BlocoInputGrande>

							<BlocoInputGrande>
								<label style={{ fontSize: 15 }} className="noprint" htmlFor="cidade">
									Cidade Nasci.
								</label>
								<select id="cidade" ref={Cidade} onClick={() => BuscarCidade()} required>
									<option value="">Escolha um valor</option>
									{Cidades.map((e: any) => {
										return (
											<option key={e.estadoId} value={e.cidade}>
												{e.cidade}
											</option>
										);
									})}
								</select>
							</BlocoInputGrande>


						

						
							
						</div>

						<BlocoInputGrande>
							<label className="noprint" htmlFor="telefone">
								Telefone
							</label>
							<input type="text" id="telefone" ref={Tel} required />
						</BlocoInputGrande>
						<Form2>
						<BlocoInputGrande>
							<label className="noprint" htmlFor="sexo">
								Sexo
							</label>
							<select id="sexo" ref={Sexo} onChange={ e => setSexo(e.target.value) } required>
								<option value="Masculino">Masculino</option>
								<option value="Feminino">Feminino</option>
							</select>
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label className="noprint" htmlFor="instruçao">
								Instrução
							</label>
							<select id="instruçao" ref={Instruçao} required>
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
						</Form2>
						
						<Form2>
						<BlocoInputGrande>
								<label className="noprint" htmlFor="cpf">
									CPF
								</label>
								<input type="text" id="cpf" ref={Cpf} required />
							</BlocoInputGrande>

							<BlocoInputGrande>
								<label className="noprint" htmlFor="pis">
									PIS
								</label>
								<input type="text" id="pis" ref={Pis} required />
							</BlocoInputGrande>

						</Form2>

							<BlocoInputGrande>
							<label className="noprint" htmlFor="profissao">
								Profissao
							</label>
							<select id="profissao" ref={Profissao} style={{ width: "100%" }} required>
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
								<label className="noprint" htmlFor="estado_civil">
									Estado Civil
								</label>
								<select id="estado_civil" ref={EstadoCivil} required>
									<option value="">Escolha um valor</option>
									<option value="Solteiro">Solteiro</option>
									<option value="Casado">Casado</option>
									<option value="Divorciado">Divorciado</option>
									<option value="Viuvo4">Viuvo</option>
								</select>
							</BlocoInputGrande>
							<BlocoInputGrande>
								<label className="noprint" htmlFor="certidao">
									Certidão
								</label>
								<select id="certidao" ref={Certidao} required>
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
								<label className="noprint" htmlFor="comarca">
									Comarca
								</label>
								<input type="text" id="comarca" ref={Comarca} required />
							</BlocoInputGrande>
							<BlocoInputGrande>
								<label className="noprint" htmlFor="distrito">
									Distrito
								</label>
								<input type="text" id="distrito" className="id_estadomora1" ref={Distrito} required />
							</BlocoInputGrande>

							<BlocoInputGrande>
								<label className="noprint" htmlFor="livro">
									Livro
								</label>
								<input type="text" id="livro" ref={Livro} required />
							</BlocoInputGrande>
							<BlocoInputGrande>
								<label className="noprint" htmlFor="folha">
									Folha
								</label>
								<input type="text" id="folha" ref={Folha} required />
							</BlocoInputGrande>
						</Form2L>
						<Form2R>
							<BlocoInputGrande>
								<label className="noprint" htmlFor="termo">
									Termo
								</label>
								<input type="text" id="termo" ref={Termo} required />
							</BlocoInputGrande>
							<BlocoInputGrande>
								<label className="noprint" htmlFor="data_registro">
									Data de Registro
								</label>
								<input type="date" id="data_registro" ref={DataRegistro} required />
							</BlocoInputGrande>
						</Form2R>
					</Form2>

					<Form2>
						<Form2L>
							<BlocoInputGrande>
								<label className="noprint" htmlFor="data_certidao">
									Data de Certidão
								</label>
								<input type="date" id="data_certidao" ref={DataCertidao} required />
							</BlocoInputGrande>

							<BlocoInputGrande>
								<label className="noprint" htmlFor="altura">
									Altura
								</label>
								<input type="text" id="altura" ref={Altura} required />
							</BlocoInputGrande>

							<BlocoInputGrande>
								<label className="noprint" htmlFor="cutis">
									Cutis
								</label>
								<select id="cutis" ref={Cutis} required>
									<option value="">Escolha um valor</option>
									<option value="Preto">Preto</option>
									<option value="pardo">Pardo</option>
									<option value="Amarelo">Amarelo</option>
									<option value="branco">Branco</option>
								</select>
							</BlocoInputGrande>

							<BlocoInputGrande>
								<label className="noprint" htmlFor="cor_cabelo">
									Cor do cabelo
								</label>
								<select id="cor_cabelo" ref={CorCabelo} required>
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
							{/* <BlocoInputGrande>
								<label className="noprint" htmlFor="tipo_cabelo">
									Tipo do cabelo
								</label>
								<select id="tipo_cabelo" ref={TipoCabelo} required>
									<option value="">Escolha um valor</option>
									<option value="Liso">Liso</option>
									<option value="Ondulado">Ondulado</option>
									<option value="Encaracolado">Encaracolado</option>
									<option value="Crespo">Crespo</option>
								</select>
							</BlocoInputGrande> */}
							<BlocoInputGrande>
								<label className="noprint" htmlFor="cor_olhos">
									Cor dos olhos
								</label>
								<select id="cor_olhos" ref={CorOlhos} required>
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
								<label style={{ fontSize:15 }} className="noprint" htmlFor="tipo_olhos">
									Tipo dos olhos
								</label>
								<select id="tipo_olhos" ref={TipoOlhos} required>
									<option value="">Escolha um valor</option>
									<option value="Redondos">Redondos</option>
									<option value="Orientais">Orientais</option>
									<option value="Grandes">Grandes</option>
									<option value="Pequenos">Pequenos</option>
								</select>
							</BlocoInputGrande>

							<BlocoInputGrande>
								<label className="noprint" htmlFor="barba">
									Barba
								</label>
								{ sexo === 'Feminino' ? (
									<select id="barba" ref={Barba} disabled>
									<option value="">Escolha um valor</option>
									<option value="">Em Branco</option>
									<option value="Imberbe">Imberbe</option>
									<option value="Rala">Rala</option>
									<option value="Cheia">Cheia</option>
									<option value="Rapada">Rapada</option>
									<option value="Longa">Longa</option>
								</select>
								) : (
								<select id="barba" ref={Barba}>
									<option value="">Escolha um valor</option>
									<option value="">Em Branco</option>
									<option value="Imberbe">Imberbe</option>
									<option value="Rala">Rala</option>
									<option value="Cheia">Cheia</option>
									<option value="Rapada">Rapada</option>
									<option value="Longa">Longa</option>
								</select>

								) }
							</BlocoInputGrande>
							
						</Form2L>
					</Form2>

					<Form2>
						<Form2X>
							<BlocoInputGrande>
								<label className="noprint" htmlFor="bigode">
									Bigode
								</label>
								<select id="bigode" ref={Bigode} required>
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
								<label className="noprint" htmlFor="anomalias">
									Anomalias
								</label>
								<input type="text" id="anomalias" ref={Anomalias} required />
							</BlocoInputGrande>
							<div style={{ display: 'grid', gridTemplateColumns: '5fr 1fr' }}>

								<BlocoInputGrande>
									<label className="noprint" htmlFor="endereco">
										Endereço
									</label>
									<input type="text" id="endereco" ref={Endereco} required />
								</BlocoInputGrande>
								<BlocoInputGrande>
									<label className="noprint" htmlFor="numero">
										Nº
									</label>
									<input type="text" id="numero" ref={Numero} required />
								</BlocoInputGrande>
							</div>
						</Form2X>

						<Form2R>
							<BlocoInputGrande>
								<label className="noprint" htmlFor="complemento">
									Complemento
								</label>
								<input type="text" id="complemento" ref={Complemento} required />
							</BlocoInputGrande>

							<BlocoInputGrande>
								<label className="noprint" htmlFor="bairro">
									Bairro
								</label>
								<input type="text" id="bairro" ref={Bairro} required />
							</BlocoInputGrande>
						</Form2R>

						<Form2X>
							<BlocoInputGrande>
								<label className="noprint" htmlFor="cep">
									CEP
								</label>
								<input type="text" id="cep" ref={Cep} required />
							</BlocoInputGrande>

							<BlocoInputGrande>
								<label className="noprint" htmlFor="estadoDeNaturalidade">
									Est. Residência
								</label>
								<select id="estadoDeNaturalidade" ref={EstadoNaturalidade} onChange={(e) => { 
									setIdCidadeNaturalidade(e.target.value)}} required>
									<option value="">Escolha um Estado</option>
									{EstadosNaturalidade.map((e: any) => (
										<option key={e.id} value={e.id}>
											{e.estado}
										</option>
									))}
								</select>
							</BlocoInputGrande>

							<BlocoInputGrande>
								<label style={{ fontSize: '15px' }} className="noprint" htmlFor="cidadeNaturalidade">
									Cid.de Residência
								</label>
								<select id="cidadeNaturalidade" ref={CidadeNaturalidade} onClick={() => BuscarCidadeN() } required>
									<option value="">Escolha um valor</option>
									{CidadesNaturalidade.map((e: any) => {
										return (
											<option key={e.estadoId} value={e.cidade}>
												{e.cidade}
											</option>
										);
									})}
								</select>
							</BlocoInputGrande>


						</Form2X>
						<div style={{ display: 'flex' }}>
							<BotãoPreto
								onClick={(evt: FormEvent) => {
									evt.preventDefault();
									window.print();
								}}
							>
								Imprimir
							</BotãoPreto>
							<BotãoPreto type="submit"> Enviar </BotãoPreto>
							{modal ? (
								<Camera />
							) : (
								<div className="noprint" style={{ display: 'flex' }}>
									<BotãoPreto
										id="botaoPreto"
										className="noprint"
										style={{
											marginTop: 5,
											width: 50,
											height: 40,
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											border: 'none',
											background: '#282a36',
											color: '#fff',
										}}
										onClick={(evt) => {
											evt.preventDefault();
											setModal(!modal);
										}}
									>
										<span id="tirarBotao">Tirar foto</span>
									</BotãoPreto>
								</div>
							)}
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', marginBottom: '25px' }}>
							<label className="noprint" htmlFor="observaçao">
								Observação
							</label>
							<textarea id="observaçao" ref={Observaçao} />
							<BlocoInputGrande>
								<label className="noprint" htmlFor="numeroFicha">
									Nº da Ficha
								</label>
								<input type="text" max="14" id="numeroFicha" ref={NumeroDaFicha} required  />
							</BlocoInputGrande>


							<div id="hiddenInputs">
								<input type="text" id="nrg" value={NRG.current?.value} />
								<input type="text" id="nomecompleto" value={NomeCompleto.current?.value} />
								<input type="text" id="posto2" value={Posto.current?.value} />
								<input type="text" id="DiaAtual" value={ new Date().toLocaleDateString() } />
								<input type="text" id="DiaAtual1" value={ new Date().toLocaleDateString() } />
								{imagemRegistro !== 'Optou por não tirar foto' && (
									<img src={imagemRegistro} id="ImagemCid" />
								)}
							</div>
						</div>
					</Form2>
				</form>
			</Container>
		</>
	);
};

export default Registro;
