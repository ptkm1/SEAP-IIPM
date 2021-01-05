import React from 'react';
import { CgArrowLeft } from "react-icons/cg";
import { useHistory } from 'react-router-dom';
import { BotãoPreto } from '../../../App/Componentes/Botoes/Botoes.Styled';
import { BTNVoltar } from '../../../App/Componentes/Botoes/BotoesVoltar.Styled';
import { BlocoInputGrande } from '../../../App/Componentes/Inputs/Inputs.Styled';
import Menu from '../../../App/Componentes/Menu';
import { Container, Form, Form2, Form2L, Form2R, Form2X } from '../../../App/Styles/FormTemplate.Styled';



const Registro: React.FC = () => {

  const history = useHistory()

  // UseRefs

  async function HandleRegister( event: React.FormEvent<HTMLFormElement> ) {
    event.preventDefault()

  }

	return (
		<>
			<Menu />

      <BTNVoltar onClick={ ()=> history.goBack() }>
        <CgArrowLeft size="17px" />
      </BTNVoltar>


			<Container id="conteudos" className="scrollPage">

      <form onSubmit={HandleRegister}>
				<Form>
					<BlocoInputGrande>
						<label htmlFor="rg" >Numero do RG</label>
						<input type="text" id="rg" />
					</BlocoInputGrande>
					<BlocoInputGrande>
						<label htmlFor="via">Via</label>
						<input type="text" id="via" />
					</BlocoInputGrande>
					<BlocoInputGrande>
						<label htmlFor="isenção">Isenção</label>
						<select id="isenção">
							<option value="0">Escolha um valor</option>
						</select>
					</BlocoInputGrande>
					<BlocoInputGrande>
						<label htmlFor="resultado">Resultado</label>
						<input type="text" id="resultado" />
					</BlocoInputGrande>
					<div style={{ display: 'flex' }}>
						<BlocoInputGrande>
							<label htmlFor="usuario">Usuario</label>
							<input type="text" id="usuario" />
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="posto">Posto</label>
							<input type="text" id="posto" />
						</BlocoInputGrande>
					</div>

					<BlocoInputGrande>
						<label htmlFor="nome_completo">Nome Completo</label>
						<input type="text" id="nome_completo" />
					</BlocoInputGrande>
					<BlocoInputGrande>
						<label htmlFor="nome_pai">Nome do pai</label>
						<input type="text" id="nome_pai" />
					</BlocoInputGrande>
					<BlocoInputGrande>
						<label htmlFor="nome_mae">Nome da mãe</label>
						<input type="text" id="nome_mae" />
					</BlocoInputGrande>

					<BlocoInputGrande>
						<label htmlFor="data_nascimento">Data de Nascimento</label>
						<input type="date" id="data_nascimento" />
					</BlocoInputGrande>

					<div style={{ display: 'flex' }}>
						<BlocoInputGrande>
							<label htmlFor="cpf">CPF</label>
							<input type="text" id="cpf" />
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="pis">PIS</label>
							<input type="text" id="pis" />
						</BlocoInputGrande>
					</div>

					<BlocoInputGrande>
						<label htmlFor="telefone">Telefone</label>
						<input type="text" id="telefone" />
					</BlocoInputGrande>
					<BlocoInputGrande>
						<label htmlFor="sexo">Sexo</label>
						<input type="text" id="sexo" />
					</BlocoInputGrande>
					<BlocoInputGrande>
						<label htmlFor="instruçao">Instrução</label>
						<select id="instruçao">
							<option value="0">Escolha um valor</option>
						</select>
					</BlocoInputGrande>
					<BlocoInputGrande>
						<label htmlFor="profissao">Profissao</label>
						<select id="profissao">
							<option value="0">Escolha um valor</option>
						</select>
					</BlocoInputGrande>

					<div style={{ display: 'flex' }}>
						<BlocoInputGrande>
							<label htmlFor="estado_civil">Estado Civil</label>
							<select id="estado_civil">
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="certidao">Certidão</label>
							<select id="certidao">
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>
					</div>
				</Form>

				<Form2>
					<Form2L>
						<BlocoInputGrande>
							<label htmlFor="comarca">Comarca</label>
							<input type="text" id="comarca" />
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="distrito">Distrito</label>
							<input type="text" id="distrito" />
						</BlocoInputGrande>

						<BlocoInputGrande>
							<label htmlFor="comarca">Livro</label>
							<input type="text" id="comarca" />
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="folha">Folha</label>
							<input type="text" id="folha" />
						</BlocoInputGrande>
					</Form2L>
					<Form2R>
						<BlocoInputGrande>
							<label htmlFor="termo">Termo</label>
							<input type="text" id="termo" />
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="data_registro">Data de Registro</label>
							<input type="date" id="data_registro" />
						</BlocoInputGrande>
					</Form2R>
				</Form2>

				<Form2>
					<Form2L>
						<BlocoInputGrande>
							<label htmlFor="data_certidao">Data de Certidão</label>
							<input type="date" id="data_certidao" />
						</BlocoInputGrande>

						<BlocoInputGrande>
							<label htmlFor="altura">Altura</label>
							<input type="text" id="altura" />
						</BlocoInputGrande>

						<BlocoInputGrande>
							<label htmlFor="cutis">Cutis</label>
							<select id="cutis">
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>

						<BlocoInputGrande>
							<label htmlFor="cor_cabelo">Cor do cabelo</label>
							<select id="cor_cabelo">
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>
					</Form2L>
					<Form2L>
						<BlocoInputGrande>
							<label htmlFor="tipo_cabelo">Tipo do cabelo</label>
							<select id="tipo_cabelo">
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="cor_olhos">Cor dos olhos</label>
							<select id="cor_olhos">
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>

						<BlocoInputGrande>
							<label htmlFor="tipo_olhos">Tipo dos olhos</label>
							<select id="tipo_olhos">
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>

						<BlocoInputGrande>
							<label htmlFor="barba">Barba</label>
							<select id="barba">
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>
					</Form2L>
				</Form2>

				<Form2>
					<Form2X>
						<BlocoInputGrande>
							<label htmlFor="bigode">Bigode</label>
							<select id="bigode">
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
								<input type="text" id="numero" />
							</BlocoInputGrande>

							<BlocoInputGrande>
								<label htmlFor="endereco">Endereço</label>
								<input type="text" id="endereco" />
							</BlocoInputGrande>
						</div>
					</Form2X>

					<Form2R>
						<BlocoInputGrande>
							<label htmlFor="complemento">Complemento</label>
							<input type="text" id="complemento" />
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="bairro">Bairro</label>
							<input type="text" id="bairro" />
						</BlocoInputGrande>
					</Form2R>

					<Form2X>
						<BlocoInputGrande>
							<label htmlFor="cep">CEP</label>
							<input type="text" id="cep" />
						</BlocoInputGrande>

						<BlocoInputGrande>
							<label htmlFor="estado">Estado</label>
							<select id="estado">
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>
						<BlocoInputGrande>
							<label htmlFor="estado">Cidade</label>
							<select id="estado">
								<option value="0">Escolha um valor</option>
							</select>
						</BlocoInputGrande>
						<div style={{ display: 'flex' }}>
							<BotãoPreto> Imprimir </BotãoPreto>
							<BotãoPreto> Enviar </BotãoPreto>
						</div>
					</Form2X>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<label htmlFor="observaçao">Observação</label>
						<textarea id="observaçao" />
					</div>
				</Form2>

        </form>
			</Container>
		</>
	);
};

export default Registro;
