package br.com.tokiomarine.controller;

import br.com.tokiomarine.dto.ClienteDTO;
import br.com.tokiomarine.dto.ClientePagDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import br.com.tokiomarine.domain.Cliente;
import br.com.tokiomarine.repository.ClienteRepository;

import java.util.Optional;

@RestController
@RequestMapping("clientes")
@CrossOrigin(origins = "http://localhost:4200")
public class ClienteController {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@GetMapping()
	public Iterable<Cliente> listarClientes() {
		return clienteRepository.findAll();
	}

	@PostMapping(path = "/salva")
	public Cliente adicionaAtualizaCliente(@RequestBody ClienteDTO cliente) {
		return clienteRepository.save(new Cliente(cliente));
	}

	@PostMapping(path = "/remove")
	public Iterable<Cliente> removeCliente(@RequestBody Long id) {
		clienteRepository.deleteById(id);
		return clienteRepository.findAll();
	}

	@PostMapping(path = "/seleciona")
	public Optional<Cliente> selectById(@RequestBody Long id) {
		return clienteRepository.findById(id);
	}

	/**
	 * Testar com Postman
	 * @param clientePag
	 * @return
	 */
	@PostMapping(path = "/paginado")
	public Page<Cliente> listarClientesPaginado(@RequestBody ClientePagDTO clientePag) {
		return clienteRepository.findAll(PageRequest.of(clientePag.getPageNumber(), clientePag.getPageSize(), Sort.by("nome")));
	}
	
}
