package br.com.tokiomarine.dto;

import br.com.tokiomarine.domain.Endereco;

import java.util.List;

public class ClienteDTO {

    private Long id;
    private String nome;
    private String email;
    private List<Endereco> enderecos;

    public ClienteDTO() {
    }

    public ClienteDTO(Long id, String nome, String email, List<Endereco> enderecos) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.enderecos = enderecos;
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
