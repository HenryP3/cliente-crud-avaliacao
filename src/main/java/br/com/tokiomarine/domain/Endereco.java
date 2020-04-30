package br.com.tokiomarine.domain;

import br.com.tokiomarine.dto.EnderecoDTO;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class Endereco {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(nullable = false)
	@NotEmpty
	private String cep;

	private String logradouro;

	@Column(nullable = false)
	@NotNull
	private Long numero;

	private String complemento;

	private String bairro;

	private String cidade;

	private String uf;

	private String ibge;

	@ManyToOne()
	@JoinColumn(name="cliente_id", updatable = false)
	private Cliente cliente;

	public Endereco() {
	}

	public Endereco(EnderecoDTO dto, Cliente cliente) {
		if (dto.getId() != null) {
			this.id = dto.getId();
		}
		this.cep = dto.getCep();
		this.logradouro = dto.getLogradouro();
		this.numero = dto.getNumero();
		this.complemento = dto.getComplemento();
		this.bairro = dto.getBairro();
		this.cidade = dto.getCidade();
		this.uf = dto.getUf();
		this.ibge = dto.getIbge();
		this.cliente = cliente;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getLogradouro() {
		return logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public Long getNumero() {
		return numero;
	}

	public void setNumero(Long numero) {
		this.numero = numero;
	}

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}

	public String getIbge() {
		return ibge;
	}

	public void setIbge(String ibge) {
		this.ibge = ibge;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}
}