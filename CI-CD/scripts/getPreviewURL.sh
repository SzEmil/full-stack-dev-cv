
# Pobierz adres URL podglądu z logów
preview_url=$(grep -Eo "Preview: https:\/\/(.*)" <<< "$BUILD_LOG")

# Usuń znaki specjalne z adresu URL podglądu
preview_url=${preview_url##*:}

echo "previewURL to: $preview_url"

