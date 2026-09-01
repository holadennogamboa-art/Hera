#!/bin/bash
# Abrir el panel del Auditor GEO con doble clic.
#
# INSTALACIÓN (una sola vez):
#   1. Guarda este archivo en el Escritorio.
#   2. Abre la Terminal y ejecuta:  chmod +x ~/Desktop/abrir-panel.command
#   3. A partir de ahora, doble clic y listo.
#
# La ventana negra que se abre ES el servidor. Déjala abierta mientras trabajas.
# Para apagarlo: pulsa Ctrl + C en esa ventana, o ciérrala.

cd ~/geo-auditor || { echo "No encuentro ~/geo-auditor"; read -n1; exit 1; }

echo "Arrancando el panel del Auditor GEO..."
echo "Se abrirá solo en el navegador. Deja esta ventana abierta."
echo

# Abrir el navegador cuando el servidor esté listo
( sleep 2; open http://localhost:4321 ) &

node servidor.mjs
