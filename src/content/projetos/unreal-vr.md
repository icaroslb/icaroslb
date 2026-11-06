---
titulo: Multiplayer em VR e interação externa via HTTP
capa: ./unreal-vr/unreal-vr.png
imagens: [./unreal-vr/unreal-vr-1.png, ./unreal-vr/unreal-vr-2.png, ./unreal-vr/unreal-vr-3.png]
resumo: Projeto para estudos utilizando VR, multiplayer e comunicação externa via HTTP na Unreal
tipo: jogo
ano: 2025
tecnologias: [Unreal, Blueprint, C++]
destaque: true
---

### Contexto
O projeto foi desenvolvido na Unreal Engine com o objetivo de aprofundar o entendimento prático em três áreas principais: desenvolvimento para Realidade Virtual (VR), criação e estruturação de sistemas multiplayer, e integração de comunicação via protocolo HTTP com aplicativos externos.

### Processo criativo

* O projeto teve início com a criação de um modelo base focado exclusivamente no funcionamento em Realidade Virtual.


* Na sequência, foi desenvolvido o sistema multiplayer do jogo, focado em conectar os dispositivos de exibição (HMDs) a um servidor central.


* O processo envolveu a configuração desse servidor para receber e processar dados de um aplicativo externo da própria Unreal.


* Como aplicação prática desse sistema, foi criada uma interação onde o aplicativo externo modifica a cor da iluminação do jogo, tornando essa alteração visível simultaneamente em todos os HMDs.



### Tomada de decisão

* Optou-se por utilizar o servidor central não apenas para hospedar a partida, mas também como o intermediador direto da comunicação entre os HMDs dos jogadores.


* Escolheu-se concentrar as requisições HTTP no servidor central, garantindo que qualquer alteração de estado vinda do aplicativo externo (como a mudança de iluminação) fosse recebida em um único ponto e repassada de forma sincronizada para todos os clientes conectados.



### Participação
O projeto foi desenvolvido de forma autoral, assumindo a responsabilidade por todas as etapas da implementação: desde a criação do modelo inicial em VR até a programação da rede multiplayer e a integração do servidor com sistemas externos via HTTP.