# Open SSL


### O que o OpenSSL?
O OpenSSL uma biblioteca de código aberto que implementa os protocolos de segurana SSL e
TLS, usados para garantir comunicação segura entre sistemas como HTTPS.

Algumas ferramentas, como o **Thunder Client** (extensão do VSCode), dependem dessa biblioteca
para funcionar corretamente em conexões seguras.


### Como instalar o OpenSSL no Windows
1. Acesse o site oficial do instalador: https://slproweb.com/products/Win32OpenSSL.html
2. Baixe o instalador adequado para sua mquina:
 - Se o Windows for 64 bits, escolha Win64 OpenSSL v...
3. Execute o instalador e siga as instruções:
 - Aceite os termos
 - Escolha o diretório de instalação (pode deixar o padrão)
 - Quando aparecer a opção "Copy OpenSSL DLLs to: The OpenSSL binaries (/bin) directory",
selecione essa opção
 - Na etapa de variáveis de ambiente, marque para adicionar o caminho do OpenSSL ao PATH do
sistema
 - Finalize a instalação
4. Reinicie o computador (ou, pelo menos, o VSCode)
 
### Verificando se está instalado corretamente
Abra o Prompt de Comando (cmd) e digite:
 `openssl version`

Se aparecer algo como `OpenSSL 1.1.1` ou superior, está tudo certo

Tente realizar uma requisição usando o **Thunder Client** novamente para confirmar que o erro parou de ocorrer
