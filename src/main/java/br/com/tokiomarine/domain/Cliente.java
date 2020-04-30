package br.com.tokiomarine.domain;
import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import br.com.tokiomarine.dto.ClienteDTO;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Cliente {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	@NotEmpty
	private String nome;

	@Column(nullable = false)
	@NotEmpty
	@Email
	private String email;

	@OneToMany(targetEntity=Endereco.class, cascade=CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Endereco> enderecos;

	public Cliente() {
	}

	public Cliente(ClienteDTO cliente) {
		if (cliente.getId() != null) {
			this.id = cliente.getId();
		}
		this.nome = cliente.getNome();
		this.email = cliente.getEmail();
		this.enderecos = cliente.getEnderecos();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<Endereco> getEnderecos() {
		return enderecos;
	}

	public void setEnderecos(List<Endereco> enderecos) {
		this.enderecos = enderecos;
	}
}