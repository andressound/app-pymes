from openai import OpenAI
import mysql.connector
import json
import decimal

client = OpenAI(
    api_key="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",  # Clave de DeepSeek
    base_url="https://openrouter.ai/api/v1"  # Endpoint de DeepSeek
)

def obtener_datos_financieros():
    conexion = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="save_with_us"
    )

    cursor = conexion.cursor(dictionary=True)

    tablas = [
        "capacidad_endeudamiento", "indice_rotacion_cuentas_cobrar", "indice_rotacion_pagar",
        "margen_bruto", "razon_deuda_patrimonio", "roa", "roe", "rotacion_inventario"
    ]

    resultados = {}
    for tabla in tablas:
        cursor.execute(f"SELECT * FROM {tabla} ORDER BY fecha DESC LIMIT 1")
        resultado = cursor.fetchone()
        if resultado:
            # Convertir los valores Decimal a float
            for key, value in resultado.items():
                if str(type(value)) == "<class 'decimal.Decimal'>":
                    resultado[key] = float(value)
            resultados[tabla] = resultado

    conexion.close()
    return resultados

import decimal

def analizar_datos(datos):
    prompt = f"""
Eres un analista financiero. A continuación tienes un resumen de los indicadores financieros más recientes de una empresa.
Con base en estos datos, evalúa si la empresa está en riesgo financiero, estable o saludable, y proporciona una recomendación:

{json.dumps(datos, indent=2, default=lambda x: float(x) if isinstance(x, decimal.Decimal) else str(x))}

Responde de forma breve y clara con un diagnóstico financiero utilizando los ultimos datos registrados.
"""

    response = client.chat.completions.create(
        model="deepseek/deepseek-r1:free",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )

    return response.choices[0].message.content

if __name__ == "__main__":
    datos = obtener_datos_financieros()
    resultado = analizar_datos(datos)
    print(json.dumps({"diagnostico": resultado}, ensure_ascii=False))
