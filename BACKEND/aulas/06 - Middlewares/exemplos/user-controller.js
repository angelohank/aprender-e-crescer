let usuarios = [{ id: 1, username: "angelohank", password: "123" }];

export function checkUsuario(usuario, senha) {
  const usuarioEncontrado = usuarios.find(
    (u) => u.username === usuario && u.password === senha,
  );

  return usuarioEncontrado;
}
