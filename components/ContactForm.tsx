async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);

  formData.append(
    "access_key",
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ""
  );

  setStatus("sending");

  try {
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || "No se pudo enviar el formulario."
      );
    }

    form.reset();
    setStatus("success");
  } catch (error) {
    console.error("Error al enviar el formulario:", error);
    setStatus("error");
  }
}
