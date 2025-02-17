#!/bin/bash

echo "Restaurando la base de datos desde el backup..."

# Restaurar la base de datos
mongorestore --uri="mongodb://localhost:27017" ./backup/test

echo "Restauración completada."
