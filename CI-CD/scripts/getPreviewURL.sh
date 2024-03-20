#!/bin/bash

# Pobierz cały log kompilacji do zmiennej
build_log="$BUILD_LOG"
echo $build_log
# Użyj sed zamiast grep, aby wyodrębnić adres URL podglądu, uwzględniając znaki specjalne
preview_url=$(sed -n 's/^.*Preview: https:\/\/\([^"]*\).*/\1/p' <<< "$build_log")

# Sprawdź, czy istnieje adres URL podglądu
if [ -z "$preview_url" ]; then
  echo "Nie znaleziono adresu URL podglądu w logach kompilacji."
  exit 1
fi

# Wydrukuj adres URL podglądu
echo "previewURL to: $preview_url"