import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const accessKey = process.env.WEB3FORMS_KEY;

    if (!accessKey) {
      console.error("WEB3FORMS_KEY no configurada");
      return NextResponse.json(
        { success: false, message: "Configuración incompleta" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...body,
        access_key: accessKey,
      }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      console.error("Error Web3Forms:", data);

      return NextResponse.json(
        { success: false, message: "No se pudo enviar la consulta" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Consulta enviada correctamente",
    });
  } catch (error) {
    console.error("Error enviando formulario:", error);

    return NextResponse.json(
      { success: false, message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}