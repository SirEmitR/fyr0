const generateFieldMessages = (field, translations) => ({
    es: {
      label: translations.es,
      required: `El ${field} es requerido`,
      minLength: (cant) => `El ${field} debe tener al menos ${cant} caracteres`,
      maxLength: (cant) => `El ${field} debe tener menos de ${cant} caracteres`,
    },
    en: {
      label: translations.en,
      required: `${translations.en} is required`,
      minLength: (cant) => `${translations.en} must be at least ${cant} characters`,
      maxLength: (cant) => `${translations.en} must be less than ${cant} characters`,
    },
  });
  
  const REGISTER_TEXT = {
    name: generateFieldMessages("nombre", { es: "Nombre", en: "First name" }),
    lastName: generateFieldMessages("apellido/s", { es: "Apellido/s", en: "Last name" }),
    email: generateFieldMessages("correo electrónico", { es: "Correo electrónico", en: "Email" }),
    phone: generateFieldMessages("teléfono", { es: "Teléfono", en: "Phone" }),
    password: generateFieldMessages("contraseña", { es: "Contraseña", en: "Password" }),
    verifyCode: generateFieldMessages("código de verificación", { es: "Código de verificación", en: "Verification code" }),
    terms: {
      es: {
        label: "Aceptar términos y condiciones",
        required: "Debes aceptar los términos y condiciones",
      },
      en: {
        label: "Accept terms and conditions",
        required: "You must accept the terms and conditions",
      }
    }
  };
  