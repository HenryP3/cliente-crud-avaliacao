package br.com.tokiomarine.controller;

import br.com.tokiomarine.domain.Endereco;
import br.com.tokiomarine.dto.EnderecoDTO;
import br.com.tokiomarine.repository.ClienteRepository;
import br.com.tokiomarine.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
@RequestMapping("enderecos")
@CrossOrigin(origins = "http://localhost:4200")
public class EnderecoController {
	
	@Autowired
	private EnderecoRepository enderecoRepository;

	@Autowired
	private ClienteRepository clienteRepository;
	
	@GetMapping(path = "/listar/{id}")
	public Iterable<Endereco> listarEnderecos(@PathVariable(value = "id") Long idCliente) {
		Iterable<Endereco> enderecos = enderecoRepository.findAll();
		return StreamSupport.stream(enderecos.spliterator(), false)
				.filter(end -> end.getCliente().getId().equals(idCliente))
				.collect(Collectors.toList());
	}

	@PostMapping(path = "/salva")
	public Endereco adicionaAtualizaEndereco(@RequestBody EnderecoDTO endereco) {
		return enderecoRepository.save(new Endereco(endereco, clienteRepository.findById(endereco.getCliente()).get()));
	}

	@PostMapping(path = "/remove")
	public void removeEndereco(@RequestBody Long id) {
		enderecoRepository.deleteById(id);
	}

	@PostMapping(path = "/seleciona")
	public Optional<Endereco> selectById(@RequestBody Long id) {
		return enderecoRepository.findById(id);
	}
	
}
