import os

def obtener_nombres_archivos(carpeta):
    try:
        # Obtener la lista de archivos en la carpeta
        archivos = os.listdir(carpeta)
        # Filtrar solo los archivos (excluir subdirectorios)
        archivos = [archivo for archivo in archivos if os.path.isfile(os.path.join(carpeta, archivo))]
        return archivos
    except OSError as e:
        print(f"Error al obtener los nombres de archivos en la carpeta '{carpeta}': {e}")
        return []

# Ruta de la carpeta que contiene los archivos
carpeta = "img"

# Obtener los nombres de archivos en la carpeta
nombres_archivos = obtener_nombres_archivos(carpeta)

# Imprimir la lista de nombres de archivos
print("Nombres de archivos en la carpeta:")
for nombre_archivo in nombres_archivos:
    print(f'"img/{nombre_archivo}",')
